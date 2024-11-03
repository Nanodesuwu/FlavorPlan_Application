import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';

const UserProfileStaticScreen = () => {
  const { name = 'Tan Soo Hong', displayName = 'Soo', email = 'p19011279@student.newinti.edu.my', phoneNumber = '0111234567' } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Header with Title and Edit Icon */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Profile</Text>
        <Link href={`/edit?name=${name}&displayName=${displayName}&email=${email}&phoneNumber=${phoneNumber}`} asChild>
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>
        {/* Profile Picture */}
        <View style={styles.profileContainer}>
        <Image
            style={styles.profileImage}
            source={require('../assets/images/Soo.jpg')}
          />
        </View>

        {/* Basic Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Basic Details</Text>
          <View style={styles.detailRow}>
            <Ionicons name="person" size={18} color="#888" />
            <Text style={styles.detailText}>{name}</Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="person-circle" size={18} color="#888" />
            <Text style={styles.detailText}>{displayName}</Text>
          </View>
        </View>

        {/* Contact Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Contact Details</Text>
          <View style={styles.detailRow}>
            <Ionicons name="mail" size={18} color="#888" />
            <Text style={styles.detailText}>{email}</Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="call" size={18} color="#888" />
            <Text style={styles.detailText}>{phoneNumber}</Text>
          </View>
        </View>

        {/* Statistics Section for Meal Plan and Recipes */}
        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Meal Plan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="home" size={24} color="white" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/planner" asChild>
          <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="calendar" size={24} color="white" />
            <Text style={styles.navText}>Planner</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/create" asChild>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="create" size={24} color="white" />
            <Text style={styles.navText}>Create</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/list" asChild>
          <TouchableOpacity style={styles.navItem}>
            <MaterialCommunityIcons name="playlist-check" size={24} color="white" />
            <Text style={styles.navText}>List</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/profile" asChild>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="person" size={24} color="white" />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </Link>
      </View>
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
    height: 60,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Allows absolute positioning of edit icon
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  editIcon: {
    position: 'absolute',
    right: 15,
    top: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
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
  detailsContainer: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  statBox: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#E0BC87',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
  },
  bottomNav: {
    height: 60,
    backgroundColor: '#E0BC87',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
  },
});

export default UserProfileStaticScreen;
