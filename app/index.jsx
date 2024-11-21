import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';
export default function Index() {


  return (
    <View>
   <Redirect href={'/login'} />
   {/* <Redirect href={'/dashboard'}/> */}
    </View>
  );
}
