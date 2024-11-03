import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';

const Review2Page = () => {
  const { name, stars, comment, date } = useLocalSearchParams();

  // Initial reviews plus the newly added review
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Soo F',
      rating: '★★★★☆',
      date: '10/10/2024',
      comment: 'This Pesto Pasta is amazing! The basil flavor really comes through, and it’s perfectly creamy. Will definitely make it again!',
    },
    {
      id: 2,
      name: 'Soo B',
      rating: '★★★★★',
      date: '10/10/2024',
      comment: 'Delicious!',
    },
  ]);

  // Add new review if passed as params
  useEffect(() => {
    if (name && stars && comment && date) {
      setReviews((prevReviews) => [
        ...prevReviews,
        {
          id: prevReviews.length + 1,
          name,
          rating: '★'.repeat(stars) + '☆'.repeat(5 - stars),
          date,
          comment,
        },
      ]);
    }
  }, [name, stars, comment, date]);

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

        {/* Display reviews */}
        {reviews.map((review) => (
          <View key={review.id} style={styles.review}>
            <Image style={styles.profileImage} source={require('../assets/images/Soo.jpg')} />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewerName}>{review.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{review.rating}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Text style={styles.reviewText}>{review.comment}</Text>
            </View>
          </View>
        ))}
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

export default Review2Page;
