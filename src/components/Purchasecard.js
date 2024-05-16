import { View, Text } from 'react-native'
import React from 'react'
import { Icon,Image } from 'react-native-elements'

const Purchasecard = ({type,socials,offer,icon,details}) => {
  return (
    <View className="flex-row bg-white m-2 rounded-l-2xl" style={{borderRadius:30,elevation:2}}>
      <View className="flex-grow  bg-white ">
        <View className="flex-row p-2 border-l-xl">
        <Text className="text-blue-600 text-2xl font-semibold">{type}</Text>
        <Text>{offer}</Text>
        </View>
       
        <View className="flex-row items-center space-x-3 px-4 py-2">
            {icon ? (<Icon name={icon} type='material' size={30}/>) : (
                <View className="">
            <Image source={require('../../assets/pngwing.com.png')} style={{height:30,width:20}}/>
            </View>
            ) }
            <Text className="text-gray-500">{details}</Text>
        </View>
      </View>
      <View className="bg-blue-600 w-10 items-center justify-center  text-white rounded-r-lg">
     
       <Icon name="chevron-right" type='material' size={50} color="white" />
        </View>
    </View>
  )
}

export default Purchasecard