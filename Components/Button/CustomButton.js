import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`p-2 ${style}`} >
      <Text className="text-black text-[22px] font-bold text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
