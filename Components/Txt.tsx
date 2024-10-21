import { FC } from "react";
import { Text, StyleSheet } from "react-native";
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from "react-native-responsive-screen";

interface TxtProps {
    text: string,
    fontSize: number,
    color: string,
    fontWeight: any,
    margin?: number,
    align?: any
}

const Txt: FC<TxtProps> = ({ text, fontSize, color, fontWeight, margin = 0, align = 'center' }) => {
    const Styles = StyleSheet.create({
        text: {
            fontSize: vh(fontSize),
            color: color,
            fontWeight: fontWeight,
            textAlign: align,
            marginVertical: vh(margin)
        }
    });
    return (
        <Text style={Styles.text}>{text}</Text>
    )
}

export default Txt;