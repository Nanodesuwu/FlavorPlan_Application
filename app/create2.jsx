import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, Link } from 'expo-router';

const CreateRecipeListScreen = () => {
  const [recipes, setRecipes] = useState([
    {
      id: '1',
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with rich meat sauce.',
      image: require('../assets/images/Bolognese.jpg'),
    },
    {
      id: '2',
      title: 'Grilled Chicken Salad',
      description: 'Healthy salad with grilled chicken, fresh veggies, and a light dressing.',
      image: require('../assets/images/Salad.jpg'),
    },
  ]);

  const { newRecipe } = useLocalSearchParams();

  useEffect(() => {
    if (newRecipe) {
      const parsedRecipe = JSON.parse(newRecipe);
      setRecipes((prevRecipes) => [...prevRecipes, parsedRecipe]);
    }
  }, [newRecipe]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Recipes</Text>
      </View>

      {/* Recipe List */}
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Image source={item.image} style={styles.recipeImage} />
            <View style={styles.recipeDetails}>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.recipeDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.recipeList}
      />

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
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  recipeList: {
    padding: 15,
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  recipeImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  recipeDetails: {
    flex: 1,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#7e7e7e',
  },
  bottomNav: {
    height: 60,
    backgroundColor: '#E0BC87',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
  },
});

export default CreateRecipeListScreen;
