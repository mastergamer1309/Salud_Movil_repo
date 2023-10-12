import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
const SettingsScreen = () => {

    const navigation = useNavigation();

    return( 
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"

                }}
           >Configuraciones</Text>
           <TouchableOpacity
                onPress={() => navigation.navigate("Stack")}
                style={{
                    backgroundColor:"#614BC3",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >Perfil</Text>
            </TouchableOpacity>
        </View>
    );
    }

export default SettingsScreen;  