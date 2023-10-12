import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

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
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="DrugScreen" component={DrugsScreen}/>
            <Tab.Screen name="MeetingScreen" component={MeetingsScreen}/>
            <Tab.Screen name="MapScreen" component={MapScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen} />
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