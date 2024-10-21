import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Input from "../Components/Input";
import Anchor from "../Components/Anchor";

const Login = ({  }) => {
    return (
        <View style={Styles.container}>
            <Img src={require('../assets/images/Group5.png')} margin={12} />
            <Input placeHolder="Email" />
            <Input hidden={true} placeHolder="Password" />
            <Anchor align="right" textColor="blue" text="Lupa Kata Sandi" goTo="Welcome"/>
            <Button color={'#E8505B'} textColor={'#DDD'} text={'Masuk' } margin={2} goTo="Beranda" />
            <Anchor align="center" textColor="#666" text="Belum punya akun?" goTo="Register"/>
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

export default Login;