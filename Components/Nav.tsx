import React, { FC, useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from "react-native-responsive-screen";
import { Svg, Path } from "react-native-svg";
import Txt from "../Components/Txt";
import { useNavigation } from "@react-navigation/native";

interface NavProps {
    chosen: number;
    penjual?: boolean,
}

const Nav: FC<NavProps> = ({ chosen, penjual = false }) => {
    const [tab, setTab] = useState(chosen);
    const navigation = useNavigation();
    useEffect(() => {
        setTab(chosen);
    }, [chosen]);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: vw(100),
            height: vh(10)
        }
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                // @ts-ignore
                navigation.navigate(penjual ? 'Beranda2' : 'Beranda');
            }}>
                <Svg width={vw(30)} height={vh(6)} fill={tab === 1 ? "#444" : "#555"} viewBox="0 0 16 16">
                    <Path d={tab === 1 ? "M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" : "M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"} />
                </Svg>
                <Txt color={tab === 1 ? "#444" : "#555"} text="Beranda" fontSize={2} fontWeight="500" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // @ts-ignore
                navigation.navigate(penjual ? 'Permintaan' : 'Favorite');
            }}>
                <Svg width={vw(30)} height={vh(6)} fill={tab === 2 ? "#444" : "#555"} viewBox="0 0 16 16">
                    {penjual ? <Path d={chosen === 2 ? "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" : "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"} /> : <Path d={tab === 2 ? "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" : "M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"}/>}
                </Svg>
                <Txt color={tab === 2 ? "#444" : "#555"} text={penjual ? "Permintaan" : "Favorite"} fontSize={2} fontWeight="500" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                // @ts-ignore
                navigation.navigate(penjual ? 'Profil2' : 'Profil1');
            }}>
                <Svg width={vw(30)} height={vh(6)} fill={tab === 3 ? "#444" : "#555"} viewBox="0 0 16 16">
                    <Path d={tab === 3 ? "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" : "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"} />
                </Svg>
                <Txt color={tab === 3 ? "#444" : "#555"} text="Akun" fontSize={2} fontWeight="500" />
            </TouchableOpacity>
        </View>
    );
};

export default Nav;
