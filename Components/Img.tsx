import { FC } from "react";
import { Image, StyleSheet } from "react-native"
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from "react-native-responsive-screen";

interface ImgProps {
    src: any,
    margin: number
}

const Img: FC<ImgProps> = ({ src, margin }) => {
    const Styles = StyleSheet.create({
        img: {
            marginVertical: vh(margin),
            backgroundColor: '#fff'
        }
    });
    return (
        <Image source={src} style={Styles.img} />
    )
}

export default Img;