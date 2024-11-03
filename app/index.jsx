import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const FoodCuisinesScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const recipes = [
    {
      title: 'Pesto Pasta',
      description: 'Wheat, Basil, Pine nuts, Cheese',
      calories: '150kcal/svg',
      image: require('../assets/images/Pesto.jpg'),
      onPress: () => router.push('/recipe'),
    },
    {
      title: 'Pomodoro Pesto',
      description: 'Lorem ipsum, Dolor, etc...',
      calories: '150kcal/svg',
      image: require('../assets/images/Pomodoro.jpeg'),
    },
    {
      title: 'Pesto Calabrese',
      description: 'Lorem ipsum, Dolor, etc...',
      calories: '150kcal/svg',
      image: require('../assets/images/Calabrese.jpg'),
    },
    {
      title: 'Green Pasta',
      description: 'Lorem ipsum, Dolor, etc...',
      calories: '150kcal/svg',
      image: require('../assets/images/green.jpg'),
    },
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#fffff"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Title and Cuisine Tabs */}
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Food Cuisines</Text>
          <View style={styles.tabContainer}>
            {['Italian', 'Mexican', 'Chinese', 'Thai'].map((cuisine, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.tab, selectedTab === index ? styles.activeTab : styles.inactiveTab]}
                onPress={() => setSelectedTab(index)}
              >
                <Text style={selectedTab === index ? styles.activeTabText : styles.tabText}>
                  {cuisine}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Food Cards */}
          <View style={styles.foodGrid}>
            {filteredRecipes.map((recipe, index) => (
              <TouchableOpacity key={index} style={styles.foodCard} onPress={recipe.onPress}>
                <Image style={styles.foodImage} source={recipe.image} />
                <View style={styles.foodDetails}>
                  <Text style={styles.foodTitle}>{recipe.title}</Text>
                  <Text style={styles.foodDescription}>{recipe.description}</Text>
                  <Text style={styles.caloriesText}>{recipe.calories}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    padding: 10,
    paddingTop: 30,
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    color: 'black',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#A36F22',
  },
  inactiveTab: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0BC87',
  },
  tabText: {
    color: '#6e6e6e',
  },
  activeTabText: {
    color: 'white',
    fontWeight: '600',
  },
  foodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  foodCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  foodImage: {
    width: '100%',
    height: 100,
  },
  foodDetails: {
    padding: 10,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  foodDescription: {
    fontSize: 12,
    color: '#7e7e7e',
    marginBottom: 5,
  },
  caloriesText: {
    fontSize: 12,
    color: '#7e7e7e',
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

export default FoodCuisinesScreen;
