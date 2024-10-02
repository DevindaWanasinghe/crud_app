import {hairlineWidth} from 'nativewind';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';

const App = () => {
  const [users, setUsers] = useState([]);
  const [modelStudent, setModelStudenet] = useState([false]);

  useEffect(() => {
    getListStudent();
  }, []);

  //Get Students Details
  const getListStudent = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res) {
          setUsers(res);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  //Delete Studenet Details
  const hadleRemove = item => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'DELETE',
      body: JSON.stringify({
        id: item.id,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        getListStudent();
      })
      .catch(err => {
        console.log(err);
      });
    Alert.alert('Deleted', `User ${item.name} has been deleted.`);
  };

  //Add Studenet Details
  const handleCreate = () => {
    setModelStudenet(true);
  };


  //close screen
  const handalClose = () => {
    setModelStudenet(false);
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-white">
      <Modal visible={modelStudent}>

        <SafeAreaView>

            {/* Header Title & Close Button */}
            <View className="flex-row justify-between p-4 ">
              <Text className="text-black text-[22px] font-bold">New Student</Text>

              <TouchableOpacity onPress={handalClose}>
                <Text className=" text-gray-600 text-[22px] font-bold ">Close</Text>
              </TouchableOpacity>

            </View>
            
            {/* Details */}
            <Text>Text Model</Text>
            <Text>Text Model</Text>
            <Text>Text Model</Text>
            <Text>Text Model</Text>
        </SafeAreaView>
      </Modal>

      {/* Titile & Add Button */}
      <View className="flex-row justify-between">
        <Text className="pb-2 pl-2 mt-1 text-3xl text-left text-black ">
          Student List {users.length}
        </Text>
        <TouchableOpacity
          onPress={handleCreate}
          className="p-1 border-2 border-black border-solid rounded-2xl">
          <Text className="pl-2 pr-3 text-[22px]">Add New</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* student details */}
        {users.map(item => {
          return (
            <View
              key={item.id}
              className="flex-row justify-between p-4 my-2 border border-gray-300 rounded">
              <View className="">
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-sm text-gray-600">{item.username}</Text>
                <Text className="text-sm text-gray-500">{item.email}</Text>
                <Text className="text-sm text-gray-500">{item.phone}</Text>
              </View>

              {/* Delete Function */}
              <View>
                <TouchableOpacity onPress={() => hadleRemove(item)}>
                  <Text className="text-red-600">Delete</Text>
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
