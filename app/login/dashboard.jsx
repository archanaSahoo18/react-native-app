import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();
  const handleMenuClick = (menuName) => {
    Alert.alert(
      `${menuName}`,
      `You clicked on ${menuName}`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to /login/vehicle when the user clicks 'OK' in the alert
            if (menuName ==='Bike Details') {
              //router.push('/login/dashboard');
              router.push('/login/vehcle');  // This should match your screen name
            }
          },
        },
      ],
      { cancelable: false }
    );
    // Add navigation logic for each menu item here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bike Tracking Dashboard</Text>
      <Image
        source={require('./../../assets/images/EVSPEER.png')} // Ensure this path is correct
        style={styles.logo}
      />
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => handleMenuClick('Battery Status')}
        >
          <FontAwesome5 name="battery-three-quarters" size={40} color="#047366" />
          <Text style={styles.menuText}>Battery Status</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => handleMenuClick('Petrol Notifications')}
        >
          <FontAwesome5 name="gas-pump" size={40} color="#F05454" />
          <Text style={styles.menuText}>Petrol Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => handleMenuClick('Nearby Charging Stations')}
        >
          <MaterialIcons name="ev-station" size={40} color="#2D98DA" />
          <Text style={styles.menuText}>Charging Stations</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => handleMenuClick('Bike Details')}
        >
          <Entypo name="info-with-circle" size={40} color="#1B98F5" />
          <Text style={styles.menuText}>Bike Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#047366',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 15, // shadow effect for Android
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuCard: {
    width: '45%',
    height: 150,
    backgroundColor: '#E8F9FD',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 15, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    transform: [{ translateY: 10 }],
    transition: 'transform 0.2s ease-in-out', // For smooth transition
  },
  menuCardPressed: {
    transform: [{ translateY: 0 }, { scale: 1.05 }], // Slightly enlarge the card when pressed
  },
  menuText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase', // Makes the text more stylistic
  },
});
