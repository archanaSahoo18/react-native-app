import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from './../../constants/Colors'; // Ensure Colors is correctly imported

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const vehicles = [
  {
    id: 1,
    model: 'Ather-450-Electric-Scooter-PricesOfIndia',
    range: '396 miles',
    battery: '92%',
    image: 'https://cdn.pricesofindia.com/src/news/2021/01/27/Ather-450-Electric-Scooter-PricesOfIndia.jpg',
  },
  {
    id: 2,
    model: 'Model-21-Electric-Bike EV',
    range: '259 miles',
    battery: '90%',
    image: 'https://eriderbikes.com/wp-content/uploads/2020/05/Model-21-Electric-Bike.jpg',
  },
  {
    id: 3,
    model: 'Mar',
    range: '150 miles',
    battery: '87%',
    image: 'https://media.zigcdn.com/media/model/2023/Mar/front-left-view-684044853_930x620.jpg',
  },
  {
    id: 4,
    model: '2-Wheel-Electric-Bicycle',
    range: '300 miles',
    battery: '90%',
    image: 'https://www.superickshaw.com/wp-content/uploads/2022/07/2-Wheel-Electric-Bicycle.jpg.jpg',
  },
  {
    id: 5,
    model: 'Walmart',
    range: '300 miles',
    battery: '89%',
    image: 'https://i5.walmartimages.com/asr/123c9b80-82fa-45cc-aa10-3f2edeb4db1e_1.da3e24371cdae1bd04a6759067ec04b6.jpeg?odn',
  },
  {
    id: 6,
    model: 'Ali cdn',
    range: '222 miles',
    battery: '100%',
    image: 'https://sc04.alicdn.com/kf/Haa83bf37f7cc42ccbf6d1697e804658a2/267913829/Haa83bf37f7cc42ccbf6d1697e804658a2.jpg',
  },
];

export default function Vehicle() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Electric Vehicle Booking</Text>
      <View style={styles.bookingList}>
        {vehicles.map((vehicle) => (
          <View key={vehicle.id} style={styles.cardContainer}>
            <Image source={{ uri: vehicle.image }} style={styles.image} />
            <Text style={styles.model}>{vehicle.model}</Text>
            <Text style={styles.details}>Range: {vehicle.range}</Text>
            <Text style={styles.details}>Battery: {vehicle.battery}</Text>
            
            {/* Book Now Button */}
            <TouchableOpacity style={styles.bookNowButton} onPress={() => alert('Booking Now')}>
              <Text style={styles.bookNowButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#047366',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#fff'
  },
  bookingList: {
    width: '100%',
  },
  cardContainer: {
    width: width, // Take the full width of the screen
    height: height * 0.7, // Adjust height (Increased to allow space for "Book Now")
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '60%', // Adjust height of image
    resizeMode: 'cover',
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color:'#fff'
  },
  details: {
    fontSize: 14,
    textAlign: 'center',
    color:'#fff'

  },
  bookNowButton: {
    width: '80%',
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bookNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
