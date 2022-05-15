import {Modal, Pressable, Text, TextInput, View} from "react-native";
import styles from "../../app.style";
import React, {useState} from "react";

const AddCategoryModal : React.FC<{ isVisible: boolean; addCategory: (category: string) => void; onClose: () => void;}> =
    ({isVisible, addCategory, onClose}) => {
    const [newCategoryName, setNewCategoryName] = useState("שם");

    const onSubmit = (): void => {
        addCategory(newCategoryName);
        setNewCategoryName("שם");

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
                        placeholder="שם"
                        onChangeText={setNewCategoryName}
                    />
                </View>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={onSubmit}>
                    <Text style={styles.textStyle}>הוסף</Text>
                </Pressable>
            </View>
        </View>
    </Modal>)
}

export default AddCategoryModal;