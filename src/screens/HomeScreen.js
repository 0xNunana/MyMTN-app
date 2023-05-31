import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import AirtimeData from '../components/AirtimeData'
import Pulse from '../components/Pulse'
import { Icon } from 'react-native-elements'
import Greetings from '../components/Greetings'


const Data = [
    {
        type:"Airtime",
        icon:"phone-iphone",
        balance: "GHC 5.00",
        bonus: "GHC 4.00"
    },
    {
        type:"Data",
        icon:"online-prediction",
        balance: "500 MB",
        bonus: "50 MB"
    },
    {
        type:"SMS",
        icon:"sms",
        balance: "612 SMS",
        bonus: "0 SMS"
    },
    {
        type:"Voice",
        icon:"mic",
        balance: "400 Minutes",
        bonus: "0.00 Min"
    },
    

]

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
<Header/>
<ScrollView className="px-4" >
<Greetings/>
<Pulse/>
{Data?.map((item)=>(
 <AirtimeData key={item.type} type={item.type} icon={item.icon} balance={item.balance} bonus={item.bonus}/>
))}

<View className="flex-row m-1 bg-white pt-1 pb-3 px-6 rounded-md" style={{elevation:2}}>
      <View className="space-y-1 items-center">
        <Text>Broadband</Text>
        <Icon name="wifi" type="material" size={40} color="#ffcc00"/>
      </View>
      <View className="px-10 justify-center ">
        <Text className="text-xl text-blue-700 font-black">Get Broadband</Text>
       <View className="flex-row space-x-8 items-center">
        <Text className="font-black ">Connect to the fastest speed</Text>
   
       </View>
      </View>
    </View>
    <View className="mb-5" >
        <Text className="py-3">Popular bundle</Text>
        <View className="bg-white pt-3 flex-row justify-between rounded-lg" style={{elevation:2}}>
            <View className="pb-1 pl-3">
                <Text className="text-blue-600 font-black text-2xl">401.61 MB</Text>
                <Text className=" bg-blue-600 rounded-full text-center px-1  text-white w-16" style={{fontSize:7}}>Stay Connected</Text>
            </View>
            <View className="border-2 border-blue-600 rounded-lg justify-center px-7 mt-2">
                <Text className="text-xl font-semibold text-blue-600">GHc 3</Text>
            </View>

        </View>
    </View>
{/* <FlatList
className="pt-5 px-2 "
data={Data}
keyExtractor={item =>item.type}
renderItem={({item})=>(
    <AirtimeData type={item.type} icon={item.icon} balance={item.balance} bonus={item.bonus}/>
)}
/> */}

</ScrollView>
<View className="absolute bottom-8 z-10 bg-white p-3" style={{elevation:3}}>
    <Icon name="contact-support" type='material' color="#FFcc00"/>
<Text className="text-blue-600">Help</Text>
</View>

    </SafeAreaView>
      

  )
}

export default HomeScreen