import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const RecipePage = () => {
  return (
    <View style={styles.container}>
      {/* Header with Title */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pesto Pasta</Text>
      </View>

      <ScrollView>
        {/* Recipe Image */}
        <Image
          style={styles.recipeImage}
          source={require('../assets/images/Pesto.jpg')}
        />

        {/* Recipe Title and Rating */}
        <View style={styles.recipeContent}>
          <Text style={styles.recipeTitle}>Pesto Pasta by @Soo</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★★★★☆</Text>
            <Text style={styles.reviews}>20 Reviews</Text>
            <Link href="/review" asChild>
              <TouchableOpacity style={styles.reviewsButton}>
                <Text style={styles.reviewsButtonText}>Reviews</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Text>Add to meal plan</Text>
            </TouchableOpacity>
            <View style={styles.timeContainer}>
              <Ionicons name="time-outline" size={16} color="black" />
              <Text style={styles.timeText}>Ready In: 30 Min</Text>
            </View>
            <Link href="/list" asChild>
              <TouchableOpacity style={styles.actionButton}>
                <Text>Add to Grocery List</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Ingredients */}
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.ingredientsText}>
            • 12 oz. dry spaghetti{'\n'}
            • Salt{'\n'}
            • 3 cups (65g) fresh basil leaves{'\n'}
            • 1/2 cup grated (35g) parmesan{'\n'}
            • 1/4 cup (36g) pine nuts{'\n'}
            • 2 medium garlic cloves, peeled{'\n'}
            • 1/2 cup extra virgin olive oil{'\n'}
            • 1/2 cup pasta water
          </Text>
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
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  recipeImage: {
    width: '100%',
    height: 200,
  },
  recipeContent: {
    padding: 20,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: '#FFD700',
  },
  reviews: {
    marginLeft: 10,
    fontSize: 14,
    color: '#888',
  },
  reviewsButton: {
    backgroundColor: '#E0BC87',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  reviewsButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  actionButton: {
    backgroundColor: '#E0BC87',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ingredientsText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
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

export default RecipePage;
