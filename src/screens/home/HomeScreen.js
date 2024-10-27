import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/uwu3.jpg')}
      style={styles.imageBackground}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>WELCOME TO UWU FAMILY!</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonWrapper, { backgroundColor: '#1E90FF' }]} 
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <Text style={styles.buttonText}>Go to Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonWrapper, { backgroundColor: '#32CD32' }]} 
            onPress={() => navigation.navigate('StudentScreen')}
          >
            <Text style={styles.buttonText}>Go to Student</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonWrapper, { backgroundColor: '#ffbf00' }]} 
            onPress={() => navigation.navigate('UniversityDetails')}
          >
            <Text style={styles.buttonText}>University Details</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonWrapper, { backgroundColor: '#e600ac' }]} 
            onPress={() => navigation.navigate('CoursesDetails')}
          >
            <Text style={styles.buttonText}>Course Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    position: 'absolute',
    top: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f2f2f2',
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
    padding: 10,
    alignItems: 'center',
    borderRadius: 18, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
