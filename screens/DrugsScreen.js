import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native';

const DrugsScreen = () => {

  const navigation = useNavigation();


    const OnAddDrugPressed = () => {
      navigation.navigate('AddDrugs')
    }

    return(     
        <View style={styles.root}>
            <Text style={styles.title}>
                Medicamentos pendientes
            </Text>
            
            <CustomButton text="Añadir recordatorios" onPress={OnAddDrugPressed} />
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

export default DrugsScreen;  