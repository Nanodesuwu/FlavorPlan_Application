import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Planner2Screen = () => {
  // State to track additional "Add a Recipe" buttons
  const [extraRecipeButtons, setExtraRecipeButtons] = useState({});

  const addRecipeSlot = (day) => {
    setExtraRecipeButtons((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), {}],
    }));
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

        {/* Wednesday Section */}
        <View style={styles.daySection}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayText}>Wednesday, Oct 9</Text>
            <TouchableOpacity onPress={() => addRecipeSlot('Wednesday')}>
              <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recipeContainer}>
            <Image
              style={styles.recipeImage}
              source={require('../assets/images/Pesto.jpg')}
            />
            <Text style={styles.recipeName}>Pesto Pasta</Text>
            <Text style={styles.recipeUser}>@Soo</Text>
          </View>
          {extraRecipeButtons['Wednesday'] && extraRecipeButtons['Wednesday'].map((_, index) => (
            <TouchableOpacity key={index} style={styles.addRecipeButton}>
              <Text style={styles.addRecipeText}>Add a Recipe</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Thursday Section */}
        <View style={styles.daySection}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayText}>Thursday, Oct 10</Text>
            <TouchableOpacity onPress={() => addRecipeSlot('Thursday')}>
              <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addRecipeButton}>
            <Text style={styles.addRecipeText}>Add a Recipe</Text>
          </TouchableOpacity>
          {extraRecipeButtons['Thursday'] && extraRecipeButtons['Thursday'].map((_, index) => (
            <TouchableOpacity key={index} style={styles.addRecipeButton}>
              <Text style={styles.addRecipeText}>Add a Recipe</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Friday Section */}
        <View style={styles.daySection}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayText}>Friday, Oct 11</Text>
            <TouchableOpacity onPress={() => addRecipeSlot('Friday')}>
              <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addRecipeButton}>
            <Text style={styles.addRecipeText}>Add a Recipe</Text>
          </TouchableOpacity>
          {extraRecipeButtons['Friday'] && extraRecipeButtons['Friday'].map((_, index) => (
            <TouchableOpacity key={index} style={styles.addRecipeButton}>
              <Text style={styles.addRecipeText}>Add a Recipe</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

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
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  recipeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: '600',
  },
  recipeUser: {
    fontSize: 14,
    color: '#7e7e7e',
  },
  addRecipeButton: {
    backgroundColor: '#E0BC87',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
  },
  addRecipeText: {
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

export default Planner2Screen;
