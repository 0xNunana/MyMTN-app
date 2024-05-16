import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon ,Image} from 'react-native-elements'
const MoreScreen = () => {
  return (
    <SafeAreaView className="flex-1">
        <View className="flex-row justify-between p-4 bg-[#ffcc00] items-center">
      <Image source={{uri:"https://cdn.ghanaweb.com/imagelib/pics/877/87736696.jpg"}} style={{height:40, width:60, }}/>
      <Text className="font-bold text-xl">Get More</Text>
      <View className="w-10">
      <Icon type='material' name="menu" size={30}/>
      </View>
      
    </View>
  <ScrollView>



  </ScrollView>
    </SafeAreaView>
  )
}

export default MoreScreen