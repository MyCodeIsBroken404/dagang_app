import { View, StyleSheet } from "react-native";
import Promosi from "../Components/Promosi";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Input from "../Components/Input";
import BerandaMap2 from "../Components/BerandaMap2";
import Nav from "../Components/Nav";
import { useState } from "react";

const Beranda2 = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [text, setText] = useState('');
    return (
        <View style={Styles.container}>
            <BerandaMap2 text={text} setText={setText} modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <Promosi text={text} setText={setText} modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <Nav chosen={1} penjual={true} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default Beranda2;