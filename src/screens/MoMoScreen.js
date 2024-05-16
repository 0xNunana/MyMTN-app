import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import MoMoCard from '../components/MoMoCard'
//import Header from '../components/Header'

const Data =[
{
    
    info1 :{ 
        icon:"account-cash-outline",
        type: "Transfer Money",
        design:"material-community"
    },
   
    info2 :{
         icon:"payments",
         type:"Cashout",
        design:"material"
        }
},
{
    
    info1 :{ 
        icon:"contact-phone",
        type: "Airtime",
        design:"material"
    },
   
    info2 :{
         icon:"bank",type:"Bank Services",
         design:"material-community"}
},
{
    
    info1 :{ 
        icon:"receipt",
        type: "Pay Bill",  design:"material"
    },
   
    info2 :{
         icon:"alert-outline",type:"Report MoMo Fraud",  design:"material-community"}
},

{
    
    info1 :{ 
        icon:"wallet-outline",
        type: "My Wallet",  design:"material-community"

    },
   
    info2 :{
         icon:"verified-user",
         type:"Approvals",  design:"material"}
},
{
    
    info1 :{ 
        icon:"star",
        type: "Favorites",  design:"material"
    },
   
    info2 :''
},



// {
//     icon:"",
//     type: "Transfer Money",
// },
// {
//     icon:"",
//     type:"Cashout",
// },
// {
//     icon:"",
//     type:"Airtime",
// },
// {
//     icon:"",
//     type:"Bank Services",
// },
// {
//     icon:"",
//     type:"Pay Bill",
// },

// {
//     icon:"",
//     type:"Report MoMo Fraud",
// },{
//     icon:"",
//     type:"My Wallet",
// },
// {
//     icon:"",
//     type:"Approvals",
// },
// {
//     icon:"",
//     type:"Favourites",
// },


]


const MoMoScreen = () => {
  return (
   <SafeAreaView className="flex-1">
    <View className="flex-row justify-between p-4 bg-[#ffcc00] items-center" >
      <Image source={{uri:"https://cdn.ghanaweb.com/imagelib/pics/877/87736696.jpg"}} style={{height:40, width:60, }}/>
      <Text className="font-bold text-xl">MoMo</Text>
      <View className="h-10 w-10"></View>
    </View>
<ScrollView className="px-4">
<View className=" bg-white rounded-2xl mt-4 mb-3 " style={{elevation:2}}>
        <View className="flex-row items-center">
<View className="p-5 flex-grow border-l-8 border-blue-600  ">

    <View className="flex-row  border-b " style={{borderBottomColor:'gray',borderBottomWidth:0.5}}>
        <Icon name="phone-android" color="gray"/>
        
        <Text className="font-bold text-xl text-gray-500"> MoMo Balance</Text>
    </View>
    <Text className="font-black text-2xl"> GHc 157,060.40</Text>
</View>
<View className="justify-center items-center border-2 border-[#ffcc00] rounded-2xl p-2 m-4">
    <Image source={{uri:"https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-codigo-svg-wikimedia-commons-30.png"}} style={{height:60,width:60}}/>
<Text className="text-blue-600 text-xs">
    MoMo Pay
</Text>
</View>

        </View>
        <View className="flex-row bg-[#ffcc00] rounded-b-2xl p-4 items-center" >
            <View className="flex-row flex-grow items-center">
                <Image source={require('../../assets/mom.png')} style={{height:40,width:30}}/>
                <Text className="font-bold text-blue-600 text-md">Download the MoMo App for more</Text>
            </View>
            <Icon type='material' name='arrow-forward' color="blue"/>
        </View>

    </View>
<View className="items-center">
    <Text className="font-bold text-lg">MoMo Services</Text>
</View>
{Data.map((item, index) => (
  <MoMoCard key={index} type1={item.info1.type} type2={item.info2.type} icon1={item.info1.icon} icon2={item.info2.icon} design1={item.info1.design} design2={item.info2.design}/>
//   <MoMoCard key={index + 1} type={item.info2.type} icon={item.info2.icon} />
))}



</ScrollView>
   


   </SafeAreaView>
  )
}

export default MoMoScreen