import React from 'react';
import { Modal, SafeAreaView, ScrollView, View, Text } from 'react-native';
import CustomInput from '../Input Field/CustomInput';
import CustomButton from '../Button/CustomButton';

const StudentModal = ({
  visible,
  handleClose,
  handleSave,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  username,
  setUsername,
  email,
  setEmail,
  phone,
  setPhone,
}) => {
  return (
    <Modal visible={visible} >
      <SafeAreaView >
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }} className="bg-[#e0e7ff]">
          <View className="flex-row justify-between p-4">
            <Text className="text-black text-[22px] font-bold">New Student</Text>
            <CustomButton onPress={handleClose} title="Close" style="text-gray-600 text-[22px] font-bold" />
          </View>

          {/* Input Fields */}
          <CustomInput label="First Name" value={firstname} onChangeText={setFirstname} placeholder="Devinda" />
          <CustomInput label="Last Name" value={lastname} onChangeText={setLastname} placeholder="Wanasinghe" />
          <CustomInput label="User Name" value={username} onChangeText={setUsername} placeholder="@example00" />
          <CustomInput label="Email" value={email} onChangeText={setEmail} placeholder="example@gmail.com" />
          <CustomInput label="Phone Number" value={phone} onChangeText={setPhone} placeholder="+94774567XX" />

          {/* Save Button */}
          <CustomButton onPress={handleSave} title="Save" style="bg-gray-600 border-2 border-black mx-11 rounded-lg mt-12 " />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default StudentModal;
