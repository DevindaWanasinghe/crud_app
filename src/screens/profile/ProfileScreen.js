import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ProfileForm from './ProfileForm';
import { ScrollView } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker'; 

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null); 

  useEffect(() => {
    const fetchProfile = async () => {
      const doc = await firestore().collection('profiles').doc('your-profile-doc-id').get(); 
      if (doc.exists) {
        setProfileData(doc.data());
        setProfileImage(doc.data().profileImage || null); // Load existing profile image
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async (data) => {
    const updatedData = { ...data, profileImage: profileImage };
    await firestore().collection('profiles').doc('your-profile-doc-id').set(updatedData);
    setProfileData(updatedData);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await firestore().collection('profiles').doc('your-profile-doc-id').delete();
    setProfileData(null);
    setProfileImage(null); // Clear the profile image on delete
  };

  const handleImageUpload = async () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setProfileImage(response.assets[0].uri); 
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Profile Details</Text>
        
        {/* Cover Photo Section */}
        <View style={styles.coverPhotoContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.coverPhoto} />
          ) : (
            <View style={styles.defaultCoverPhoto}>
              <Text style={styles.defaultCoverText}>Cover Photo</Text>
            </View>
          )}
          <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
            <Text style={styles.uploadButtonText}>{profileImage ? 'Change Profile Picture' : 'Upload Profile Picture'}</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Details Section */}
        {isEditing ? (
          <ProfileForm onSave={handleSave} existingData={profileData} />
        ) : profileData ? (
          <View style={styles.profileDetails}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Name: <Text style={styles.infoValue}>{profileData.name}</Text></Text>
              <Text style={styles.infoText}>Email: <Text style={styles.infoValue}>{profileData.email}</Text></Text>
              <Text style={styles.infoText}>Phone: <Text style={styles.infoValue}>{profileData.phone}</Text></Text>
              <Text style={styles.infoText}>Age: <Text style={styles.infoValue}>{profileData.age}</Text></Text>
              <Text style={styles.infoText}>Faculty: <Text style={styles.infoValue}>{profileData.faculty}</Text></Text>
              <Text style={styles.infoText}>Degree: <Text style={styles.infoValue}>{profileData.degreeCourse}</Text></Text>
              <Text style={styles.infoText}>Batch Year: <Text style={styles.infoValue}>{profileData.batchYear}</Text></Text>
              <Text style={styles.infoText}>Enrollment Number: <Text style={styles.infoValue}>{profileData.enrollmentNumber}</Text></Text>
              <Text style={styles.infoText}>Address: <Text style={styles.infoValue}>{profileData.address}</Text></Text>
              <Text style={styles.infoText}>Nearest Town: <Text style={styles.infoValue}>{profileData.nearestTown}</Text></Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <ProfileForm onSave={handleSave} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', 
  },
  coverPhotoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  defaultCoverPhoto: {
    width: '100%',
    height: 200,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  defaultCoverText: {
    fontSize: 18,
    color: '#A0A0A0',
  },
  uploadButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileDetails: {
    marginTop: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  infoValue: {
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#DC3545',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
