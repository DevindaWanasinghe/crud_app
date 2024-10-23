import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);  
  }, []);

  return (
    <View className="items-center justify-center flex-1 bg-gray-100">
      <Text className="text-3xl font-bold text-blue-500">Welcome to My App</Text>
    </View>
  );
};

export default SplashScreen;
