import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {

    const navigation = useNavigation();

    return(
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"

                }}
           >Home Screen </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Stack")}
                style={{
                    backgroundColor: "#614BC3",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alingSelf: "center",
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >Go to Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;  