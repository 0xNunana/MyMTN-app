import { View, Text,Image } from 'react-native'
import React from 'react'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import { Icon } from 'react-native-elements'
import Purchase from '../screens/Purchase'
import MoMoModal from '../screens/MoMoModal'
import MoMoScreen from '../screens/MoMoScreen'
import Just4U from '../screens/Just4U'
import MoreScreen from '../screens/MoreScreen'

const StackNavigation = ({navigation}) => {
   const Tab = createBottomTabNavigator()
  return (
   <Tab.Navigator screenOptions={{tabBarStyle:{height:70},tabBarLabelStyle:{fontSize:15} }}>
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,  tabBarIcon:(color,size)=>(<Icon type="material" name="home" color='#ffcc00' size={40}/>)}}/>
    <Tab.Screen name="Buy/Send" component={Purchase} options={{ headerShown:false, tabBarIcon:(color,size)=>(<Icon type="antdesign" name="shoppingcart" color='#ffcc00' size={40}/>)}}/>
    <Tab.Screen name="MoMo" component={MoMoScreen} options={{ headerShown:false, tabBarIcon:(color,size)=>(<Image source={require('../../assets/momo.png')} style={{borderRadius:100,height:100,width:100 }}/>)}}/>
    <Tab.Screen name="Just4U" component={Just4U} options={{ headerShown:false, tabBarIcon:(color,size)=>(<Icon type="material-community" name="shopping-outline" color='#ffcc00' size={40}/>)}}/>
    <Tab.Screen name="More" component={MoreScreen} options={{ headerShown:false, tabBarIcon:(color,size)=>(<Icon type="material" name="more-horiz" color='#ffcc00' size={40}/>)}}/>
   </Tab.Navigator>
  )
}

export default StackNavigation