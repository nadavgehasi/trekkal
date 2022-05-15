import React, {useState} from "react";
import {Modal, Pressable, Text, TextInput, View} from "react-native";
import styles from "../../app.style";
import {Item} from "../../types/Item";

const EditItemModal : React.FC<{ isVisible: boolean; currentItem: Item, updateItem: (newName: string, newWeight: number) => void; onClose: () => void;}>
    = ({isVisible, currentItem, updateItem, onClose}) => {
    const [itemNewName, setItemNewName] = useState(currentItem.name);
    const [itemNewWeight, setItemNewWeight] = useState(currentItem.weight);

    const onSubmit = (): void => {
        updateItem(itemNewName, itemNewWeight)
    }

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.inputWithTitle}>
                    <Text style={styles.modalText}>שם: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder={currentItem.name}
                        onChangeText={setItemNewName}
                    />
                </View>
                <View style={styles.inputWithTitle}>
                    <Text style={styles.modalText}>משקל: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder={currentItem.weight.toString()}
                        keyboardType="numeric"
                        onChangeText={(value) => setItemNewWeight(Number(value))}
                    />
                </View>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={onSubmit}>
                    <Text style={styles.textStyle}>עדכן</Text>
                </Pressable>
            </View>
        </View>
    </Modal>)
}

export default EditItemModal;
