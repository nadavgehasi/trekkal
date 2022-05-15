import React, {useState} from "react";
import {Modal, Pressable, Text, TextInput, View} from "react-native";
import styles from "../../app.style";

const DeleteItemModal : React.FC<{ isVisible: boolean; deleteItem: () => void; onClose: () => void;}> =
    ({isVisible, deleteItem, onClose}) => {

    const onSubmit = (): void => {
        deleteItem();
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
                        <Text style={styles.modalText}>האם אתה בטוח שברצונך למחוק את הפריט ?</Text>
                    </View>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={onSubmit}>
                        <Text style={styles.textStyle}>אישור</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>)
}

export default DeleteItemModal;