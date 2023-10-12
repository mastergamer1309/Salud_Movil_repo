import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens           
import HomeScreen from "./josias/screens/HomeScreen";
import SettingsScreen from "./josias/screens/SettingsScreen";
import StackScreen from "./josias/screens/StackScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeStackNavigator =  createNativeStackNavigator();
function MyStack(){
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        
        >
            <HomeStackNavigator.Screen
                name = "homeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator>
            Tab.Screen name="Home" component={HomeScreen} /
            </Tab.Navigator>
    );
}
export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}