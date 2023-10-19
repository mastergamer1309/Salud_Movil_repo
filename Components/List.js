import {View, Text, StyleSheet} from 'react-native'
import CustomButton from './CustomButton'
import CustomInput from './CustomInput';
import { useNavigation } from '@react-navigation/native'

export default function List ({
    id,
    name,
    shared_with_id,
    completed,
    // clear,
    // toggle
}) {


    const navigation = useNavigation();
    const OnAddrememberpressed =(name)=> {
        navigation.navigate('Addremember')
    }
 return (
    <View style={styles.container}>
        <CustomButton text = {name} onPress={OnAddrememberpressed} type='SECONDARY'/>
    </View>
 )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#33BBC5',
        fontWeight: 'bold',
        paddingTop: 80,
        textAlign: 'center'
    },
})
