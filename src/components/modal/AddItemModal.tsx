import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import styles from '../../app.style';
import React, {useState} from 'react';

const AddItemModal: React.FC<{
  isVisible: boolean;
  addItem: (newItemName: string, newItemWeight: number) => void;
  onClose: () => void;
}> = ({isVisible, addItem, onClose}) => {
  const [newItemName, setNewItemName] = useState('שם');
  const [newItemWeight, setNewItemWeight] = useState(0);

  const onSubmit = (): void => {
    addItem(newItemName, newItemWeight);
    setNewItemName('שם');
    setNewItemWeight(0);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.inputWithTitle}>
            <Text style={styles.modalText}>שם: </Text>
            <TextInput
              style={styles.input}
              placeholder="שם"
              onChangeText={setNewItemName}
            />
          </View>
          <View style={styles.inputWithTitle}>
            <Text style={styles.modalText}>משקל: </Text>
            <TextInput
              style={styles.input}
              placeholder="משקל"
              keyboardType="numeric"
              onChangeText={value => setNewItemWeight(Number(value))}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onSubmit}>
            <Text style={styles.textStyle}>הוסף</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddItemModal;
