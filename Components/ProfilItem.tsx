import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as vh } from "react-native-responsive-screen";

interface FavItemProps {
    text: string;
    color: string,
    goTo?: string,
}

const ProfilItem: FC<FavItemProps> = ({ text, goTo = 'Profil1', color }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            // @ts-ignore
            goTo ? navigation.navigate(goTo) : navigation.navigate('Welcome');
        }}>
            <View style={styles.textContainer}>
                <Text style={[styles.title, {color: color}]}>{text}</Text>
            </View>
            <Image source={text === 'Log Out' ? require('../assets/images/logout.png') : require('../assets/images/continue.png')} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
    },
    image: {
        height: '100%',
        marginRight: 10,
    },
    textContainer: {
        height: '100%',
        width: '100%',
        flexDirection: "column",
    },
    title: {
        fontSize: vh(1.75),
        fontWeight: "600",
    },
});

export default ProfilItem;