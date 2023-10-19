import React, {useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import List from '../Components/List'

const HomeScreen = () => {

    const navigation = useNavigation();

  const [medicaments, setMedicaments] = useState();

    async function medicamentsList ()  {
        const response = await fetch('http://165.227.82.136:8000/medicament/1');
        const data = await response.json();
        setMedicaments(data)
      }

      async function MeetingsList ()  {
        const response = await fetch('http://165.227.82.136:8000/appointments');
        const data = await response.json();
        setMedicaments(data)
      } 

      useEffect(() => {
        medicamentsList(); 
    }, [])

    return(
        <View style={styles.root}>

          <Text style={styles.title}>Próximo medicamento</Text>
      <View style={styles.target}>
        <Text style={styles.TitleTarget}>Loperamide</Text>
        <Text style={[styles.hourTarget]}>12:30</Text>
      </View>

      <Text style={styles.title}>Próxima cita</Text>
      <View style={styles.target}>
        <Text style={styles.TitleTarget}>Dr. Maradiaga</Text>
        <Text style={[styles.hourTargetDate]}>Mañana, 15:30</Text>

      </View>
      
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#614bc3',
        fontWeight: 'bold',
        paddingTop: 80,
        textAlign: 'center',
        paddingBottom: 20
    },
    target:{
      BackgroundColor: '#f5f5f5',
      width: '86.4%',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#33BBC5',
      padding: 15,
      paddingTop:10
    },
    TitleTarget: {
      fontSize: 20,
        color: '#614bc3',
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center'
    },
    hourTarget: {
      fontSize: 18,
        color: '#33BBC5',
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center',
        paddingLeft: 140
    },
    hourTargetDate: {
      fontSize: 18,
        color: '#33BBC5',
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center',
        paddingLeft: 60
    }
})

export default HomeScreen;  