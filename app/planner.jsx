import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const PlannerScreen = () => {
  const navigation = useNavigation();

  const navigateToAddRecipe = () => {
    navigation.navigate('index2');
  };

  return (
    <View style={styles.container}>
      {/* Header with Background Color */}
      <View style={styles.header} />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Title and Date Range */}
        <Text style={styles.title}>Planner</Text>
        <View style={styles.userContainer}>
          <Image
            style={styles.profileImage}
            source={require('../assets/images/Soo.jpg')}
          />
          <View>
            <Text style={styles.dateRange}>Oct 8 - Oct 14</Text>
            <Text style={styles.subtitle}>Plan your meals</Text>
          </View>
        </View>

        {/* Days and Add Recipe Sections */}
        <View style={styles.dayContainer}>
          {['Wednesday, Oct 9', 'Thursday, Oct 10', 'Friday, Oct 11'].map((day, index) => (
            <View key={index} style={styles.daySection}>
              <View style={styles.dayHeader}>
                <Text style={styles.dayText}>{day}</Text>
                <TouchableOpacity>
                  <Text style={styles.addIcon}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.recipeContainer}>
                <TouchableOpacity style={styles.addRecipeButton} onPress={navigateToAddRecipe}>
                  <Text style={styles.addRecipeText}>Add a Recipe</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation with Links */}
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
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  dateRange: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#7e7e7e',
  },
  dayContainer: {
    marginBottom: 20,
  },
  daySection: {
    marginBottom: 15,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D1D1D1',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dayText: {
    fontWeight: 'bold',
  },
  addIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A36F22',
  },
  recipeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  addRecipeButton: {
    backgroundColor: '#E0BC87',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 10,
  },
  addRecipeText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
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

export default PlannerScreen;
