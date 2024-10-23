import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="items-center justify-center flex-1 bg-gray-200">
      <Text className="text-3xl font-bold">Home Screen</Text>
      <View className="mt-4">
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('ProfileScreen')}  // Navigate to ProfileScreen
        />
      </View>
      <View className="mt-4">
        <Button
          title="Go to Student"
          onPress={() => navigation.navigate('StudentScreen')}  // Navigate to StudentScreen
        />
      </View>
    </View>
  );
};

export default HomeScreen;
