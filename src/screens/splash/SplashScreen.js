import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/uwu8.png')}
        style={styles.logo}
      />
      <Text style={styles.universityText}>Uva Wellassa University {'\n'}of Sri Lanka</Text>
      <Text style={styles.brandName}>Powerd by @NeuraX</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe6',
    padding: 20,
  },
  logo: {
    width: '30%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
    marginTop: 40, // Move logo higher on the screen
  },
  universityText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    marginBottom: 10,
  },
  brandName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginTop: 400,
    textAlign: 'center',
    color: '	 #d9d9d9',
  },
});

export default SplashScreen;
