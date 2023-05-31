import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const Header2 = () => {
  return (
    <View className="flex-row justify-between p-4 bg-[#ffcc00] items-center">
    <Icon type='material' name="keyboard-backspace" size={30}/>
    <Text className="font-bold text-xl">Buy/Send</Text>
    <Icon type='material' name="menu" size={30}/>
  </View>
)
  
}

export default Header2