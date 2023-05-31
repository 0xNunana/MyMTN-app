import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const AirtimeData = ({type,icon,balance,bonus}) => {
  return (
    <View className="flex-row m-1 bg-white pt-1 pb-3 px-6 rounded-md" style={{elevation:2}}>
      <View className="space-y-1 items-center">
        <Text>{type}</Text>
        <Icon name={icon} type="material" size={50} color="#ffcc00"/>
      </View>
      <View className="px-10 justify-center ">
        <Text className="text-3xl text-blue-700 font-black">{balance}</Text>
       <View className="flex-row space-x-8 items-center">
        <Text className="font-black text-lg">Bonus</Text>
        <Text className="text-lg">{bonus}</Text>
       </View>
      </View>
    </View>
  )
}

export default AirtimeData

