import { FC } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { heightPercentageToDP as vh } from "react-native-responsive-screen";

interface FavItemProps {
    text: string;
    src: any;
}

const PFP: FC<FavItemProps> = ({ text, src }) => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={src} 
                style={styles.image} 
                resizeMode="cover"
                imageStyle={styles.imageStyle} // Apply rounded corners directly to the image
            >
                <Text style={styles.textOverlay}>Edit Profile</Text>
            </ImageBackground>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    image: {
        width: 100, // Set fixed dimensions for a circular image
        height: 100,
        borderRadius: 50, // Half of the width and height for a perfect circle
        overflow: 'hidden', // Ensures the image fits within the rounded container
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    imageStyle: {
        borderColor: '#000',
        borderWidth: 1.5,
        borderRadius: 50, // Ensure the image itself also has rounded corners
    },
    textOverlay: {
        textAlign: 'center',
        backgroundColor: '#E0505B',
        width: '100%',
        height: '30%',
        color: 'white',
        paddingTop: '5%',
        fontSize: vh(1.25),
        fontWeight: "600",
    },
    title: {
        marginVertical: '5%',
        fontSize: vh(1.75),
        fontWeight: "600",
    },
});

export default PFP;
