import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as vh } from "react-native-responsive-screen";

interface FavItemProps {
    text: string;
    src: any;
    tipe: string,
    goTo?: string,
}

const PermintaanItem: FC<FavItemProps> = ({ text, tipe , src, goTo }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            // @ts-ignore
            goTo ? navigation.navigate(goTo) : navigation.navigate('Permintaan');
        }}>
            <Image source={src} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{text}</Text>
                <Text style={styles.tipe}>
                    {tipe}
                </Text>
            </View>
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

export default PermintaanItem;