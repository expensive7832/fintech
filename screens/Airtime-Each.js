import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Platform } from 'react-native'
import { useLayoutEffect } from 'react'
import axios from 'axios'

const AirtimeEach = ({route}) => {
    
    useLayoutEffect(() =>{
        axios.get("")
    }, [])

  return (
   <SafeAreaView className={`flex-1 justify-center items-center ${Platform.OS === "android" && "mt-3"}`}>
    <Text>hello</Text>
   </SafeAreaView>
  )
}

export default AirtimeEach