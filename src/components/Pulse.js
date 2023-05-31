import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

const Pulse = () => {
  return (
    <View className="py-3">
      <Image source={{uri:"https://nilepost.co.ug/wp-content/uploads/2021/03/MTN-Pulse.jpeg"}} style={{ width:"100%",height:100}}/>
    </View>
  )
}

export default Pulse