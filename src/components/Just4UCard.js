import { View, Text } from 'react-native'
import React from 'react'

const Just4UCard = ({type,details,price}) => {
  return (
    <View className="bg-white p-4 m-2 rounded-xl"  style={{elevation:2}}>
        <View className="flex-row justify-around">
            <View className="flex-grow">
                <Text className="text-blue-600 text-2xl w-40 font-semibold">{type}</Text>
                
            </View>
            <View className="rounded-full border items-center justify-center  px-4 my-4">
                <Text className="text-blue-600 text-center text-xl" >{price}</Text>
            </View>
        </View>
      <Text className="py-2">{details}</Text>
      <View className="bg-blue-600 w-28 p-2 rounded-full ">
        <Text className="text-center text-white" style={{fontSize:12}}>Stay connected</Text>
      </View>
    </View>
  )
}

export default Just4UCard