import { View, Text } from 'react-native'
import React from 'react'

const Greetings = () => {
  return (
    <View className="flex-row justify-center items-center p-3">
      <Text className="font-black text-2xl italic"> y'ello </Text>
      <Text className="text-2xl">Paul Yao</Text>
    </View>
  )
}

export default Greetings