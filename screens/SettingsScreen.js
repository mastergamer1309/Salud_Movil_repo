import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../Components/CustomButton'   


const SettingsScreen = () => {

    const navigation = useNavigation();

    const OnSignInPressed = () => { 
        navigation.navigate('SignIn')
    }

    //boton
    return( 
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.signIn}>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
           >Perfil</Text>
            
           <CustomButton text='Cerrar Sesión' onPress={OnSignInPressed} type={"SECONDARY"}/>
        </View>
        </ScrollView>
    );
    }

    const styles = StyleSheet.create({
        signIn: {
            alignItems: 'center'
        }
    })

export default SettingsScreen;  