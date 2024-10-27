import firestore from '@react-native-firebase/firestore';

const profileCollection = firestore().collection('profiles');

// Fetch Profile
export const getProfile = async () => {
    try {
        const profileSnapshot = await profileCollection.limit(1).get();
        if (!profileSnapshot.empty) {
            return { ...profileSnapshot.docs[0].data(), id: profileSnapshot.docs[0].id };
        }
        return null; // No profile data found
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
};

// Add or Update Profile
export const addOrUpdateProfile = async (profileData) => {
    try {
        const existingProfile = await getProfile();
        if (existingProfile) {
            // Update existing profile if it exists
            await profileCollection.doc(existingProfile.id).update(profileData);
        } else {
            // Add new profile if none exists
            await profileCollection.add(profileData);
        }
    } catch (error) {
        console.error("Error saving profile:", error);
    }
};

// Delete Profile
export const deleteProfile = async () => {
    try {
        const existingProfile = await getProfile();
        if (existingProfile) {
            await profileCollection.doc(existingProfile.id).delete();
        }
    } catch (error) {
        console.error("Error deleting profile:", error);
    }
};

// Clear Form Data
export const clearProfileForm = ({ setName, setEmail, setPhone, setAge, setFaculty, setDegreeCourse, setBatchYear, setEnrollmentNumber, setAddress, setNearestTown }) => {
    setName('');
    setEmail('');
    setPhone('');
    setAge('');
    setFaculty('');
    setDegreeCourse('');
    setBatchYear('');
    setEnrollmentNumber('');
    setAddress('');
    setNearestTown('');
};
