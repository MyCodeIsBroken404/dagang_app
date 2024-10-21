import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import PFP from "../Components/PFP";
import Nav from "../Components/Nav";
import Txt from "../Components/Txt";
import ProfilItem from "../Components/ProfilItem";

const Profil2 = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.content}>
            <Txt text="Profil" fontSize={3} fontWeight={'600'} color="#000" align={'left'} margin={5} />
            <PFP text="Cilok Mang Ujang" src={require('../assets/images/cmu-profil.png')} />
            <ProfilItem text="Ubah Peran" color="#000" />
            <ProfilItem text="Atur Profil Penjual" color="#000" goTo="ProfilPenjual" />
            <ProfilItem text="Ganti Password" color="#000" />
            <ProfilItem text="Log Out" color="#E8505B" goTo="Welcome" />
            </View>
            <Nav chosen={3} penjual={true} />
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

export default Profil2;