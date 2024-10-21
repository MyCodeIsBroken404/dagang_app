import { FC } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from "react-native-responsive-screen";

interface FavItemProps {
    text: string,
    src: any,
    desc: string,
    isOn: boolean,
    tipe: string,
    open: string,
}

const FavHeader: FC<FavItemProps> = ({ text, src, desc, isOn, tipe, open }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Image source={src} style={styles.image} />
                <View>
                    <Text style={styles.title}>{text}</Text>
                    <Text style={styles.subtitle}>{tipe}</Text>
                    <Text style={styles.subtitle}>{open}</Text>
                </View>
                <View style={styles.onContainer}>
                <Image source={isOn ? require('../assets/images/image 2.png') : require('../assets/images/image 1.png')}/>
                </View>
            </View>
            <Text style={styles.desc}>{desc}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '5%',
        paddingVertical: '3%',
    },
    onContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%'
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '2%',
    },
    image: {
        width: '25%',
        aspectRatio: 1,
        borderRadius: 50, // A high value to ensure the image remains circular
        marginRight: '5%',
    },
    title: {
        fontSize: vh(2),
        fontWeight: "600",
    },
    subtitle: {
        marginVertical: '3%',
        fontSize: vh(1.6),
        color: '#1cff33'
    },
    desc: {
        fontSize: vh(1.6),
        color: '#444',
    },
});

export default FavHeader;
