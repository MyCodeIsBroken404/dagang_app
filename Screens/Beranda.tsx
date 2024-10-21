import { View, StyleSheet } from "react-native";
import Promosi from "../Components/Promosi";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Input from "../Components/Input";
import BerandaMap from "../Components/BerandaMap";
import Nav from "../Components/Nav";

const Beranda = () => {
    return (
        <View style={Styles.container}>
            <BerandaMap />
            <Nav chosen={1} penjual={false} />
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

export default Beranda;