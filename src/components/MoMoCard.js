import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const MoMoCard = ({icon1,type1,type2,icon2,design1,design2}) => {
  return (
    <View className=" items-center flex-row justify-around my-4 ">
        <TouchableOpacity className="w-36 items-center bg-white rounded-2xl p-3">
        <Icon name={icon1} type={design1} size={50} color="blue"/>
      <Text>{type1}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white w-36 items-center rounded-2xl p-3">
        <Icon name={icon2} type={design2} size={50} color="blue"/>
      <Text className="text-center">{type2}</Text>
        </TouchableOpacity>
       
    </View>
  )
}

export default MoMoCard