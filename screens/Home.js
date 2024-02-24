import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import axios from 'axios'
import { SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {Feather, FontAwesome, FontAwesome5, Fontisto, Entypo, Ionicons, MaterialIcons, EvilIcons, AntDesign} from "@expo/vector-icons"

const Home = ({navigation}) => {

    // let token= "FLWSECK_TEST-83edf11bdadc812f71491b0c8e5a53c5-X"

    // useLayoutEffect(() =>{

    //     axios.get("https://api.flutterwave.com/v3/bill-categories", {
    //         headers:{
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err.message))


    // }, [])

  return (
    <SafeAreaView className={`flex-1`}>
      <StatusBar/>
    <View className="flex-[0.2]  flex-row items-center justify-between">
      <View className="p-2 flex-row items-center">
        <Image
          className="w-10 h-10 rounded-full"
          resizeMode='contain'
          source={require("./../assets/girl2.png")}
        />

        <View className="mx-3">
          <Text>Hello, YUSUF</Text>
          <View className="flex-row items-center gap-3">
            <View className="border border-blue-300 p-2 rounded-full">
              <View className="bg-gray-300 w-5 h-5  rounded-full items-center justify-center"><Text className="">2</Text></View>
            </View>
            <Text className="bg-gray-300 text-center px-3">Tier 2</Text>

          </View>
        </View>
      </View>

      <View className="flex-row justify-between items-center">
        <View className="mx-2"><Feather name="phone-call" size={22} color="black" /></View>
        <View className="mx-2"><MaterialIcons name="qr-code-scanner" size={22} color="black" /></View>
        <View className="mx-2"><Ionicons name="notifications-circle" size={22} color="black" /></View>
      </View>
    </View> 

    <View className="flex-[0.7]">
      <ScrollView>
        <View className="bg-green-700 p-5 rounded-md">
          <View className="flex-row justify-between items-center">
            <View className="">
              <View className="justify-center flex-row">
                <Text className="text-white">Total Balance</Text>
                <TouchableOpacity className="mx-2">
                  <EvilIcons name="eye" size={24} color="white" />
                </TouchableOpacity>
              </View>

              <Text className="text-lg text-white font-bold"> ₦ 31000.00</Text>
            </View>

            <Text className=" text-white font-bold">Transactional History</Text>
          </View>

          <View className="flex-row justify-evenly my-10">
            <View>
              <View className="bg-white flex items-center justify-center w-12 h-12 rounded-md p-1 m-auto"><AntDesign name="arrowdown" size={24} color="black" /></View>
              <Text className="text-white my-2">Add Money</Text>
            </View>

            <View>
              <View className="bg-white flex items-center justify-center w-12 h-12 rounded-md p-1 m-auto"><AntDesign name="arrowdown" size={24} color="black" /></View>
              <Text className="text-white my-2">Transfer</Text>
            </View>

            <View>
              <View className="bg-white flex items-center justify-center w-12 h-12 rounded-md p-1 m-auto"><AntDesign name="arrowdown" size={24} color="black" /></View>
              <Text className="text-white my-2">Withdraw</Text>
            </View>
          </View>

        </View>

        <View className="p-4">

        <Text className="font-semibold mt-3 my-10">Payment</Text>

        <View className="flex-row justify-around">
          <TouchableOpacity className="mb-4" onPress={() => navigation.navigate("airtime")}>
            <View className="bg-green-50 h-16 w-16 rounded-full items-center justify-center m-auto"><FontAwesome name="mobile-phone" size={32} color="green" /></View>
            <Text className=" my-2 text-center">Airtime</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("data")} className="mb-4">
            <View className="bg-green-50 h-16 w-16 rounded-full items-center justify-center m-auto"><MaterialIcons name="network-wifi" size={32} color="green" /></View>
            <Text className=" my-2 text-center">Data</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-green-50 h-16 w-16 rounded-full items-center justify-center m-auto"><FontAwesome name="money" size={32} color="green" /></View>
            <Text className="my-2 text-center">Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-green-50 h-16 w-16 rounded-full items-center justify-center m-auto"><Feather name="tv" size={32} color="green" /></View>
            <Text className="my-2 text-center">TV</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-around">
          <TouchableOpacity className="mb-4">
            <View className="bg-green-50 h-16 w-16 rounded-full items-center justify-center m-auto"><FontAwesome name="lightbulb-o" size={32} color="green" /></View>
            <Text className=" my-2 text-center">Electricity</Text>
          </TouchableOpacity>

          <TouchableOpacity className="mb-4">
            <View className="bg-green-50 h-16 w-16 rounded-full items-center justify-center m-auto"><Fontisto name="world" size={32} color="green" /></View>
            <Text className=" my-2 text-center">Internet</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-green-50 h-16 w-16 rounded-full items-center justify-center m-auto"><FontAwesome5 name="user-graduate" size={32} color="green" /></View>
            <Text className="my-2 text-center">School</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="bg-green-50 h-16 w-16 rounded-full items-center justify-center m-auto"><Entypo name="info" size={32} color="green" /></View>
            <Text className="my-2 text-center">More</Text>
          </TouchableOpacity>
        </View>

        </View>


      </ScrollView>
    </View>
  </SafeAreaView>
  )
}

export default Home