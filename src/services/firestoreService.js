import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

// Function to get the list of students
export const getListStudent = async () => {
  try {
    const userList = [];
    const querySnapshot = await firestore().collection('students').get();
    querySnapshot.forEach(documentSnapshot => {
      userList.push({ ...documentSnapshot.data(), id: documentSnapshot.id });
    });
    return userList;
  } catch (error) {
    console.error('Error fetching student list: ', error);
    Alert.alert('Error', 'Failed to fetch student list.');
    return [];
  }
};

// Function to add a new student
export const addStudent = async (studentData) => {
  try {
    await firestore().collection('students').add(studentData);
    Alert.alert('Success', 'New student added successfully.');
  } catch (error) {
    console.error('Error adding student: ', error);
    Alert.alert('Error', 'Failed to add new student.');
  }
};

// Function to update an existing student
export const updateStudent = async (studentId, updatedData) => {
  try {
    const docRef = firestore().collection('students').doc(studentId);
    const docSnapshot = await docRef.get();
    
    if (docSnapshot.exists) {
      await docRef.update(updatedData);
      Alert.alert('Success', 'Student details updated successfully.');
    } else {
      Alert.alert('Error', 'Student not found.');
    }
  } catch (error) {
    console.error('Error updating student: ', error);
    Alert.alert('Error', 'Failed to update student.');
  }
};

// Function to delete a student
export const deleteStudent = async (studentId, studentName) => {
  try {
    await firestore().collection('students').doc(studentId).delete();
    Alert.alert('Deleted', `Student ${studentName} has been deleted.`);
  } catch (error) {
    console.error('Error deleting student: ', error);
    Alert.alert('Error', `Failed to delete student ${studentName}.`);
  }
};

// Helper function to clear the form after saving or updating
export const clearForm = (setters) => {
  setters.setUserId(null);
  setters.setFirstname('');
  setters.setLastname('');
  setters.setUsername('');
  setters.setEmail('');
  setters.setPhone('');
};
