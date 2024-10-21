import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Txt from "../Components/Txt";
import { useNavigation } from "@react-navigation/native";

const Success = () => {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <Img src={require('../assets/images/Group6.png')} margin={10} />
            <Txt text={"Yuhuu Pendaftaran Berhasil!"} fontSize={3} fontWeight={'600'} color="#000" margin={10} />
            <Button color={'#E8505B'} textColor={'#DDD'} text={'Lanjutkan'} goTo="Permintaan" />
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

export default Success;