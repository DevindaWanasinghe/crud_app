import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ onPress, title, className }) => {
    return (
        <TouchableOpacity onPress={onPress} className={className}>
            <Text>{title}</Text> 
        </TouchableOpacity>
    );
};

export default CustomButton;
