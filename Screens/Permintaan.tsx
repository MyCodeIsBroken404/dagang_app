import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Nav from "../Components/Nav";
import Txt from "../Components/Txt";
import PermintaanItem from "../Components/PermintaanItem";

const Permintaan = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.content}>
            <Txt text="Permintaan" fontSize={3} fontWeight={'600'} color="#000" align={'left'} margin={5} />
            <PermintaanItem src={require('../assets/images/pm1.png')} text="Supratman" tipe="..." />
            <PermintaanItem src={require('../assets/images/pm2.png')} text="NIngsih Suloyo" tipe="..." />
            <PermintaanItem src={require('../assets/images/pm3.png')} text="Brian Halim" tipe="..." />
            <PermintaanItem src={require('../assets/images/pm4.png')} text="Es Capcin" tipe="..." />
            </View>
            <Nav chosen={2} penjual={true} />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    content: {
        width: '90%',
        height: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
});

export default Permintaan;