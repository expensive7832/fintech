import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Platform } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { FlatList } from 'react-native-gesture-handler';

const Airtime = ({navigate}) => {

    const [airtime, setAirtime] = useState([])

    const getBiller = async() =>{
        try {
        
           await axios?.get("https://api.flutterwave.com/v3/bill-categories",{
            headers:{
                Authorization : "FLWSECK_TEST-SANDBOXDEMOKEY-X"
            }
           })
           .then((res) => {
           const datas =  res?.data?.data?.filter((dt, i) => dt?.is_airtime === true && dt?.country === "NG" && dt?.short_name?.endsWith("NIGERIA"))
           setAirtime(datas)
        })
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getBiller()

        return() =>{
            getBiller()
        }

    }, [])

    console.log(airtime)
    const phoneInput = useRef()
    const [value, setValue] = useState()
    const [formattedValue, setFormattedValue] = useState("");
    const check = phoneInput.current?.isValidNumber(formattedValue);
    check ? console.log(formattedValue) : console.log("incorrect")

   

  return (
    <View className={`${Platform.OS === "android" && "mt-10"} flex-1 bg-white`}>
    <View className="flex-row justify-between items-center p-3">
        <View onPress={() => navigate.goBack()}><FontAwesome5 name="less-than" size={18} color="black" /></View>
        <Text>Airtime</Text>
        <TouchableOpacity><Text className="text-green-400 font-bold">History</Text></TouchableOpacity>
    </View>

    <Text className="m-5 my-10 font-semibold">Mobile Number</Text>


    <View className="flex-row space-x-3">
        <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="NG"
            layout="first"
            onChangeText={(text) => {
                setValue(text);
            }}
            onChangeFormattedText={(text) => {
                setFormattedValue(text);
            }}
            withDarkTheme
            autoFocus
        />

        <View className="bg-[#02111f] rounded-full p-3"><FontAwesome5 name="user" size={32} color="white" /></View>
    </View>

    <Text className="m-4 ">Select Network Provider</Text>

    <View className="m-2">
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={airtime.splice(0,4)}
        renderItem={({item}) => {
           
           if(item?.name == "MTN NIGERIA"){
                
              return  <TouchableOpacity className="mx-4" key={item?.id}><Image className={"w-16 h-16"} source={require("./../assets/mtn.png")} resizeMode="contain" /></TouchableOpacity>
            }
           else if(item?.name == "AIRTEL NIGERIA"){
                
              return  <TouchableOpacity className="mx-4" key={item?.id}><Image className={"w-16 h-16"} source={require("./../assets/airtel.png")} resizeMode="contain" /></TouchableOpacity>
            }
            else if(item?.name == "9MOBILE NIGERIA"){
                
                return  <TouchableOpacity className="mx-4" key={item?.id}><Image className={"w-16 h-16"} source={require("./../assets/9mobile.png")} resizeMode="contain" /></TouchableOpacity>
              }
           else if(item?.name == "GLO NIGERIA"){
                
              return  <TouchableOpacity className="mx-4" key={item?.id}><Image className={"w-16 h-16"} source={require("./../assets/glo.png")} resizeMode="contain" /></TouchableOpacity>
            }
        }}
        />
    </View>

</View>
  )
}

export default Airtime