import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  // Local state to manage form inputs
  const [editedName, setEditedName] = useState('Tan Soo Hong');
  const [editedDisplayName, setEditedDisplayName] = useState('Soo');
  const [editedEmail, setEditedEmail] = useState('p23112312@student.newinti.edu.my');
  const [editedPhoneNumber, setEditedPhoneNumber] = useState('0111234567');

  // Handle save function
  const handleSave = () => {
    navigation.navigate('UserProfileStaticScreen', {
      name: editedName,
      displayName: editedDisplayName,
      email: editedEmail,
      phoneNumber: editedPhoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
      <Image
            style={styles.profileImage}
            source={require('../assets/images/Soo.jpg')}
          />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Ionicons name="camera" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Basic Details Form */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Basic Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={editedName}
          onChangeText={setEditedName}
        />
        <TextInput
          style={styles.input}
          placeholder="Display Name"
          value={editedDisplayName}
          onChangeText={setEditedDisplayName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={editedEmail}
          onChangeText={setEditedEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={editedPhoneNumber}
          onChangeText={setEditedPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#E0BC87',
    padding: 10,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: '30%',
    backgroundColor: '#E0BC87',
    borderRadius: 15,
    padding: 5,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#E0BC87',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  saveButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditProfileScreen;
