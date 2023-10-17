import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form'


const AddMeetings = () => {

    const {
        control,
        handleSubmit,
        formState: { errors }
      } = useForm()

    const navigation = useNavigation();
    OnAddPressed = ()=> {
        fetch('http://165.227.82.136:8000/users/appointment/1', {
        method: 'POST',
        cors: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
            email: requestBody.email,
            password: requestBody.password
            }
        })
        })
        .then(response => {
            response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        console.log(requestBody)
    }

    OnExitPressed = ()=> {
    }
    
    return (
        <View style={styles.root}>
      <Text style={styles.title}>Información de Cita</Text>
    
        <CustomInput
          name='date_'
          placeholder='Fecha'
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
          rules={{required:"Este campo es obligatorio si desea aagregar citas."}}
        />


      <CustomButton text={'Agregar'} onPress={OnAddPressed}/>
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