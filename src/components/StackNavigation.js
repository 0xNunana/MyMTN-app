import { View, Text } from 'react-native'
import React from 'react'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { Icon } from 'react-native-elements'

const StackNavigation = () => {
   const Tab = createBottomTabNavigator()
  return (
   <Tab.Navigator screenOptions={{tabBarStyle:{height:70}, tabBarShowLabel:false}}>
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,  tabBarIcon:(color,size)=>(<Icon type="material" name="home" color='#ffcc00' size={50}/>)}}/>
   </Tab.Navigator>
  )
}

export default StackNavigation