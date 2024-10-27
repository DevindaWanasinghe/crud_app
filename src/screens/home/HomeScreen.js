import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME TO UWU FAMILY</Text>
      
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Go to Profile"
            color="#1E90FF" 
            onPress={() => navigation.navigate('ProfileScreen')} 
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Go to Student"
            color="#32CD32"  
            onPress={() => navigation.navigate('StudentScreen')} 
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="University Details"
            color="#ffbf00"  
            onPress={() => navigation.navigate('UniversityDetails')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    position: 'absolute',
    top: 50, 
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  buttonWrapper: {
    marginVertical: 10,
    width: 200, 
  },
});

export default HomeScreen;
