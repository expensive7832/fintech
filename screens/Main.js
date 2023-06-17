import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Platform } from 'react-native'
import { Image } from 'react-native'
import {
  Feather,
  FontAwesome5,
  MaterialIcons,
  Entypo,
  Ionicons,
  EvilIcons,
  AntDesign,
  FontAwesome,
  Fontisto
} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


const Main = ({ navigation }) => {
  return (
    <View className={`${Platform.OS === "android" && "mt-10"} flex-1 bg-white`}>
      <View className="flex-[0.3]  flex-row items-center justify-between">
        <View className="p-2 flex-row">
          <Image
            className="w-20 h-20 rounded-full"
            resizeMode='contain'
            source={require("./../assets/girl2.png")}
          />

          <View className="mx-3">
            <Text>Hello, YUSUF</Text>
            <View className="flex-row items-center">
              <View className="border border-blue-300 p-2 rounded-full">
                <View className="bg-gray-300 w-10 h-10  rounded-full items-center justify-center"><Text className="">2</Text></View>
              </View>
              <Text className="bg-gray-300 text-center px-3">Tier 2</Text>

            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="mx-2"><Feather name="phone-call" size={24} color="black" /></View>
          <View className="mx-2"><MaterialIcons name="qr-code-scanner" size={24} color="black" /></View>
          <View className="mx-2"><Ionicons name="notifications-circle" size={24} color="black" /></View>
        </View>
      </View>

      <View className="flex-[0.7]">
        <ScrollView>
          <View className="bg-green-700 p-5 rounded-md">
            <View className="flex-row justify-between items-center">
              <View className="">
                <View className="justify-center flex-row">
                  <Text className="text-white">Total Balance</Text>
                  <View className="mx-2">
                    <EvilIcons name="eye" size={24} color="white" />
                  </View>
                </View>

                <Text className="text-lg text-white font-bold"> ₦ 31000.00</Text>
              </View>

              <Text className=" text-white font-bold">Transactional History</Text>
            </View>

            <View className="flex-row justify-evenly my-16">
              <View>
                <View className="bg-white w-10 h-10 rounded-md p-1 m-auto"><AntDesign name="arrowdown" size={24} color="black" /></View>
                <Text className="text-white my-2">Add Money</Text>
              </View>

              <View>
                <View className="bg-white w-10 h-10 rounded-md p-1 m-auto"><AntDesign name="arrowdown" size={24} color="black" /></View>
                <Text className="text-white my-2">Transfer</Text>
              </View>

              <View>
                <View className="bg-white w-10 h-10 rounded-md p-1 m-auto"><AntDesign name="arrowdown" size={24} color="black" /></View>
                <Text className="text-white my-2">Withdraw</Text>
              </View>
            </View>

          </View>

          <Text className="font-semibold mt-3 my-10">Payment</Text>

          <View className="flex-row justify-around">
            <TouchableOpacity className="mb-4" onPress={() => navigation.navigate("airtime")}>
              <View className="bg-green-50 rounded-full p-5 m-auto"><FontAwesome name="mobile-phone" size={32} color="green" /></View>
              <Text className=" my-2 text-center">Airtime</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4">
              <View className="bg-green-50 p-5 rounded-full m-auto"><MaterialIcons name="network-wifi" size={32} color="green" /></View>
              <Text className=" my-2 text-center">Data</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="mb-4 rounded-full bg-green-50  p-5 m-auto justify-center"><FontAwesome name="money" size={32} color="green" /></View>
              <Text className="my-2 text-center">Withdraw</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="mb-4 rounded-full bg-green-50  p-5 m-auto justify-center"><Feather name="tv" size={32} color="green" /></View>
              <Text className="my-2 text-center">TV</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-around">
            <TouchableOpacity className="mb-4">
              <View className="bg-green-50 rounded-full p-5 m-auto"><FontAwesome name="lightbulb-o" size={32} color="green" /></View>
              <Text className=" my-2 text-center">Electricity</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4">
              <View className="bg-green-50 p-5 rounded-full m-auto"><Fontisto name="world" size={32} color="green" /></View>
              <Text className=" my-2 text-center">Internet</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="mb-4 rounded-full bg-green-50  p-5 m-auto justify-center"><FontAwesome5 name="user-graduate" size={32} color="green" /></View>
              <Text className="my-2 text-center">School</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="mb-4 rounded-full bg-green-50  p-5 m-auto justify-center"><Entypo name="info" size={32} color="green" /></View>
              <Text className="my-2 text-center">More</Text>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </View>
    </View>
  )
}

export default Main