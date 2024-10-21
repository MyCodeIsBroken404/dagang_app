import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Txt from "../Components/Txt";
import { useState, useEffect } from "react";

const Welcome = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        },3000);
        return () => clearTimeout(timer);
    },[]);
    if(loading){
        return (
            <View style={Styles.container}>
                <Img src={require('../assets/images/Group1.png')} margin={2} />
            </View>
        )
    }
    return (
        <View style={Styles.container}>
            <Img src={require('../assets/images/Group3.png')} margin={12} />
            <Txt text={"Selamat Datang di Dagang App!"} fontSize={3} fontWeight={'600'} color="#000" />
            <Txt text={"Temukan cara baru untuk belanja dan" + "\n" + "berdagang dengan mudah, Kami disini untuk " + "\n" + " membantu Anda setiap langkah!"} fontSize={2} fontWeight={'400'} color="#444" margin={3} />
            <Button color={'#E8505B'} textColor={'#DDD'} text={'Lanjutkan'} goTo="AuthOptions" />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Welcome;