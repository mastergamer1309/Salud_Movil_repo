import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../Components/CustomButton'   


const SettingsScreen = () => {

    const navigation = useNavigation();

    const OnSignInPressed = () => { 
        navigation.navigate('SignIn')
    }

    //boton
    return( 
        <View style={styles.signIn}>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
           >Perfil</Text>
{/*            
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
                >Log Out</Text> */}

                <CustomButton text='LogOut' onPress={OnSignInPressed}/>
            {/* </TouchableOpacity> */}
        </View>
    );
    }

    const styles = StyleSheet.create({
        signIn: {
            alignItems: 'center'
        }
    })

export default SettingsScreen;  