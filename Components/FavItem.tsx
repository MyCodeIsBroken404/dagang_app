import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as vh } from "react-native-responsive-screen";

interface FavItemProps {
    text: string;
    src: any;
    isOn: boolean;
    tipe: string,
    goTo?: string,
}

const FavItem: FC<FavItemProps> = ({ text, tipe , src, isOn, goTo }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            // @ts-ignore
            goTo ? navigation.navigate(goTo) : navigation.navigate('Favorite');
        }}>
            <Image source={src} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{text}</Text>
                <Text style={styles.tipe}>
                    {tipe}
                </Text>
            </View>
            <Image source={isOn ? require('../assets/images/image 2.png') : require('../assets/images/image 1.png')} style={styles.image} />
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
        width: '10%',
        height: '100%',
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        height: '100%',
        width: '80%',
        flexDirection: "column",
    },
    title: {
        fontSize: vh(1.75),
        fontWeight: "600",
    },
    tipe: {
        fontSize: vh(1.5),
        color: '#1cff33'
    },
});

export default FavItem;