import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Airtime from "./screens/Airtime"

import BottomNav from './components/BottomNav';
import { useState } from 'react';

const Stack = createStackNavigator()

export default function App() {
  

  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1 ">

        <Stack.Navigator screenOptions={{
          headerShown: false,
          
        }} 
        initialRouteName="onboard"
        >

          <Stack.Screen name="onboard" component={Landing}/>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="signup" component={Signup}/>
          <Stack.Screen name="airtime" component={Airtime}/>
          <Stack.Screen name="bottomNav" component={BottomNav}/>

        </Stack.Navigator>
       
      </SafeAreaView>
    </NavigationContainer>
  );
}


