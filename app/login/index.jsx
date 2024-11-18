import { View, Text } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View>
      <Text>Login Screen</Text>
      <Image source={require('./../../assets/images/EVSPEER.png')}
      style={{
        width:"100%",
        height:600
    }}
      />
    </View>
  )
}