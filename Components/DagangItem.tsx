import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as vh } from "react-native-responsive-screen";

interface FavItemProps {
    text: string;
    src: any;
    price: string,
}

const DagangItem: FC<FavItemProps> = ({ text, price, src }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={src} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{text}</Text>
                <Text style={styles.price}>
                    {price}
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
        width: '14%',
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
        marginVertical: '1%',
        fontSize: vh(1.75),
        fontWeight: "600",
    },
    price: {
        marginVertical: '1%',
        fontSize: vh(1.5),
        color: '#000',
        fontWeight: '400'
    },
});

export default DagangItem;