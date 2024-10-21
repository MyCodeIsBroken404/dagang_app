import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Txt from "../Components/Txt";

const AuthOptions = ({  }) => {
    return (
        <View style={Styles.container}>
            <Img src={require('../assets/images/Group4.png')} margin={12} />
            <Button color={'#E8505B'} textColor={'#DDD'} text={'Login' } margin={2} goTo="Login" />
            <Button color={'#ddd'} textColor={'#444'} text={'Register'} margin={2} goTo="Register" />
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

export default AuthOptions;