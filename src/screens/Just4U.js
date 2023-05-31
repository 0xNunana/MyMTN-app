import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import Just4UCard from '../components/Just4UCard'

const Data = [
    {
        type:"130MB daily pack",
        price:"GHc2.0",
        details:"Buy the 130MB daily pack at GHc2"
    },
    {
        type:"500MB daily + 100MB Bonus",
        price:"GHc3.0",
        details:"Buy the 500MB daily pack at GHc3 and get 100MB Bonus valid for 1 day"
    },

{
    type:"150MB 7-day pack",
    price:"GHc1.5",
    details:"Buy the 150MB 7-day pack at GHc1.5"
}

]

const Just4U = () => {
  return (
    <SafeAreaView className="flex-1">
       <View className="flex-row justify-between p-4 bg-[#ffcc00] items-center">
    <Icon type='material' name="keyboard-backspace" size={30}/>
    <Text className="font-bold text-xl">Just4U</Text>
    <Icon type='material' name="menu" size={30}/>
  </View>

<ScrollView className="m-3">
    <View className="justify-center items-center p-6">
        <Text className="font-semibold text-xl">Exclusive offers Just4U</Text>
    </View>
    {Data?.map((item)=>( <Just4UCard  key={item.type} type={item.type} details={item.details} price={item.price}/>))}
 
</ScrollView>



    </SafeAreaView>
  )
}

export default Just4U