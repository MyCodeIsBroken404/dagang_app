import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Txt from "../Components/Txt";
import Input from "../Components/Input";
import Anchor from "../Components/Anchor";

const ProfilPenjual = ({  }) => {
    return (
        <View style={Styles.container}>
            <Txt text="Profil Penjual" align={'right'} color="#000" fontSize={2} fontWeight={'600'} margin={4} />
            <Input placeHolder="Email" />
            <Input placeHolder="Name" />
            <Input hidden={true} placeHolder="Password" />
            <Input hidden={true} placeHolder="Repeat Password" />
            <Input placeHolder="Phone Number" />
            <Button color={'#E8505B'} textColor={'#DDD'} text={'Daftar' } margin={2} goTo="RoleOption" />
            <Anchor align="center" textColor="#666" text="Sudah punya akun?" goTo="Login"/>
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

export default ProfilPenjual;