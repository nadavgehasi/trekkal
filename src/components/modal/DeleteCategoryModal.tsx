import React, {useState} from "react";
import {Modal, Pressable, Text, TextInput, View} from "react-native";
import styles from "../../app.style";

const DeleteCategoryModal : React.FC<{ isVisible: boolean; removeCategory: () => void; onClose: () => void;}> =
    ({isVisible, removeCategory, onClose}) => {

    const onSubmit = (): void => {
        removeCategory();
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
                        <Text style={styles.modalText}>האם אתה בטוח שברצונך למחוק את הקטגוריה ?</Text>
                    </View>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={onSubmit}>
                        <Text style={styles.textStyle}>אישור</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>)
}

export default DeleteCategoryModal;