import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { widthPercentageToDP as vw, heightPercentageToDP as vh } from 'react-native-responsive-screen';

const data = [
  { label: 'Pembeli', value: 'Pembeli' },
  { label: 'Penjual', value: 'Penjual' }
];

const Drop = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
     //
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          // @ts-ignore
          setValue(item.value);
          setIsFocus(false);
        }}

      />
    </View>
  );
};

export default Drop;

const styles = StyleSheet.create({
  container: {
    marginVertical: vh(4),
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 20,
    width: vw(80),
    height: vh(5),
    justifyContent: 'center'
  },
  placeholderStyle: {
    fontSize: vh(2)
  },
  selectedTextStyle: {
    fontSize: vh(2),
    color: '#666',
    marginLeft: vw(3),
    fontWeight: '500'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
