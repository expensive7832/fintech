import { View, Text, TextInput, Platform } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const Signup = ({navigation}) => {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

    if (!result?.canceled) {
      //setImage(result.assets[0].uri);
    }

    }

  return (
      <View className={`${Platform.OS === "android" && "mt-10"} px-5 bg-white flex-1 `}>
        <View className="flex-[0.3]">
        <Image
        className="w-32 h-32 m-auto"
        source={require("./../assets/lock.png")}
        resizeMode="contain"
        />
        </View>
       
       <View className="flex-[0.7] justify-center">
       <View className="my-10">
            <TextInput className="border my-2 border-gray-50 shadow-sm p-2 rounded-md " placeholder='enter firstname'/>
            <TextInput  className="border my-2 border-gray-50 shadow-sm p-2 rounded-md " placeholder='enter lastname'/>
            <TextInput  keyboardType='email-address' className="border my-2 border-gray-50 shadow-sm p-2 rounded-md " placeholder='enter email'/>
            <TextInput  secureTextEntry={true} className="border my-2 border-gray-50 shadow-sm p-2 rounded-md " placeholder='enter password'/>
            <TextInput className="border my-2 border-gray-50 shadow-sm p-2 rounded-md " placeholder='enter phone'/>
        </View>
        
        <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => pickImage()}>
            <Entypo name="camera" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("bottomNav")} className="my-2 bg-[#02211f] p-3 rounded-md">
            <Text className="text-center text-white">Register</Text>
        </TouchableOpacity>
        </View>
       </View>


      </View>

  )
}

export default Signup