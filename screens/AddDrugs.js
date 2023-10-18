import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import CustomButton from '../Components/CustomButton'
import CustomInput from '../Components/CustomInput'
import { useForm } from 'react-hook-form'
const AddDrugs = () => {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  OnAddPressed = ()=> {

  }

  OnExitPressed = () => {

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recordatorios</Text>


        <CustomInput
          name='Drug'
          placeholder='Nombre de Medicamento'
          control={control}
          rules={{required:"Este campo es obligatorio si desea agregar medicamentos."}}
        />

      <CustomInput
          name='date_'
          placeholder='Fecha'
          control={control}
          rules={{required:"Este campo es obligatorio si desea agregar medicamentos."}}
        />
        <CustomInput
          name='time'
          placeholder='Hora'
          control={control}
          rules={{required:"Este campo es obligatorio si desea agregar medicamentos."}}
        />


      <CustomButton text={'Agregar'} onPress={OnAddPressed}/>
      <CustomButton text={'Salir'} onPress={OnExitPressed} type='SECONDARY'/>
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
    }
})
export default AddDrugs