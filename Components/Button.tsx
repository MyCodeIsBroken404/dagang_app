import { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

// Define the types for the component's props
interface ButtonProps {
  color: string;
  textColor: string;
  text: string,
  goTo: string,
  margin?: number
}

const Button: FC<ButtonProps> = ({ color, textColor, text, margin = 0, goTo }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      width: vw(80),
      paddingVertical: vh(2),
      marginVertical: vh(margin),
      borderRadius: 40,
    },
    buttonText: {
      color: textColor,
      fontWeight: '500',
      fontSize: vh(3),
      textAlign: 'center'
    },
  });

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={
      // @ts-ignore
      () => navigation.navigate(goTo)}
      >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
