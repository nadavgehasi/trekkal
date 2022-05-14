import React, {useState} from "react";
import {Modal, Pressable, Text, TextInput, View} from "react-native";
import styles from "../app.style";

const EditCategoryNameModal : React.FC<{ isVisible: boolean; currentName: string, editCategoryName: (newName: string) => void; onClose: () => void;}> = ({isVisible, currentName, editCategoryName, onClose}) => {
    const [categoryName, setCategoryName] = useState(currentName);

    const onSubmit = (): void => {
        editCategoryName(categoryName);
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
                            placeholder={currentName}
                            onChangeText={setCategoryName}
                        />
                    </View>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={onSubmit}>
                        <Text style={styles.textStyle}>עדכן</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>)
}

export default EditCategoryNameModal;