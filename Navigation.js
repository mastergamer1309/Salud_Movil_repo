import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SettingsStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <SettingsStackNavigator.Navigator
            initialRouteName="ConfiguracionesScreen"
        >   
            <SettingsStackNavigator.Screen
                name="Configuracion"
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



const Tab = createBottomTabNavigator();
//crear los componentes
function MyTabs(){
    return(
        <Tab.Navigator
            //ACA SE PONE LA RUTA INICIAL
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#614BC3',
            }}
        >
            <Tab.Screen
             name="Home" 
             component={HomeScreen}
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                headerTitleAlign: 'center',
                
                
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
                headerTitleAlign: 'center',
            }}
             />

            <Tab.Screen 
            name="Configuraciones" 
            component={MyStack}
            options={{
                tabBarLabel: 'Configuraciones',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="settings-outline" color={color} size={size} />
                ),
                headerTitleAlign: 'center',
                headerShown: false,
                
            }}
            />

        </Tab.Navigator>

    );
}
//exportar las pantallas
export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
            </NavigationContainer>
    );
}