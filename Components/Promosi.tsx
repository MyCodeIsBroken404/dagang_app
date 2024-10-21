import { FC, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

interface PromosiProps {
    setText: any,
    setModalVisible: any,
    text: any,
    modalVisible: any,
}

const Promosi: FC<PromosiProps> = ({ modalVisible, setModalVisible, setText, text }) => {
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Promosi {text}</Text>
            <TextInput
                style={styles.textArea}
                placeholder="Type here..."
                placeholderTextColor="gray"
                multiline={true}
                numberOfLines={4}
                onChangeText={setText}
            />
            <TouchableOpacity
              style={styles.okButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#F194FF',
    padding: 10,
    borderRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: '4%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  okButton: {
    backgroundColor: '#E8505B',
    borderRadius: 50,
    padding: '8%',
    marginTop: 20,
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    width: '100%',
    marginBottom: '5%',
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
  },
  textArea: {
    height: 150,
    width: '100%',
    justifyContent: "flex-start",
    textAlignVertical: 'top', // Aligns the text to the top
    borderColor: '#bbb',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    fontSize: 16, // Adjust font size as needed
  },
});

export default Promosi;