import React from 'react';
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Pressable, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../Components/show_Hide_password';
import CustomPassword from '../Components/CustomPassword';

const SignUp = () => {

    const {control, handleSubmit, watch } = useForm();

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

    const pass = watch('password');

    const OnRegisterPressed = (requestBody) => {
        fetch('http://165.227.82.136:8000/users/register', {
        method: 'POST',
        cors: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
            first_name: requestBody.first_name,
            last_name: requestBody.last_name,
            username: requestBody.username,
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

    const OnSignInPressed = () => {
        
        navigation.navigate('SignIn')
    }


    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root]}>

        <Text style={styles.is}>Registro</Text>

        <CustomInput 
         name = 'first_name' 
         placeholder="Primer Nombre"
         control={control}
         rules ={{required: "Este campo es obligatorio.",
        pattern: {
        value: /^[A-Za-z]/,
        message: 'No se pueden incluir simbolos ni espacios'}}}
        />

        <CustomInput 
         name='last_name' 
         placeholder="Primer Apellido"
         control={control}
         rules ={{required: "Este campo es obligatorio.",
         pattern: {
            value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*$/,
            message: 'No se pueden incluir simbolos ni espacios'}}}
        />

        <CustomInput 
         name="username" 
         placeholder="Nombre de Usuario"
         control={control}
        rules ={{required: "Este campo es obligatorio.", minLength:{
            value: 3,
            message: 'El nombre de usuario es muy corto'
        }, maxLength: {
            value: 17,
            message: 'El nombre de usuario es demasiado largo'
        }, pattern: {
            value: /^[a-zA-Z0-9_-]+$/,
            message: 'El nombre de usuario debe de ser coherente.'
        }}}
        />

        <CustomInput 
         name='email' 
         placeholder="Correo Electronico"
         control={control}
        rules ={{required: "Este campo es obligatorio.",
        pattern: {
            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            message: 'Correo Electronico Invalido'}}}
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

        <CustomPassword
        name='repeatPassword'
        placeholder="Repetir constraseña"
        secureTextEntry={passwordVisibility}
        control={control}
        rules ={{validate: value => value === pass || 'Las contraseñas no coinciden'}}
        />


        <CustomButton text="REGISTRARSE" onPress={handleSubmit(OnRegisterPressed)} />

        <CustomButton 
        text="¿Ya tienes cuenta?" 
        onPress={OnSignInPressed} 
        type={"TERTIARY"}/>
        </View>
        </ScrollView> 
    )}

const styles = StyleSheet.create({
    is: {
        fontSize: 25,
        color: '#614bc3',
        fontWeight: "bold",
        padding: 70,
        textAlign: 'center'
    },
    root: {
        alignItems: 'center',
    },
    text: {
        marginVertical: 15,
        marginHorizontal: 53,
        color: '#c8ffe0'
    },
    link: {
        color: '#33BBC5'
    }
    
})



export default SignUp;