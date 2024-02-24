import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Platform } from 'react-native'
import { FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { FlatList } from 'react-native-gesture-handler';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

const Airtime = () => {

    const navigate = useNavigation()


    const [airtime, setAirtime] = useState([])

    const getBiller = async () => {
        try {

            await axios?.get("https://api.flutterwave.com/v3/bill-categories?airtime=1", {
                headers: {
                    Authorization: "Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X"
                }
            })
                .then((res) => {

                    let unique = [
                        ...new Map(res?.data?.data.map((item) => [item['biller_code'], item])).values()
                    ]


                    setAirtime(unique)
                })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBiller()

        return () => {
            getBiller()
        }

    }, [])

    const phoneInput = useRef()
    const [value, setValue] = useState("8129828623")
    const [selected, setSelected] = useState(null)
    const [formattedValue, setFormattedValue] = useState("+2348090000200");
    const check = phoneInput.current?.isValidNumber(formattedValue);



    useEffect(() => {

        let lookup = `http://apilayer.net/api/validate?access_key=05449a90a9ccc9ef6505da30fd647490&number=${formattedValue}`
        axios.get(lookup)
            .then((res) => {
                setSelected({ country: res.data.country_code, carrier: res.data.carrier })
            })
            .catch((error) => console.log(error.message))

    }, [])


    const datachunks = [
        {id: 1, price: 50},
        {id: 2, price: 100},
        {id: 3, price: 200},
        {id: 4, price: 500},
        {id: 5, price: 1000},
        {id: 6, price: 2000},
    ]


    return (
        <View className={`${Platform.OS === "android" && "mt-10"} flex-1 bg-white`}>
            <View className="flex-row justify-between  items-center p-3 px-6">
                <TouchableOpacity className="" onPress={() => navigate.goBack()}>
                    <AntDesign name="caretleft" size={18} color="black" />
                </TouchableOpacity>
                <Text className="text-md">Airtime</Text>
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

                <View className="bg-gray-100 items-center justify-center h-14 w-14 rounded-full p-3"><FontAwesome5 name="user" size={16} color="#0a0" /></View>
            </View>

            <Text className="m-4 ">Select Network Provider</Text>

            <View className="m-2">
                <FlatList
                    contentContainerStyle={{

                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={airtime}
                    renderItem={({ item }) => {

                        if (item?.name == "MTN NIGERIA") {

                            return <TouchableOpacity onPress={() => navigate.navigate("airtime-each", { id: item.biller_code })} className={`mx-4 ${selected?.country == "NG" && selected?.carrier.split(" ")[0] == "MTN" && "border-[1px] border-gray-200 p-1 px-3 rounded-sm"}`} key={item?.id}>
                                {selected?.country == "NG" && selected?.carrier.split(" ")[0] == "MTN" &&
                                    <View className="flex-row justify-end">
                                        <MaterialIcons name="check-circle-outline" size={12} color="#0a0" />
                                    </View>
                                }
                                <Image className={"w-10 h-10"} source={require("./../assets/mtn.png")} resizeMode="contain" />
                            </TouchableOpacity>
                        }
                        else if (item?.name == "AIRTEL NIGERIA") {

                            return <TouchableOpacity className={`mx-4 ${selected?.country == "NG" && selected?.carrier.split(" ")[0] == "Airtel" && "border-[1px] border-gray-200 p-1 px-3 rounded-sm"}`} key={item?.id}>
                                {selected?.country == "NG" && selected?.carrier.split(" ")[0] == "Airtel" &&

                                    <View className="flex-row justify-end">
                                        <MaterialIcons name="check-circle-outline" size={12} color="#0a0" />
                                    </View>

                                }
                                <Image className={"w-10  h-10"} source={require("./../assets/airtel.png")} resizeMode="contain" />
                            </TouchableOpacity>
                        }
                        else if (item?.name == "9MOBILE NIGERIA") {

                            return <TouchableOpacity className={`mx-4 ${selected?.country == "NG" && selected?.carrier.split(" ")[0] == "Emerging" && "border-[1px] border-gray-200 p-1 px-3 rounded-sm"}`} key={item?.id}>

                                {selected?.country == "NG" && selected?.carrier.split(" ")[0] == "Emerging" &&

                                    <View className="flex-row justify-end">
                                        <MaterialIcons name="check-circle-outline" size={12} color="#0a0" />
                                    </View>

                                }

                                <Image className={"w-10  h-10"} source={require("./../assets/9mobile.png")} resizeMode="contain" />

                            </TouchableOpacity>
                        }
                        else if (item?.name == "GLO NIGERIA") {

                            return <TouchableOpacity className={`mx-4 ${selected?.country == "NG" && selected?.carrier.split(" ")[0] == "Globacom" && "border-[1px] border-gray-200 p-1 px-3 rounded-sm"}`} key={item?.id}>

                                {selected?.country == "NG" && selected?.carrier.split(" ")[0] == "Globacom" &&

                                    <View className="flex-row justify-end">
                                        <MaterialIcons name="check-circle-outline" size={12} color="#0a0" />
                                    </View>

                                }

                                <Image className={"w-10  h-10"} source={require("./../assets/glo.png")} resizeMode="contain" />

                            </TouchableOpacity>
                        }
                        else if (item?.name == "TIGO" && item?.country === "GH") {

                            return <TouchableOpacity className="mx-4" key={item?.id}>
                                <Text>TIGO GH</Text>
                            </TouchableOpacity>
                        }
                        else if (item?.name == "AIRTEL" && item?.country === "KE") {

                            return <TouchableOpacity className="mx-4" key={item?.id}>
                                <Text>AIRTEL KENYA</Text>
                            </TouchableOpacity>
                        }
                        else if (item?.name == "AIRTEL ZM" && item?.country === "ZM") {

                            return <TouchableOpacity className="mx-4" key={item?.id}>
                                <Text>AIRTEL ZAMBIA</Text>
                            </TouchableOpacity>
                        }
                        else if (item?.name == "MTN ZM" && item?.country === "ZM") {

                            return <TouchableOpacity className="mx-4" key={item?.id}>
                                <Text>MTN ZAMBIA</Text>
                            </TouchableOpacity>
                        }
                        else if (item?.name == "VODAFONE ZM" && item?.country === "ZM") {

                            return <TouchableOpacity className="mx-4" key={item?.id}>
                                <Text>VODAFONE ZAMBIA</Text>
                            </TouchableOpacity>
                        }
                    }}
                />
            </View>

            <View className=" w-[90%] border border-gray-100 p-3 rounded-md m-auto mt-4">
                <Text>Top Up</Text>

                <View className="w-full mt-3">
                    <FlatList
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10
                    }}
                    data={datachunks}
                    numColumns={3}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>(
                        <View className="bg-gray-200 mx-1 w-[30%] rounded-md p-4">
                            <View className="flex-row items-end">
                                <Text className="text-[10px] font-bold ">N</Text>
                                <Text className="text-[18px] font-bold ">{item.price}</Text>
                            </View>
                        </View>
                    )}
                    />
                </View>

                <View className="flex-row mt-4 justify-between items-center ">
                    <View className="border border-gray-100 rounded-md h-8 w-8 justify-center items-center">
                    <Text className="font-bold ">N</Text>
                    </View>
                    <TextInput />
                    <TouchableOpacity className="bg-green-300 items-center justify-center p-4 rounded-lg">
                        <Text className="text-white">Pay</Text>
                    </TouchableOpacity>
                </View>


            </View>

            

        </View>
    )
}

export default Airtime