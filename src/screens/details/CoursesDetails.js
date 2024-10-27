import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const CoursesDetails = () => {
  return (
    <ScrollView style={styles.container}>
      {/* University Overview */}
      <View style={styles.card}>
        <Text style={styles.title}>Uva Wellassa University</Text>
        <Image source={require('../../assets/uwu1.jpg')} style={styles.image} />
        <Text style={styles.text}>
          Founded in 2005 in the Uva Province of Sri Lanka, this university spans 35 acres and serves the region with quality education and facilities. The challenging mountainous terrain adds uniqueness to its campus design.
        </Text>
      </View>

      {/* Faculties and Courses */}
      <View style={styles.card}>
        <Text style={styles.title}>Faculties and Undergraduate Programs</Text>
        <Image source={require('../../assets/uwu2.jpg')} style={styles.image} />
        <Text style={styles.text}>
          Uva Wellassa University offers 13 undergraduate programs across four main faculties:
        </Text>
        <Text style={styles.listItem}>• Faculty of Animal Science & Export Agriculture</Text>
        <Text style={styles.subItem}>- Aquatic Resources & Technology</Text>
        <Text style={styles.subItem}>- Animal Production and Food Technology</Text>
        <Text style={styles.subItem}>- Export Agriculture, Palm & Latex Technology</Text>
        <Text style={styles.listItem}>• Faculty of Applied Sciences</Text>
        <Text style={styles.subItem}>- Water Science & Technology, Mineral Resources</Text>
        <Text style={styles.subItem}>- Computer Science & Technology</Text>
        <Text style={styles.listItem}>• Faculty of Management</Text>
        <Text style={styles.subItem}>- Entrepreneurship, Hospitality, HR Development</Text>
        <Text style={styles.subItem}>- BA in English Language & Applied Linguistics</Text>
        <Text style={styles.listItem}>• Faculty of Technological Studies</Text>
        <Text style={styles.subItem}>- Biosystems, Engineering & ICT</Text>
        <Text style={styles.listItem}>• Faculty of Medicine</Text>
        <Text style={styles.subItem}>- Bachelor of Medicine & Surgery (MBBS)</Text>
      </View>

      {/* Leadership */}
      <View style={styles.card}>
        <Text style={styles.title}>University Leadership</Text>
        <Image source={require('../../assets/uwu3.jpg')} style={styles.image} />
        <Text style={styles.text}>
          Chancellor: Prof. Jayantha Balawardane (Oncology Expert)
        </Text>
        <Text style={styles.text}>
          Vice-Chancellor: Senior Prof. Kolitha Bandara Wijesekara, overseeing academics and administration.
        </Text>
      </View>

      {/* Student Population */}
      <View style={styles.card}>
        <Text style={styles.title}>Student Population</Text>
        <Text style={styles.text}>
          Current student count by batch, highlighting the university's commitment to growth:
        </Text>
        <Text style={styles.listItem}>• Batch 2020: 1500 students</Text>
        <Text style={styles.listItem}>• Batch 2021: 1450 students</Text>
        <Text style={styles.listItem}>• Batch 2022: 1600 students</Text>
        <Text style={styles.listItem}>• Batch 2023: 1550 students</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', 
    padding: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
  listItem: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    fontWeight: '600',
  },
  subItem: {
    fontSize: 13,
    color: '#777',
    marginLeft: 15,
  },
});

export default CoursesDetails;
