import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useForm, Controller } from 'react-hook-form'   
import CustomDate from '../Components/CustomDateInput';

import List from '../Components/List';



const Addremember = () => {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
      defaultValues: {
        text: 'Ritonavir'
      }
    })

    const navigation = useNavigation();

      const OnAddPressed =(requestBody) => {
        fetch('http://165.227.82.136:8000/user/reminder-medicament/1/1', {
        method: 'POST',
        cors: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
              text: requestBody.place,
              date_: requestBody.date_,
              time_: requestBody.password,
            }
        })
        })
        .then(response => {
          console.log(JSON.stringify(response))
          response.json()
      })
      .then(data => {
          console.log('Obteniendo Data')
          console.log(data)
      })
      .catch(error => {
          console.log('Error')
          console.error(error)
      })
      console.log(requestBody)

      navigation.navigate('HomeScreen')
      }

  return (
        <View style={styles.container}>
      <Text style={styles.title}>Especificación de Recordatorio</Text>
      
              <CustomInput
                name='text'
                placeholder='Medicamento seleccionado'
                control={control}
                rules={{required:"Este campo es obligatorio si desea agregar recordatorio.",
                pattern: {
                value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/,
                message: 'No se pueden incluir simbolos ni espacios'}}}
              />
    
        <CustomInput
          name='date_'
          placeholder='DD/MM/YYYY'
          control={control}
          rules={{required:"Este campo es obligatorio si desea agregar recordatorio.",
          pattern: {
            value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
            message: 'Formato de fecha no válido (dd/mm/yyyy)',}}}
        />

        <CustomInput
          name='time_'
          placeholder='Hora'
          control={control}
          rules={{required:"Este campo es obligatorio si desea agregar recordatorio.", 
          pattern: {
            value: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
            message: 'Formato de hora no válido (HH:mm)',}}}
        />

        <CustomButton text='Agregar' onPress={handleSubmit(OnAddPressed)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#614bc3',
        fontWeight: 'bold',
        paddingTop: 80,
        textAlign: 'center'
    },
})


export default Addremember