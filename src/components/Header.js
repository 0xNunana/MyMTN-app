import { View, Text } from 'react-native'
import React from 'react'
import { Icon ,Image} from 'react-native-elements'

const Header = () => {
  return (
    <View className="flex-row justify-between p-4 bg-[#ffcc00] items-center">
      <Image source={{uri:"https://1000logos.net/wp-content/uploads/2022/08/MTN-Logo.png"}} style={{height:40, width:40, }}/>
      <Text className="font-bold text-xl">Home</Text>
      <Icon type='material' name="menu" size={30}/>
    </View>
  )
}

export default Header