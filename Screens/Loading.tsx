import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Img from "../Components/Img";

const Loading = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            // @ts-ignore
            navigation.navigate('Welcome');
        }, 3000);
    },[]);
    return (
        <View style={Styles.container}>
            <Img src={require('../assets/images/Group1.png')} margin={2} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: '700',
        color: 'black',
        fontFamily: 'Jua-Regular',
        fontSize: vh(5),
        textAlign: 'right'
    }
});

export default Loading;