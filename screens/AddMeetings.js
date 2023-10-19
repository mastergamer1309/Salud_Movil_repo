import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form'
import CustomDateInput from '../Components/CustomDateInput';


const AddMeetings = () => {


    const {
        control,
        handleSubmit,
        formState: { errors }
      } = useForm()

    const navigation = useNavigation();
    OnAddPressed = (requestBody)=> {

      fetch('http://165.227.82.136:8000/users/appointment/1', {
        method: 'POST',
        cors: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
              date_: requestBody.date_,
              time_: requestBody.password,
              place: requestBody.place,
              doctor: requestBody.doctor
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
        // fetch('http://165.227.82.136:8000/users/appointment/1', {
        // method: 'POST',
        // cors: 'cors',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     data: {
        //     date_: requestBody.date_,
        //     time_: requestBody.password,
        //     place: requestBody.place,
        //     doctor: requestBody.doctor
        //     }
        // })
        // })
        // .then(response => {
        //     response.json()
        // })
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(error => {
        //     console.error(error)
        // })
        // console.log(requestBody)
        navigation.navigate('HomeScreen')
    }

    OnExitPressed = ()=> {
    }
    
    return (
        <View style={styles.root}>
      <Text style={styles.title}>Información de Cita</Text>
    
        <CustomInput
          name='date_'
          placeholder='DD/MM/YYYY'
          control={control}
          rules={{required:"Este campo es obligatorio si desea aagregar citas."}}
        />

        <CustomInput
          name='time_'
          placeholder='Hora'
          control={control}
          rules={{required:"Este campo es obligatorio si desea aagregar citas."}}
        />

        <CustomInput
          name='place'
          placeholder='Lugar'
          control={control}
          rules={{required:"Este campo es obligatorio si desea aagregar citas."}}
        />

        <CustomInput
          name='doctor'
          placeholder='Nombre de su doctor'
          control={control}
          rules={{required:"Este campo es obligatorio si desea aagregar citas.",
          pattern: {
          value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/,
          message: 'No se pueden incluir simbolos ni espacios'}}}
        />


      <CustomButton text={'Agregar'} onPress={handleSubmit(OnAddPressed)}/>
      <CustomButton text={'Salir'} onPress={OnExitPressed} type='SECONDARY'/>
    </View>
  )
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
        textAlign: 'center'
    }
})

export default AddMeetings