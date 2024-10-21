import React from 'react';
import { TextInput, Text, View } from 'react-native';

const CustomInput = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View className="px-5 mt-5">
      <Text className="text-[20px] ml-4 mb-2">{label}</Text>
      <TextInput
        className="p-2 mx-6 mb-3 border-2 border-blue-700 rounded-lg"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInput;
