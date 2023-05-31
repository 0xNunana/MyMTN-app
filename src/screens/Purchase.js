import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header2 from '../components/Header2'
import { SafeAreaView } from 'react-native-safe-area-context'
import Purchasecard from '../components/Purchasecard'
import { Icon } from 'react-native-elements'

const Data=[{
    type:"Airtime",
    icon:"phone-in-talk",
    details:"TopUp Airtime: Pay with MoMo",
    offer:"",
    socials:""
},{
    type:"Data",
    icon:"wifi",
    details:"Stay connected to the rest of the world",
    offer:"",
    socials:""
},{
    type:"IDD Bundles",
    icon:"dialer-sip",
    details:"Special international calls offers",
    offer:"",
    socials:""
},{
    type:"MTN Pulse",
    icon:"storage",
    details:"Mashup your bundles",
    offer:"",
    socials:""
},{
    type:"Social Bundle",
    icon:"",
    details:"Get social | Stay connected",
    offer:"",
    socials:""
},{
    type:"Others",
    icon:"add",
    details:"Videos,Midnight & Kokrokoo",
    offer:"",
    socials:""
},{
    type:"Just4U",
    icon:"work",
    details:"Unique offers for you",
    offer:"",
    socials:""
},


]

const Purchase = () => {
  return (
    <SafeAreaView>
        <Header2/>
      <ScrollView className="mb-16"> 
        <View className="border border-[#ffcc00] flex-row items-center p-2 mx-2 mb-3 mt-10 space-x-3 bg-white">
<Icon name="wifi-tethering" type="material" size={40} color="#ffcc00"/>
<View className="pr-7">
    <Text className="font-bold text-xl">Special Days Offer!</Text>
    <Text className="text-gray-500 ">Enjoy 2.5GB of data for only GHc10  on holidays and on special days valid for 24hours </Text>
</View>
        </View>
{Data?.map ((item)=>(
    <Purchasecard key={item.type} type={item.type} socials={item.socials} offer={item.offer} icon={item.icon} details={item.details}/>
))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Purchase