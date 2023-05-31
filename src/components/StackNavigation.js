import { View, Text } from 'react-native'
import React from 'react'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { Icon } from 'react-native-elements'
import Purchase from '../screens/Purchase'
import MoMoModal from '../screens/MoMoModal'
import MoMoScreen from '../screens/MoMoScreen'

const StackNavigation = ({navigation}) => {
   const Tab = createBottomTabNavigator()
  return (
   <Tab.Navigator screenOptions={{tabBarStyle:{height:70},tabBarLabelStyle:{fontSize:15} }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,  tabBarIcon:(color,size)=>(<Icon type="material" name="home" color='#ffcc00' size={40}/>)}}/>
    <Tab.Screen name="Buy/Send" component={Purchase} options={{ headerShown:false, tabBarIcon:(color,size)=>(<Icon type="material" name="shopping-cart" color='#ffcc00' size={40}/>)}}/>
    <Tab.Screen name="MoMo" component={MoMoScreen} options={{ headerShown:false, tabBarIcon:(color,size)=>(<Icon type="material" name="shopping-cart" color='#ffcc00' size={40}/>)}}/>
   </Tab.Navigator>
  )
}

export default StackNavigation