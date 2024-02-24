import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { AntDesign } from '@expo/vector-icons';
import Rewards from '../screens/Rewards';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
    initialRouteName='home' 
    screenOptions={({route}) =>({
        headerShown: false,
        tabBarActiveTintColor: "#e94059",
        tabBarStyle:{paddingTop: "2%", paddingBottom: "2%"},

        tabBarIcon: (({color, size, focused}) =>{
            
            let iconName ;
    
            if(route.name === "main"){
              iconName = "home"

            }else if(route.name === "rewards"){
              iconName = "gift"
            }
            // else if(route.name === "message"){
            // iconName = require("./../assets/3.png")
            // }
            // else if(route.name === "profile"){
             //iconName = require("./../assets/4.png")
            // }
    
           return( <AntDesign name={iconName} size={24} color="black" />)
              
          })
    })}

    
        
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="rewards" component={Rewards} />
    </Tab.Navigator>
  );
}

export default BottomNav