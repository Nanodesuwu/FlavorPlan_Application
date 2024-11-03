import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const WriteReviewPage = () => {
  const router = useRouter();
  const [rating, setRating] = useState(4); // Default rating
  const [reviewText, setReviewText] = useState('');

  const submitReview = () => {
    // Navigate to review2 and pass new review data as query parameters
    router.push({
      pathname: 'review2',
      params: {
        name: 'Tan Soo Hong',
        stars: rating,
        comment: reviewText,
        date: new Date().toLocaleDateString(), // Current date
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>How was the your meal?</Text>
        <Text style={styles.subTitle}>Let us know how the meal was!</Text>
      </View>

      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Ionicons
              name={star <= rating ? "star" : "star-outline"}
              size={32}
              color="#FFD700"
            />
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.reviewInput}
        placeholder="Write your review..."
        multiline
        value={reviewText}
        onChangeText={setReviewText}
      />

      <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
        <Ionicons name="send-outline" size={24} color="#A36F22" />
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color: '#888',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
    backgroundColor: '#F3E5D7',
    fontSize: 16,
    marginBottom: 20,
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0BC87',
    paddingVertical: 10,
    borderRadius: 8,
  },
  submitText: {
    color: '#A36F22',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default WriteReviewPage;
