import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import Img from "../Components/Img";
import Nav from "../Components/Nav";
import Txt from "../Components/Txt";
import FavItem from "../Components/FavItem";

const Favorite = () => {
    return (
        <View style={Styles.container}>
            <View style={Styles.content}>
            <Txt text="Favorite" fontSize={3} fontWeight={'600'} color="#000" align={'left'} margin={5} />
            <FavItem src={require('../assets/images/fav1.png')} text="Cilok Mang Ujang" tipe='Makanan' isOn={true} goTo="DetailDagangan" />
            <FavItem src={require('../assets/images/fav2.png')} text="Bakso Jos" tipe='Makanan' isOn={true} />
            <FavItem src={require('../assets/images/fav3.png')} text="Es Dawet Ayu" tipe='Minuman' isOn={false} />
            <FavItem src={require('../assets/images/fav4.png')} text="Es Campur" tipe='Minuman' isOn={true} />
            <FavItem src={require('../assets/images/fav5.png')} text="Cilor Wati" tipe='Makanan' isOn={false} />
            </View>
            <Nav chosen={2} />
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

export default Favorite;
