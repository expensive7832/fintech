import { View, Text, TextInput, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {
  return (
      <View className={`${Platform.OS === "android" && "mt-10"} px-5 bg-white flex-1 `}>
        <View className="flex-[0.3]">
        <Image
        className="w-32 h-32 m-auto"
        source={require("./../assets/lock.png")}
        resizeMode="contain"
        />
        </View>
       
       <View className="flex-[0.5] justify-center">
       <View className="my-10">
            <TextInput keyboardType='email-address' className="border my-2 border-gray-50 shadow-sm p-2 rounded-md " placeholder='enter firstname'/>
            <TextInput  secureTextEntry={true} className="border my-2 border-gray-50 shadow-sm p-2 rounded-md " placeholder='enter password'/>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("signup")} className="my-2 bg-[#02211f] p-3 rounded-md">
            <Text className="text-center text-white">Login</Text>
        </TouchableOpacity>
       </View>


      </View>

  )
}

export default Login