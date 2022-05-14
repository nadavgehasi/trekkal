import React, {useState} from "react";
import {FlatList, Modal, Pressable, Text, TextInput, View} from "react-native";
import styles from "../app.style";
import {addItemToCategoryApi, getCategory} from "../api/data";
import {Item} from "../types/Item";

const CategoryCard: React.FC<{
  categoryId: string;
}> = ({categoryId}) => {
  const [category, setCategory] = useState(getCategory(categoryId));
  const [addItemVisible, setAddItemVisible] = useState(false);
  const [newItemName, setNewItemName] = useState("שם");
  const [newItemWeight, setNewItemWeight] = useState(0);

  const addItem = () => {
      setAddItemVisible(false);
      const updatedCategory = addItemToCategoryApi(categoryId, new Item({name: newItemName, weight: newItemWeight}));
      setCategory(updatedCategory);
      setNewItemName("שם")
      setNewItemWeight(0)
  }
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        ListHeaderComponent={<Text style={[ styles.sectionTitle ]}>{ category.name }</Text>}
        data={category.items}
        renderItem={({item}) => <Text style={[styles.sectionDescription]}>{item.name}, {item.weight}g </Text>}
        ListFooterComponent={<Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setAddItemVisible(true)}
      >
        <Text style={styles.textStyle}>הוסף פריט</Text>
      </Pressable>}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={addItemVisible}
        onRequestClose={() => setAddItemVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.modalText}>שם: </Text>
              <TextInput
                style={styles.input}
                placeholder="שם"
                onChangeText={setNewItemName}
              />
            </View>
            <View>
              <Text style={styles.modalText}>משקל: </Text>
              <TextInput
                style={styles.input}
                placeholder="משקל"
                keyboardType="numeric"
                onChangeText={(value) => setNewItemWeight(Number(value))}
              />
            </View>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={addItem}>
              <Text style={styles.textStyle}>הוסף</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CategoryCard;