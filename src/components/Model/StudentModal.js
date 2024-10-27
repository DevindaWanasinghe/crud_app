import React from 'react';
import { Modal, View, Button } from 'react-native';
import StudentForm from './StudentForm';

const StudentModal = ({
  visible,
  handleClose,
  handleSave,
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
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
          <StudentForm
            firstname={firstname}
            setFirstname={setFirstname}
            lastname={lastname}
            setLastname={setLastname}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            enrollmentNumber={enrollmentNumber} 
            setEnrollmentNumber={setEnrollmentNumber}
            fatherJob={fatherJob}
            setFatherJob={setFatherJob}
            motherJob={motherJob}
            setMotherJob={setMotherJob}
            brotherCount={brotherCount}
            setBrotherCount={setBrotherCount}
            sisterCount={sisterCount}
            setSisterCount={setSisterCount}
            townVillage={townVillage}
            setTownVillage={setTownVillage}
            whatsappNumber={whatsappNumber}
            setWhatsappNumber={setWhatsappNumber}
          />
          <View style={{  marginTop: 10, gap:10 }}>
            <Button title="Cancel" onPress={handleClose} />
            <Button title="Save" onPress={handleSave} />

          </View>
        </View>
      </View>
    </Modal>
  );
};

export default StudentModal;
