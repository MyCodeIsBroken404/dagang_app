import { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

// Define the types for the component's props
interface ButtonProps {
  align: any;
  textColor: string;
  text: string,
  goTo: string,
  margin?: number
}

const Anchor: FC<ButtonProps> = ({ align, textColor, text, margin = 0, goTo }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#fff',
      width: vw(65),
      marginVertical: vh(margin),
    },
    buttonText: {
      color: textColor,
      fontWeight: '500',
      fontSize: vh(2),
      textAlign: align,
      textDecorationColor: textColor,
      textDecorationLine: 'underline'
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

export default Anchor;
