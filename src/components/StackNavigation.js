import { View, Text } from 'react-native'
import React from 'react'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { Icon } from 'react-native-elements'
import Purchase from '../screens/Purchase'

const StackNavigation = ({navigation}) => {
   const Tab = createBottomTabNavigator()
  return (
   <Tab.Navigator screenOptions={{tabBarStyle:{height:70}, }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,  tabBarIcon:(color,size)=>(<Icon type="material" name="home" color='#ffcc00' size={50}/>)}}/>
    <Tab.Screen name="Buy/Send" component={Purchase} options={{ headerShown:false, tabBarIcon:(color,size)=>(<Icon type="material" name="shopping-cart" color='#ffcc00' size={50}/>)}}/>
   </Tab.Navigator>
  )
}

export default StackNavigation