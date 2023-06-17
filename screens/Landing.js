import { View, Text, Dimensions, FlatList } from 'react-native'
import React from 'react'
import {SwiperFlatList} from "react-native-swiper-flatlist"
import data from '../components/onboard-data'
import OnboardCard from '../components/OnboardCard';
import { TouchableOpacity } from 'react-native';



const Landing = ({navigation}) => {

  
  return (
    <>
    <View className="flex-[0.7] justify-center items-center">
      
    <SwiperFlatList
      className=""
      data={data}
      autoplay={true}
      bounces={false}
      autoplayLoop={true}
      showPagination={true}
      
      renderItem={({item}) => <OnboardCard data={item}/>}
      />

      

    </View>

<View className="flex-[0.3] justify-end">
    <TouchableOpacity onPress={() => navigation.navigate("login")} className="bg-[#02111f] my-4 mx-5 p-3 rounded-md">
        <Text className="text-white text-center font-bold text-lg">Login</Text>
      </TouchableOpacity>
  </View>

    </>
  )
}

export default Landing