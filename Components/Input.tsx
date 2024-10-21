import { FC } from "react";
import { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from "react-native-responsive-screen";
import Svg, { Path } from "react-native-svg"

interface InputProps {
    hidden?: boolean,
    placeHolder: string
}

const Input: FC<InputProps> = ({ hidden = false, placeHolder }) => {
    const [isHidden, setIsHidden] = useState(hidden);
    const [currentText, setCurrentText] = useState('');

    const toggleHidden = () => setIsHidden(!isHidden);

    const Styles = StyleSheet.create({
        container: {
            marginVertical: vh(1),
            flexDirection: 'row',
            backgroundColor: 'darkgray',
        },
        input: {
            backgroundColor: 'white',
            width: vw(hidden ? 50 : 65),
            fontSize: vh(2),
            borderBottomColor: '#444',
            borderBottomWidth: 3
        },
        button: {
            backgroundColor: 'white',
            borderBottomColor: '#444',
            borderBottomWidth: 3,
            justifyContent: 'center',
            alignItems: 'center'
        },
    });

    return (
        <View style={Styles.container}>
            <TextInput
                style={Styles.input}
                placeholder={placeHolder}
                value={currentText}
                onChangeText={setCurrentText}
                secureTextEntry={isHidden}
            />
            {hidden ? (
                <TouchableOpacity style={Styles.button} onPress={toggleHidden}>
                    <Svg
                        width={vw(15)}
                        height={vh(5)}
                        fill="#000"
                        viewBox="0 0 16 16"
                    >
                            {isHidden ? (
                                <>
                                <Path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                <Path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                <Path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                </>
                            ) : (
                                <>
                                <Path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 011.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0114.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 011.172 8z" />
                                <Path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5M4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0" />
                                </>
                            )}
                    </Svg>
                </TouchableOpacity>
            ) : null}
        </View>
    );
}

export default Input;
