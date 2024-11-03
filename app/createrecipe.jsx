import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';

const CreateRecipePage = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [timeTaken, setTimeTaken] = useState('');
  const [portions, setPortions] = useState('');
  const router = useRouter();

  const handleCreateRecipe = () => {
    const newRecipe = {
      id: Date.now().toString(),
      title: recipeName,
      description: `Ingredients: ${ingredients}\nTime: ${timeTaken}, Portions: ${portions}`,
      image: 'https://via.placeholder.com/100',
    };

    router.push({
      pathname: '/create2',
      params: { newRecipe: JSON.stringify(newRecipe) },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create Recipe</Text>
      </View>

      {/* Image Placeholder */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300' }}
          style={styles.recipeImage}
        />
        <TouchableOpacity style={styles.cameraIconContainer}>
          <Ionicons name="camera" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Recipe Name"
        value={recipeName}
        onChangeText={setRecipeName}
      />

      <Text style={styles.label}>Ingredients</Text>
      <View style={styles.ingredientsContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.ingredientInput}
          placeholder="Add ingredients"
          value={ingredients}
          onChangeText={setIngredients}
        />
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Time Taken</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 30 mins"
            value={timeTaken}
            onChangeText={setTimeTaken}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Portions</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 4"
            value={portions}
            onChangeText={setPortions}
          />
        </View>
      </View>

      {/* Create Button */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreateRecipe}>
        <Text style={styles.createButtonText}>Create</Text>
      </TouchableOpacity>

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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  recipeImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#E0BC87',
    borderRadius: 15,
    padding: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0BC87',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F3E5D7',
    marginBottom: 15,
    fontSize: 16,
  },
  ingredientsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#A36F22',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  ingredientInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0BC87',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#F3E5D7',
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    flex: 1,
    marginRight: 10,
  },
  createButton: {
    backgroundColor: '#E0BC87',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
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

export default CreateRecipePage;
