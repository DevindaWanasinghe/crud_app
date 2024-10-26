import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
import StudentModal from '../../components/Model/StudentModal';
import StudentSearch from '../../components/Button/StudentSearch';
import {
  getListStudent,
  addStudent,
  updateStudent,
  deleteStudent
} from '../../services/firestoreService';

const StudentScreen = () => {
  const [students, setStudents] = useState([]);
  const [studentCount, setStudentCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);

  // Form field states
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [fatherJob, setFatherJob] = useState('');
  const [motherJob, setMotherJob] = useState('');
  const [brotherCount, setBrotherCount] = useState('');
  const [sisterCount, setSisterCount] = useState('');
  const [townVillage, setTownVillage] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  // Fetch students when the screen loads
  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch students from Firestore
  const fetchStudents = async () => {
    const studentList = await getListStudent();
    setStudents(studentList);
    setStudentCount(studentList.length); 
  };

  // Generate next enrollment number
  const generateEnrollmentNumber = () => {
    const currentCount = students.length + 1; // Increment count for new enrollment number
    const enrollmentNum = `UWU/ICT/22/${String(currentCount).padStart(3, '0')}`; // Format like "UWU/ICT/22/XXX"
    setEnrollmentNumber(enrollmentNum);
  };

  // Handle save (either add or update student)
  const handleSave = async () => {
    if (!firstname || !lastname || !username || !email || !phone || !fatherJob || !motherJob || !brotherCount || !sisterCount || !townVillage || !whatsappNumber) {
      Alert.alert('Please fill in all fields.');
      return;
    }

    const studentData = { 
      firstname, 
      lastname, 
      username, 
      email, 
      phone, 
      enrollmentNumber, 
      fatherJob,
      motherJob,
      brotherCount,
      sisterCount,
      townVillage,
      whatsappNumber
    };

    try {
      if (editingStudentId) {
        await updateStudent(editingStudentId, studentData);
      } else {
        await addStudent(studentData);
        setStudentCount(prevCount => prevCount + 1); 
      }
      fetchStudents();
      handleClose();
    } catch (error) {
      console.error('Error saving student:', error);
    }
  };

  // Handle delete student
  const handleDelete = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this student?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await deleteStudent(id);
            setStudentCount(prevCount => prevCount - 1); 
            fetchStudents();
          }
        },
      ],
      { cancelable: true }
    );
  };

  const handleAddStudent = () => {
    // Clear the form fields
    setFirstname('');
    setLastname('');
    setUsername('');
    setEmail('');
    setPhone('');
    setFatherJob('');
    setMotherJob('');
    setBrotherCount('');
    setSisterCount('');
    setTownVillage('');
    setWhatsappNumber('');
    
    setEditingStudentId(null);
    generateEnrollmentNumber(); 
    setModalVisible(true);
  };

  const handleEditStudent = (student) => {
    setEditingStudentId(student.id);
    setFirstname(student.firstname);
    setLastname(student.lastname);
    setUsername(student.username);
    setEmail(student.email);
    setPhone(student.phone);
    setEnrollmentNumber(student.enrollmentNumber);
    setFatherJob(student.fatherJob);
    setMotherJob(student.motherJob);
    setBrotherCount(student.brotherCount);
    setSisterCount(student.sisterCount);
    setTownVillage(student.townVillage);
    setWhatsappNumber(student.whatsappNumber);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    // Clear the form fields when the modal is closed
    setFirstname('');
    setLastname('');
    setUsername('');
    setEmail('');
    setPhone('');
    setEnrollmentNumber('');
    setFatherJob('');
    setMotherJob('');
    setBrotherCount('');
    setSisterCount('');
    setTownVillage('');
    setWhatsappNumber('');
  };

  // Render student list
  const renderStudent = ({ item }) => (
    <View className="p-3 mb-3 bg-white border border-gray-400 rounded-md">
      <Text className="font-medium">Enrollment No: {item.enrollmentNumber}</Text> 
      <Text className="font-bold">{item.firstname} {item.lastname}</Text>
      <Text>{item.username}</Text>
      <Text>{item.email}</Text>
      <Text>{item.phone}</Text>
      <Text>Father's Job: {item.fatherJob}</Text>
      <Text>Mother's Job: {item.motherJob}</Text>
      <Text>Brothers: {item.brotherCount}</Text>
      <Text>Sisters: {item.sisterCount}</Text>
      <Text>Town / Village: {item.townVillage}</Text>
      <Text>WhatsApp: {item.whatsappNumber}</Text>
      
      <View className="absolute space-y-2 right-2 top-2" >
        <TouchableOpacity title="Edit" onPress={() => handleEditStudent(item)} className="p-2 bg-blue-500 rounded-md">
          <Text className="ml-[6px] font-bold text-white">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity title="Delete" onPress={() => handleDelete(item.id)} className="p-2 bg-red-500 rounded-md">
          <Text className="font-bold text-white">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 p-5 bg-gray-200">
      <View className="flex-row justify-between mb-4">
        <Text className="text-2xl font-bold">Student Management</Text>
        <Text className="text-2xl font-bold">{studentCount}</Text> 
      </View>
      <View className="mb-4">
        <Button title="Add New Student" onPress={handleAddStudent} />
        <StudentSearch students={students} /> 
      </View>

      <FlatList
        data={students.sort((a, b) => a.enrollmentNumber.localeCompare(b.enrollmentNumber))}
        keyExtractor={(item) => item.id}
        renderItem={renderStudent}
      />

      <StudentModal
        visible={modalVisible}
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
        enrollmentNumber={enrollmentNumber} 
        setEnrollmentNumber={setEnrollmentNumber} 
        fatherJob={fatherJob}
        setFatherJob={setFatherJob}
        motherJob={motherJob}
        setMotherJob={setMotherJob}
        brotherCount={brotherCount}
        setBrotherCount={setBrotherCount}
        sisterCount={sisterCount}
        setSisterCount={setSisterCount}
        townVillage={townVillage}
        setTownVillage={setTownVillage}
        whatsappNumber={whatsappNumber}
        setWhatsappNumber={setWhatsappNumber}
      />
    </View>
  );
};

export default StudentScreen;
