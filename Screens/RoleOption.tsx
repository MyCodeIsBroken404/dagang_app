import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Txt from "../Components/Txt";
import Drop from "../Components/Drop";

const RoleOption = () => {
    return (
        <View style={Styles.container}>
            <Img src={require('../assets/images/Group1.png')} margin={10} />
            <Drop />
            <Button color={'#E8505B'} textColor={'#DDD'} text={'Lanjutkan'} goTo="Success" />
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

export default RoleOption;