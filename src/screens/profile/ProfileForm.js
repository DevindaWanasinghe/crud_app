import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getProfile, addOrUpdateProfile, deleteProfile, clearProfileForm } from '../../services/ProfileService';

const ProfileForm = ({ onSave, existingData }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [faculty, setFaculty] = useState('');
    const [degreeCourse, setDegreeCourse] = useState('');
    const [batchYear, setBatchYear] = useState('');
    const [enrollmentNumber, setEnrollmentNumber] = useState('');
    const [address, setAddress] = useState('');
    const [nearestTown, setNearestTown] = useState('');

    // Fetch profile data on mount or when existingData changes
    useEffect(() => {
        if (existingData) {
            setName(existingData.name);
            setEmail(existingData.email);
            setPhone(existingData.phone);
            setAge(existingData.age);
            setFaculty(existingData.faculty);
            setDegreeCourse(existingData.degreeCourse);
            setBatchYear(existingData.batchYear);
            setEnrollmentNumber(existingData.enrollmentNumber);
            setAddress(existingData.address);
            setNearestTown(existingData.nearestTown);
        }
    }, [existingData]);

    const handleSave = async () => {
        const profileData = { name, email, phone, age, faculty, degreeCourse, batchYear, enrollmentNumber, address, nearestTown };
        await addOrUpdateProfile(profileData);
        Alert.alert('Success', 'Profile saved successfully!');
        if (onSave) {
            onSave(profileData); // Call onSave if provided
        }
    };

    const handleClear = () => {
        clearProfileForm({ setName, setEmail, setPhone, setAge, setFaculty, setDegreeCourse, setBatchYear, setEnrollmentNumber, setAddress, setNearestTown });
    };

    const handleDelete = async () => {
        await deleteProfile();
        handleClear();
        Alert.alert('Deleted', 'Profile removed successfully!');
    };

    return (
        <ScrollView className="flex-1 p-4 bg-white">
            <Text className="mb-2 text-lg font-semibold">Enter Your Details</Text>
            
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter Name"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter Email"
                keyboardType="email-address"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter Phone"
                keyboardType="phone-pad"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <TextInput
                value={age}
                onChangeText={setAge}
                placeholder="Enter Age"
                keyboardType="numeric"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <Text className="mb-2 text-sm font-semibold">Select Faculty</Text>
            <Picker
                selectedValue={faculty}
                onValueChange={(itemValue) => setFaculty(itemValue)}
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            >
                <Picker.Item label="Select Faculty" value="" />
                <Picker.Item label="Science and Technology" value="Science and Technology" />
                <Picker.Item label="Business and Management" value="Business and Management" />
                <Picker.Item label="Social Sciences" value="Social Sciences" />
            </Picker>

            <Text className="mb-2 text-sm font-semibold">Select Degree Course</Text>
            <Picker
                selectedValue={degreeCourse}
                onValueChange={(itemValue) => setDegreeCourse(itemValue)}
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            >
                <Picker.Item label="Select Course" value="" />
                <Picker.Item label="Computer Science" value="Computer Science" />
                <Picker.Item label="Information Technology" value="Information Technology" />
                <Picker.Item label="Software Engineering" value="Software Engineering" />
            </Picker>

            <Text className="mb-2 text-sm font-semibold">Select Batch Year</Text>
            <Picker
                selectedValue={batchYear}
                onValueChange={(itemValue) => setBatchYear(itemValue)}
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            >
                <Picker.Item label="Select Year" value="" />
                <Picker.Item label="2022" value="2022" />
                <Picker.Item label="2023" value="2023" />
                <Picker.Item label="2024" value="2024" />
            </Picker>

            <TextInput
                value={enrollmentNumber}
                onChangeText={setEnrollmentNumber}
                placeholder="Enter Enrollment Number"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="Enter Address"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <TextInput
                value={nearestTown}
                onChangeText={setNearestTown}
                placeholder="Enter Nearest Town"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
            />

            <View className="flex-row justify-around mt-4 mb-10">
                <TouchableOpacity onPress={handleSave} className="px-4 py-2 bg-blue-500 rounded-lg">
                    <Text className="font-semibold text-white">Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClear} className="px-4 py-2 bg-orange-500 rounded-lg">
                    <Text className="font-semibold text-white">Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete} className="px-4 py-2 bg-red-500 rounded-lg">
                    <Text className="font-semibold text-white">Delete Profile</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProfileForm;
