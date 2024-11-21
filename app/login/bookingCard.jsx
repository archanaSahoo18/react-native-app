import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BookingCard = ({ vehicle }) => {
  return (
    <View style={styles.card}>
      {/* 3D Effect on the Image */}
      <Image source={{ uri: vehicle.image }} style={styles.image} />
      <Text style={styles.model}>{vehicle.model}</Text>
      <Text style={styles.range}>Range: {vehicle.range}</Text>
      <Text style={styles.battery}>Battery: {vehicle.battery}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',  // Ensure each card takes up almost half of the screen width
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',   // Shadow effect for 3D image
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 6,           // Elevation for Android 3D effect
  },
  model: {
    fontWeight: 'bold',
    color:"fff",
    marginTop: 10,
    fontSize: 50,
  },
  range: {
    fontSize: 40,
    color: '#fff',
  },
  battery: {
    fontSize: 30,
    color: '#fff',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // For Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BookingCard;
