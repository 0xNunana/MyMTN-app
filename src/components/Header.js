import { View, Text } from 'react-native'
import React from 'react'
import { Icon ,Image} from 'react-native-elements'

const Header = () => {
  return (
    <View className="flex-row justify-between p-4 bg-[#ffcc00] items-center">
      <Image source={{uri:"https://cdn.ghanaweb.com/imagelib/pics/877/87736696.jpg"}} style={{height:40, width:60, }}/>
      <Text className="font-bold text-xl">Home</Text>
      <View className="w-10">
      <Icon type='material' name="menu" size={30}/>
      </View>
      
    </View>
  )
}

export default Header