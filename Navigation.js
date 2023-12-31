import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SettingsStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <SettingsStackNavigator.Navigator
            initialRouteName="ConfiguracionesScreen"
        >   
            <SettingsStackNavigator.Screen
                name="User"
                component={SettingsScreen}
            />
            <SettingsStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                    
                }}
            />
        </SettingsStackNavigator.Navigator>
    )
}


//importar pantallas previamente creadas
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import DrugsScreen from "./screens/DrugsScreen";
import MeetingsScreen from "./screens/MeetingsScreen"
import MapScreen from "./screens/MapScreen"
import addDrugs from './screens/AddDrugs'

import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import ForgotPassword from './screens/ForgotPassword'
import NewPassword from './screens/NewPassword'
import AddMeetings from "./screens/AddMeetings";
import Addremember from "./screens/Addremember";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
//crear los componentes
function MyTabs(){
    return(
        //ACA SE PONE LA RUTA INICIAL
        <Tab.Navigator initialRouteName="Home" screenOptions={{
                tabBarActiveTintColor: '#614BC3',
                headerShown: false,
            }}
        >
            <Tab.Screen
             name="Inicio" 
             component={HomeScreen}
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                headerTitleAlign: 'center',
                headerShown: false,
                
             }}
             />
             
            <Tab.Screen
            name="Medicinas" 
            component={DrugsScreen}
            options={{
                tabBarLabel: 'Medicinas',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name="pills" color={color} size={size} />
                ),
                headerTitleAlign: 'center',
                headerShown: false,
            }}
            />

            <Tab.Screen 
            name="Citas" 
            component={MeetingsScreen}
            options={{
                tabBarLabel: 'Citas',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="stethoscope" color={color} size={size} />
                ),
                headerTitleAlign: 'center',
                headerShown: false,
            }}
            />

            <Tab.Screen 
            name="Mapa"
             component={MapScreen}
             options={{
                tabBarLabel: 'Mapa',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="map-pin" color={color} size={size} />
                ),
                headerTitleAlign: 'left',
                headerShown: false,
            }}
             />

            <Tab.Screen 
            name="Configuraciones" 
            component={MyStack}
            options={{
                tabBarLabel: 'Usuario',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="user" color={color} size={size} />
                ),
                headerTitleAlign: 'center',
                headerShown: false,
                
            }}
            />


        {/* <Stack.Screen name='SignIn' component={SignIn} options={{
            tabBarButton: () => null,
        tabBarVisible: false,
        }}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{
        tabBarButton: () => null,
        tabBarVisible: false,
    }} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{
        tabBarButton: () => null,
        tabBarVisible: false,
    }}/>
        <Stack.Screen name='NewPassword' component={NewPassword}options={{
            tabBarButton: () => null,
            tabBarVisible: false,
        }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
        }}/> */}
        </Tab.Navigator>
    );
}

function MyStacks(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='NewPassword' component={NewPassword} />
          <Stack.Screen name='HomeScreen' component={MyTabs} />
          <Stack.Screen name='AddDrugs' component={addDrugs} />
          <Stack.Screen name='AddMeetings' component={AddMeetings} />
          <Stack.Screen name='Addremember' component={Addremember} />


        </Stack.Navigator>
    )
  }
  
//exportar las pantallas
export default function Navigation(){
    return(
        <NavigationContainer>
            <MyStacks/>
            {/* <MyTabs/> */}
        </NavigationContainer>
    );
}