import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, SafeAreaView, Alert } from 'react-native';
import CustomButton from '../components/Button/CustomButton';
import StudentModal from '../components/Model/StudentModal';
import { getListStudent, addStudent, updateStudent, deleteStudent, clearForm } from '../services/firestoreService';
import { TailwindProvider } from 'nativewind';

const HomeScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [modelStudent, setModelStudent] = useState(false);
    const [userId, setUserId] = useState(null);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const students = await getListStudent();
        setUsers(students);
    };

    const handleRemove = async (item) => {
        await deleteStudent(item.id, item.firstname);
        fetchStudents();
    };

    const handleCreate = () => setModelStudent(true);
    const handleClose = () => setModelStudent(false);

    const handleSave = async () => {
        try {
            const studentData = { firstname, lastname, username, email, phone };

            if (userId == null) {
                await addStudent(studentData);
            } else {
                await updateStudent(userId, studentData);
            }

            fetchStudents();
            handleClose();
            clearForm({ setUserId, setFirstname, setLastname, setUsername, setEmail, setPhone });
        } catch (error) {
            console.error('Error handling save: ', error);
            Alert.alert('Error', error.message);
        }
    };

    const handleEdit = (item) => {
        setUserId(item.id);
        setFirstname(item.firstname);
        setLastname(item.lastname);
        setUsername(item.username);
        setEmail(item.email);
        setPhone(item.phone);
        setModelStudent(true);
    };

    return (
        <TailwindProvider>
            <SafeAreaView className="flex-1 p-4 bg-[#e0e7ff]">
                <StudentModal
                    visible={modelStudent}
                    handleClose={handleClose}
                    handleSave={handleSave}
                    firstname={firstname}
                    setFirstname={setFirstname}
                    lastname={lastname}
                    setLastname={setLastname}
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    phone={phone}
                    setPhone={setPhone}
                />

                <View className="flex-row justify-between mb-6">
                    <Text className="p-2 pb-2 pl-2 mt-1 text-3xl text-black border-2 border-black rounded-[35px] bg-[#ecfdf5] font-bold">
                        Student List {users.length}
                    </Text>
                    <CustomButton onPress={handleCreate} title="Add New" className="border-2 border-black rounded-[30px] bg-[#ecfdf5] mt-2" />
                </View>

                <ScrollView>
                    {users.map((item) => (
                        <View key={item.id} className="flex-row justify-between p-4 my-2 bg-white border rounded border-black-300">
                            <View>
                                <Text className="text-lg font-bold text-[#172554]">{item.firstname}</Text>
                                <Text className="text-sm text-[#1e293b]">{item.username}</Text>
                                <Text className="text-sm text-[#334155]">{item.email}</Text>
                                <Text className="text-sm text-gray-500">{item.phone}</Text>
                            </View>
                            <View>
                                <CustomButton onPress={() => handleRemove(item)} title="Delete" className="p-1 text-red-600 border-2 border-rose-500 rounded-2xl pl-[8px]" />
                                <CustomButton onPress={() => handleEdit(item)} title="Edit" className="p-1 pl-[14px] mt-8 text-blue-600 border-2 border-blue-600 rounded-2xl" />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </TailwindProvider>
    );
};

export default HomeScreen;
