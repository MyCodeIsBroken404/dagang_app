import { View, StyleSheet, TouchableOpacity } from "react-native";
import Txt from "../Components/Txt";
import FavHeader from "../Components/FavHeader";
import { Svg, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import DagangItem from "../Components/DagangItem";

const DetailDagangan = () => {
    const navigation = useNavigation();
    return (
        <View style={Styles.container}>
            <View style={Styles.content}>
            <View style={Styles.titleContainer}>
                <TouchableOpacity style={Styles.back} onPress={() => {
                    // @ts-ignore
                    navigation.navigate('Favorite');
                }}>
                <Svg  width="50" height="40" fill="#000" viewBox="0 0 16 16">
                <Path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </Svg>
                </TouchableOpacity>
                <Txt text="Detail Dagangan" fontSize={3} fontWeight={'600'} color="#000" align={'left'} />
            </View>
            <FavHeader src={require('../assets/images/fav1.png')} text="Cilok Mang Ujang" tipe="Makanan" isOn={true} open="Buka Setiap" desc='Nikmati kelezatan cilok kami yang lezat dan kenyal! Cilok, camilan khas Bandung ini terbuat dari campuran tepung tapioka berkualitas yang dipadukan dengan bumbu spesial, menghasilkan bola-bola kenyal yang menggugah selera.'/>
            <DagangItem text='Cilok Normal' src={require('../assets/images/cmu1.png')} price="Rp 5.000" />
            <DagangItem text='Cilok Sosis' src={require('../assets/images/cmu2.png')} price="Rp 12.000" />
            <DagangItem text='Cilok Kriuk' src={require('../assets/images/cmu3.png')} price="Rp 7.000" />
            <DagangItem text='Cilok Kuah' src={require('../assets/images/cmu4.png')} price="Rp 10.000" />
            <DagangItem text='Cilok Tahu' src={require('../assets/images/cmu5.png')} price="Rp 10.000" />
            <DagangItem text='Cilok Bojot Viral' src={require('../assets/images/cmu6.png')} price="Rp 10.000" />
            </View>
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
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%'
    },
    back: {
        margin: 0,
        width: '15%',
        height: '10%'
    }
});

export default DetailDagangan