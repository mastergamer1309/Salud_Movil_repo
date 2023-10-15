import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {Controller} from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../Components/show_Hide_password';


const CustomPassword = ({control, name, rules = {}, placeholder}) => {

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

    return (
        <Controller 
            control = {control}
            name = {name}
            rules = {rules}
            render = {({field: {value, onChange, onBlur}, fieldState:{error}}) => (
                <>
                <View style={styles.inputContainer}>
                <View style= {[styles.container, {borderColor: error ? 'red' : '#41C2C5'}]}>
                        <TextInput
                        style={[styles.inputField, {}]}
                        value = {value}
                        onChangeText = {onChange} 
                        placeholder = {placeholder}
                        onBlur = {onBlur}
                        secureTextEntry = {passwordVisibility}
                        />
                    <Pressable onPress={handlePasswordVisibility}>
                 <MaterialCommunityIcons name={rightIcon} size={22} color="#33BBC5" />
                    </Pressable>
                    </View>
                </View>
                    {error && (
                        <Text style = {{color: 'red',
                        alignSelf: 'stretch',
                        paddingHorizontal: 50}}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:15,
        paddingVertical: 7,
        width: '100%',

      },
      inputContainer: {
        backgroundColor: '#f5f5f5',
        height: '85%',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        paddingRight: '5%',
      },
      inputField: {
        padding: 14,
        fontSize: 15,
        width: '79%',
        color: '#000000'
      }
})

export default CustomPassword;