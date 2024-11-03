import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const ReviewPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pesto Pasta by @Soo</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Recipe Image and Title */}
        <View style={styles.recipeHeader}>
          <Image
            style={styles.recipeImage}
            source={require('../assets/images/Pesto.jpg')}
          />
          <Text style={styles.recipeTitle}>Pesto Pasta by @Soo</Text>
        </View>

        {/* Reviews Section */}
        <Text style={styles.sectionTitle}>Reviews</Text>

        {/* Review 1 */}
        <View style={styles.review}>
          <Image style={styles.profileImage} source={require('../assets/images/Soo.jpg')} />
          <View style={styles.reviewContent}>
            <Text style={styles.reviewerName}>Soo F</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★★★★☆</Text>
              <Text style={styles.reviewDate}>10/10/2024</Text>
            </View>
            <Text style={styles.reviewText}>This Pesto Pasta is amazing! The basil flavor really comes through, and it’s perfectly creamy. Will definitely make it again!</Text>
          </View>
        </View>

        {/* Review 2 */}
        <View style={styles.review}>
          <Image style={styles.profileImage} source={require('../assets/images/Soo.jpg')} />
          <View style={styles.reviewContent}>
            <Text style={styles.reviewerName}>Soo B</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★★★★★</Text>
              <Text style={styles.reviewDate}>10/10/2024</Text>
            </View>
            <Text style={styles.reviewText}>Delicious!</Text>
          </View>
        </View>
      </ScrollView>

      {/* Write a Review Section */}
      <View style={styles.writeReviewContainer}>
        <Image style={styles.profileImage} source={require('../assets/images/Soo.jpg')} />
        <TextInput
          style={styles.reviewInput}
          placeholder="Write a Review..."
        />
        <Link href="/wreview" asChild>
          <TouchableOpacity>
            <Ionicons name="send-outline" size={24} color="#A36F22" />
          </TouchableOpacity>
        </Link>
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
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  recipeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  recipeImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  review: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 18,
    color: '#FFD700',
  },
  reviewDate: {
    marginLeft: 10,
    fontSize: 14,
    color: '#888',
  },
  reviewText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  writeReviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 60, // Adjusted for the bottom navigation
    width: '100%',
  },
  reviewInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#F3E5D7',
    borderRadius: 20,
    fontSize: 16,
    marginRight: 10,
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

export default ReviewPage;
