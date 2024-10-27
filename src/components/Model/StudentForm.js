import React from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';

const StudentForm = ({
    firstname,
    setFirstname,
    lastname,
    setLastname,
    username,
    setUsername,
    email,
    setEmail,
    phone,
    setPhone,
    enrollmentNumber, 
    setEnrollmentNumber,
    fatherJob,
    setFatherJob,
    motherJob,
    setMotherJob,
    brotherCount,
    setBrotherCount,
    sisterCount,
    setSisterCount,
    townVillage,
    setTownVillage,
    whatsappNumber,
    setWhatsappNumber,
    handleSave 
}) => {
  return (
    <ScrollView style={{ width: 300, padding: 10 }}>
      <TextInput
        value={enrollmentNumber}
        onChangeText={setEnrollmentNumber}
        placeholder="UWU/ICT/22/XXX" 
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
        editable={true} 
      />
      <TextInput
        value={firstname}
        onChangeText={setFirstname}
        placeholder="First Name"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={lastname}
        onChangeText={setLastname}
        placeholder="Last Name"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={fatherJob}
        onChangeText={setFatherJob}
        placeholder="Father's Job"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={motherJob}
        onChangeText={setMotherJob}
        placeholder="Mother's Job"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={brotherCount}
        onChangeText={setBrotherCount}
        placeholder="Brother Count"
        keyboardType="numeric"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={sisterCount}
        onChangeText={setSisterCount}
        placeholder="Sister Count"
        keyboardType="numeric"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={townVillage}
        onChangeText={setTownVillage}
        placeholder="Town/Village"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />
      <TextInput
        value={whatsappNumber}
        onChangeText={setWhatsappNumber}
        placeholder="WhatsApp Number"
        style={{ padding: 10, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' }}
      />

    </ScrollView>
  );
};

export default StudentForm;
