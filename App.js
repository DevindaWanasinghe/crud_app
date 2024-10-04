//import {hairlineWidth} from 'nativewind';
import React, {useEffect, useState} from 'react';
//import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import customFirebase from './firebaseConfig';

import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from 'react-native';

const App = () => {
  // State to store list of users
  const [users, setUsers] = useState([]);

  // State to control visibility -> "Add New Student" modal
  const [modelStudent, setModelStudent] = useState(false);

  // States to store data for a new student
  const [userId, setUserId] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  //Fetch student data from the API
  useEffect(() => {
    getListStudent();
  }, []);

  //Get Students details From the API
  const getListStudent = async () => {
    const userList = [];
    const querySnapshot = await firestore().collection('students').get();
    querySnapshot.forEach(documentSnapshot => {
      userList.push({
        ...documentSnapshot.data(),
        id: documentSnapshot.id,
      });
    });
    setUsers(userList);
  };

  //Delete Studenet Details from the  list
  const handleRemove = async item => {
    await firestore().collection('students').doc(item.id).delete();
    getListStudent();
    Alert.alert('Deleted', `User ${item.firstname} has been deleted.`);
  };

  //Add New Studenet Details
  const handleCreate = () => {
    setModelStudent(true);
  };

  //close screen without saving
  const handleClose = () => {
    setModelStudent(false);
  };

  //Save New Student details to the API
  const handleSave = async () => {
    try {
      if (userId == null) {
        await firestore().collection('students').add({
          firstname,
          lastname,
          username,
          email,
          phone,
        });
        Alert.alert('Saved', 'New user has been added.');
      } else {
        const docRef = firestore().collection('students').doc(userId);
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          await docRef.update({
            firstname,
            lastname,
            username,
            email,
            phone,
          });
          Alert.alert('Saved', 'User has been updated.');
        } else {
          Alert.alert('Error', 'User not found.');
        }
      }
      getListStudent();
      setModelStudent(false);
      clearForm();
    } catch (error) {
      console.error('Error handling save: ', error);
      Alert.alert('Error', error.message);
    }
  };

  const clearForm = () => {
    setUserId(null);
    setFirstname('');
    setLastname('');
    setUsername('');
    setEmail('');
    setPhone('');
  };

  const handleEdit = item => {
    setUserId(item.id);
    setFirstname(item.firstname);
    setLastname(item.lastname);
    setUsername(item.username);
    setEmail(item.email);
    setPhone(item.phone);
    setModelStudent(true);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-[#e0e7ff]">
      <Modal visible={modelStudent}>
        <SafeAreaView>
          <ScrollView
            contentContainerStyle={{paddingBottom: 50}}
            className="bg-[#e0e7ff]">
            {/* Header Title & Close Button */}
            <View className="flex-row justify-between p-4 ">
              <Text className="text-black text-[22px] font-bold">
                New Student
              </Text>

              <TouchableOpacity onPress={handleClose}>
                <Text className=" text-gray-600 text-[22px] font-bold ">
                  Close
                </Text>
              </TouchableOpacity>
            </View>

            {/* Details */}
            <View className="px-5 mt-5 ">
              <Text className="text-[20px] ml-4 mb-2">First Name</Text>
              <TextInput
                className="p-2 mx-6 mb-3 border-2 border-blue-700 rounded-lg"
                placeholder="Devinda"
                value={firstname}
                onChangeText={text => {
                  setFirstname(text);
                }}
              />

              <Text className="text-[20px] ml-4 mb-2">Last Name</Text>
              <TextInput
                className="p-2 mx-6 mb-3 border-2 border-blue-700 rounded-lg"
                placeholder="Wanasinghe"
                value={lastname}
                onChangeText={text => {
                  setLastname(text);
                }}
              />

              <Text className="text-[20px] ml-4 mb-2">User Name</Text>
              <TextInput
                className="p-2 mx-6 mb-3 border-2 border-blue-700 rounded-lg"
                placeholder="@example00"
                value={username}
                onChangeText={text => {
                  setUsername(text);
                }}
              />

              <Text className="text-[20px] ml-4 mb-2">Email</Text>
              <TextInput
                className="p-2 mx-6 mb-3 border-2 border-blue-700 rounded-lg"
                placeholder="example@gmail.com"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
              />

              <Text className="text-[20px] ml-4 mb-2">Phone Number</Text>
              <TextInput
                className="p-2 mx-6 mb-3 border-2 border-blue-700 rounded-lg"
                placeholder="+94774567XX"
                value={phone}
                onChangeText={text => {
                  setPhone(text);
                }}
              />

              {/* New Studenet Add Save Button */}
              <TouchableOpacity
                onPress={handleSave}
                className="m-6 bg-black border-2 border-black">
                <Text className=" text-white text-[22px] font-bold text-center p-2">
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Titile & Add Button */}
      <View className="flex-row justify-between mb-6">
        <Text className="p-2 pb-2 pl-2 mt-1 text-3xl  text-black border-2 border-black border-solid rounded-[35px] bg-[#ecfdf5]">
          Student List {users.length}
        </Text>
        <TouchableOpacity
          onPress={handleCreate}
          className=" border-2 border-black border-solid rounded-[30px] bg-[#ecfdf5]">
          <Text className=" text-[10px] p-2 pb-2 pl-2 mt-0 text-3xl  text-black">
            Add New
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* student details */}
        {users.map(item => {
          return (
            <View
              key={item.id}
              className="flex-row justify-between p-4 my-2 bg-white border rounded border-black-300">
              <View className="">
                <Text className="text-lg font-bold text-[#172554]">
                  {item.firstname}
                </Text>
                <Text className="text-sm text-[#1e293b]">{item.username}</Text>
                <Text className="text-sm text-[#334155]">{item.email}</Text>
                <Text className="text-sm text-gray-500">{item.phone}</Text>
              </View>

              {/* Delete Function */}
              <View>
                <TouchableOpacity onPress={() => handleRemove(item)}>
                  <Text className="p-1 text-red-600 border-2 border-solid border-rose-500 rounded-2xl pl-[8px]">
                    Delete
                  </Text>
                </TouchableOpacity>

                {/* Edit Function */}
                <TouchableOpacity onPress={() => handleEdit(item)}>
                  <Text className="p-1 pl-[14px] mt-8 text-blue-600 border-2 border-blue-600 border-solid rounded-2xl">
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
