import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
const AddDrugs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recordatorios</Text>
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