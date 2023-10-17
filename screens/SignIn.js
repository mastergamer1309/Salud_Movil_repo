import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  TextInput
} from 'react-native'
import logo from '../assets/logoSM.png'
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import CustomPassword from '../Components/CustomPassword';
import { useTogglePasswordVisibility } from '../Components/show_Hide_password';


const SignIn = () => {

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const OnSignInPressed = (requestBody) => {
    // fetch('http://165.227.82.136:8000/users/login', {
    //     method: 'POST',
    //     cors: 'cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         data_user: {
    //         email: requestBody.email,
    //         password: requestBody.password
    //         }
    //     })
    //     })
    //     .then(response => {
    //       console.log(JSON.stringify(response))
    //       response.json()
    //   })
    //   .then(data => {
    //       console.log('Obteniendo Data')
    //       console.log(data)
    //   })
    //   .catch(error => {
    //       console.log('Error')
    //       console.error(error)
    //   })
    //   console.log(requestBody)


    fetch('http://165.227.82.136:8000/users/login', {
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

    navigation.navigate('HomeScreen')
  }

  const OnSignUpPressed = () => {
    navigation.navigate('SignUp')
  }

  const OnForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  const { height } = useWindowDimensions()
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  console.log(errors)


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.root]}>
        <Image
          source={logo}
          style={[styles.logo, { height: height * 0.35 }]}
          resizeMode='contain'
        />

        <Text style={styles.is}>Inicio de Sesión</Text>

        <CustomInput
          name='email'
          placeholder='Correo Electronico'
          control={control}
          rules={{
            required: 'El Correo Electronico es requerido',
            pattern: {
              value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              message: 'El correo es invalido'
            }
          }}
        />

<CustomPassword
        name='password'
        placeholder="Constraseña" 
        secureTextEntry={passwordVisibility}
        control={control}
        rules ={{required: "Este campo es obligatorio.", minLength: {
            value: 8,
            message: 'La contraseña debe de tener minimamente 8 caracteres'
            },
            validate: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                    pattern.test(value)
                  ) || "Debe de incluir al menos una letra mayuscula, una minuscula, un numero y un caracter especial."
                );
            }
        }}
        />

        <CustomButton
          text='Olvidaste tu contraseña?'
          onPress={OnForgotPasswordPressed}
          type={'TERTIARY'}
        />

        <CustomButton
          text='INICIAR SESIÓN'
          onPress={handleSubmit(OnSignInPressed)}
        />

        <CustomButton
          text={`¿Aún no tienes cuenta? Crea una`}
          onPress={OnSignUpPressed}
          type={'TERTIARY'}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  is: {
    fontSize: 25,
    color: '#614bc3',
    fontWeight: 'bold',
    padding: 30,
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

export default SignIn