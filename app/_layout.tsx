import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  
<Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="login/index" options={{headerShown:false}}/>
      <Stack.Screen name="login/dashboard" options={{ title: 'Bike Tracking Dashboard' }} />
      <Stack.Screen name="login/bookingCard" options={{ title: 'Booking' }} />
      <Stack.Screen name="login/vehcle" options={{ title: 'Vehcles' }} />
</Stack>

  )
}
