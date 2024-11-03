import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, CheckBox, Modal } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router"; // Import Link for navigation

const ShoppingListScreen = () => {
  // Initial sample data for the shopping list items
  const [items, setItems] = useState([
    { id: 1, category: 'Grains/Rice', name: 'Spaghetti 12oz.', checked: false },
    { id: 2, category: 'Condiments/Dressing', name: 'Salt', checked: false },
    { id: 3, category: 'Produce', name: 'Fresh Basil Leaves 3cups 65g.', checked: false },
    { id: 4, category: 'Produce', name: 'Garlic 2', checked: false },
    { id: 5, category: 'Others', name: 'Parmesan 1cup 35g.', checked: false },
    { id: 6, category: 'Others', name: 'Extra virgin olive oil 1/2cup', checked: false },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('');

  // Function to toggle item checked state
  const toggleCheck = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  // Function to clear checked items
  const clearCheckedItems = () => {
    setItems(items.filter(item => !item.checked));
  };

  // Function to add a new item
  const addItem = () => {
    if (newItemName.trim() && newItemCategory.trim()) {
      const newItem = {
        id: items.length + 1,
        category: newItemCategory,
        name: newItemName,
        checked: false,
      };
      setItems([...items, newItem]);
      setNewItemName('');
      setNewItemCategory('');
      setModalVisible(false); // Close the modal
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
       
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="white" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search</Text>
        </View>
        
      </View>

      {/* Title and Action Buttons */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.addButtonText}>Add an item</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add from plan</Text>
          </TouchableOpacity>
        </View>

        {/* Shopping List Items */}
        {['Grains/Rice', 'Condiments/Dressing', 'Produce', 'Others'].map((category) => (
          <View key={category}>
            <Text style={styles.categoryText}>{category}</Text>
            {items.filter(item => item.category === category).map(item => (
              <View key={item.id} style={styles.itemContainer}>
                <CheckBox
                  value={item.checked}
                  onValueChange={() => toggleCheck(item.id)}
                  style={styles.checkbox}
                />
                <Text style={styles.itemText}>{item.name}</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="pencil" size={18} color="black" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}

        {/* Clear Button */}
        <TouchableOpacity style={styles.clearButton} onPress={clearCheckedItems}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Add Item Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Item</Text>
            <TextInput
              style={styles.input}
              placeholder="Item Name"
              value={newItemName}
              onChangeText={setNewItemName}
            />
            <TextInput
              style={styles.input}
              placeholder="Category"
              value={newItemCategory}
              onChangeText={setNewItemCategory}
            />
            <TouchableOpacity style={styles.modalButton} onPress={addItem}>
              <Text style={styles.modalButtonText}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
    padding: 10,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 5,
  },
  searchPlaceholder: {
    color: '#D1B892',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#D1B892',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'black',
    fontWeight: '600',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 14,
  },
  clearButton: {
    backgroundColor: '#E0BC87',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#E0BC87',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalCancelText: {
    color: '#888',
    marginTop: 10,
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

export default ShoppingListScreen;
