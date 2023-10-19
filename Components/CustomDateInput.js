import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {Controller} from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const CustomDate = ({control, name, rules = {}, placeholder}) => {

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

    return (
        // <Controller 
        //     control = {control}
        //     name = {name}
        //     rules = {rules}
        //     render = {({field: {value, onChange, onBlur}, fieldState:{error}}) => (
        //         <>
        //         <View style={styles.container}>
        //         <View style= {[styles.inputContainer, {borderColor: error ? 'red' : '#41C2C5'}]}>
        //                 <TextInput
        //                 style={[styles.inputField, {}]}
        //                 value = {value}
        //                 onChangeText = {onChange} 
        //                 placeholder = {placeholder}
        //                 onBlur = {onBlur}
        //                 secureTextEntry = {passwordVisibility}
        //                 />
        //             <Pressable onPress={handlePasswordVisibility}>
        //          <MaterialCommunityIcons name={rightIcon} size={25} color="#33BBC5" paddingLeft= {'8%'}/>
        //             </Pressable>
        //             </View>
        //         </View>
        //             {error && (
        //                 <Text style = {{color: 'red',
        //                 alignSelf: 'stretch',
        //                 paddingHorizontal: 50}}>{error.message || 'Error'}</Text>
        //             )}
        //         </>
        //     )}
        // />
        <CustomDate
       className="awesome"
       style={{ border: "1px solid red" }}
       htmlFor="name"
      type="date" 
      id="name"
      />
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 8,
      },
    inputContainer: {
      backgroundColor: '#f5f5f5',
      width: '86.4%',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#33BBC5',
      },
    inputField: {
        padding: 10,
        fontSize: 15,
        width: '79%',
        color: '#000000'
      }
})

export default CustomDate;