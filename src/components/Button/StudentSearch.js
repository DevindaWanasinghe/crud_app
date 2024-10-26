// StudentSearch.js

import React, { useState } from 'react';
import { View, TextInput, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const StudentSearch = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null); // State to hold the selected student's details
  const [suggestions, setSuggestions] = useState([]); // State to hold suggestions

  const handleSearch = (text) => {
    setSearchTerm(text);

    // Find students matching the search term
    const filteredStudents = students.filter(student =>
      student.firstname.toLowerCase().includes(text.toLowerCase()) ||
      student.enrollmentNumber.slice(-2) === text.slice(-2)
    );

    setSuggestions(filteredStudents);
  };

  const selectStudent = (student) => {
    setSelectedStudent(student);
    setSuggestions([]); // Clear suggestions after selection
    setSearchTerm(''); // Clear the search input
  };

  const clearSearch = () => {
    setSelectedStudent(null); // Clear selected student
    setSearchTerm(''); // Clear search input
    setSuggestions([]); // Clear suggestions
  };

  return (
    <View className="mb-4">
      <View className="flex flex-row items-center">
        <TextInput
          value={searchTerm}
          onChangeText={handleSearch}
          placeholder="Search by Name or  Enrollment Number 00"
          className="flex-1 p-2 mt-2 mb-3 border border-gray-400 rounded"
        />
        <TouchableOpacity onPress={clearSearch} className="p-2 mb-[6px] h-11 ml-2 bg-red-600 rounded">
          <Text className="text-lg text-white">✕</Text>
        </TouchableOpacity>
      </View>
      <Button title="Search" onPress={() => handleSearch(searchTerm)} />

      {/* Suggestions list */}
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.enrollmentNumber} // Assuming enrollment number is unique
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectStudent(item)}>
              <Text className="p-2 mb-1 border border-gray-300 rounded">
                {item.firstname} {item.lastname} ({item.enrollmentNumber})
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      {selectedStudent && (
        <View className="p-4 mt-3 border border-gray-300 rounded">
          <Text className="font-medium">Enrollment No: {selectedStudent.enrollmentNumber}</Text> 
          <Text className="font-bold">{selectedStudent.firstname} {selectedStudent.lastname}</Text>
          <Text>{selectedStudent.username}</Text>
          <Text>{selectedStudent.email}</Text>
          <Text>{selectedStudent.phone}</Text>
          <Text>Father's Job: {selectedStudent.fatherJob}</Text>
          <Text>Mother's Job: {selectedStudent.motherJob}</Text>
          <Text>Brothers: {selectedStudent.brotherCount}</Text>
          <Text>Sisters: {selectedStudent.sisterCount}</Text>
          <Text>Town / Village: {selectedStudent.townVillage}</Text>
          <Text>WhatsApp: {selectedStudent.whatsappNumber}</Text>
        </View>
      )}
    </View>
  );
};

export default StudentSearch;
