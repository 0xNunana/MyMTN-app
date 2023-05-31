import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'

const MoMoModal = () => {
  return (
   <SafeAreaView className="flex-1">
       <View className="flex-row justify-between p-4 bg-[#ffcc00] items-center">
    <Icon type='material' name="keyboard-backspace" size={30}/>
    <Text className="font-bold text-xl">MoMo Pin</Text>
    <Icon type='material' name="menu" size={30}/>
  </View>
  <View className="justify-center items-center bg-white flex-1" >
    <View>
    <Text>Enter MoMo Pin</Text>
<Text>(024 ****** 1)</Text>
    </View>
    <View>
        <Text>input</Text>
        <Text>Make sure no one is looking at your pin</Text>
    </View>


  </View>
   </SafeAreaView>
  )
}

export default MoMoModal