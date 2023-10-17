import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native';


const MeetingsScreen = () => {
    const navigation = useNavigation();
    const OnAddMeetingsPressed = () => {
        navigation.navigate('AddMeetings')
    }


    return(     
        <View style={styles.root}>
            <Text style={styles.title}>Citas Pendientes</Text>
            <CustomButton text={'Agregar citas'} onPress={OnAddMeetingsPressed}/>

            
        </View>

    );
    }
    
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#614bc3',
        fontWeight: 'bold',
        paddingTop: 80,
        textAlign: 'center'
    },
    root: {
        alignItems: 'center'
    },
    logo: {
        width: '85%',
        maxWidth: 500,
        maxHeight: 400
    },
    link: {
        color: '#41C2C5'
    }
    })

export default MeetingsScreen;  