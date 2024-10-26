import firestore from '@react-native-firebase/firestore';

const studentsCollection = firestore().collection('students'); // **Define Firestore collection**

export const getListStudent = async () => { // **Fetch all students**
    const studentsSnapshot = await studentsCollection.get();
    return studentsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const addStudent = async (studentData) => { // **Add a new student**
    await studentsCollection.add(studentData);
};

export const updateStudent = async (id, studentData) => { // **Update existing student**
    await studentsCollection.doc(id).update(studentData);
};

export const deleteStudent = async (id) => { // **Delete a student**
    await studentsCollection.doc(id).delete();
};

export const clearForm = ({ setUserId, setFirstname, setLastname, setUsername, setEmail, setPhone }) => { // **Clear form fields**
    //setUserId(null);
    setFirstname('');
    setLastname('');
    setUsername('');
    setEmail('');
    setPhone('');
};
