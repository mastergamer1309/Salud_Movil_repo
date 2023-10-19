import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import CustomButton from '../Components/CustomButton'
import CustomInput from '../Components/CustomInput'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import List from '../Components/List'

const AddDrugs = () => {

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [medicaments, setMedicaments] = useState();

  async function medicamentsList ()  {
    const response = await fetch('http://165.227.82.136:8000/all-medicaments');
    const data = await response.json();
    setMedicaments(data)
  }

  useEffect(() => {
      medicamentsList(); 
  }, [])

  OnAddPressed = ()=> {
    navigation.navigate('HomeScreen')
    }

  OnExitPressed = () => {
    navigation.navigate('HomeScreen')
  }
  return (
    <View style={styles.container}>

      <SafeAreaView style={styles.container}>
      <FlatList 
      data={medicaments}
      keyExtractor={(medicaments) => medicaments.id_medicament}
      renderItem={({ item }) => <List {...item} />}
      ListHeaderComponent={() => <Text style={styles.title}>Medicamentos disponibles</Text>}
      contentContainerStyle={styles.contentContainerStyle}
      />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 25,
        color: '#614bc3',
        fontWeight: 'bold',
        paddingTop: 80,
        textAlign: 'center'
    },
    contentContainerStyle: {
      padding: 15,
    }
})
export default AddDrugs