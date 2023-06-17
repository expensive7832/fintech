import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'


const onboardCard = ({data}) => {

    const size  = Dimensions.get("window")


  return (
    <View className="justify-center items-center flex-1 ">
     <View className="">
     <Image
     className=" m-auto"
      source={data?.img}
      resizeMode="contain"
      />
     </View>
    <Text className="absolute top-[80%] text-xl font-bold">{data?.text}</Text>
   
   
    </View>
  )
}

export default onboardCard