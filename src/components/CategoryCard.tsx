import React, {useState} from "react";
import {FlatList, Modal, Pressable, Text, TextInput, View} from "react-native";
import styles from "../app.style";
import {addItemToCategoryApi, getCategory} from "../api/data";
import {Item} from "../types/Item";
import AddItemModal from "./AddItemModal";
import ItemCard from "./ItemCard";

const CategoryCard: React.FC<{
  categoryId: string;
}> = ({categoryId}) => {
  const [category, setCategory] = useState(getCategory(categoryId));
  const [isAddItemVisible, setIsAddItemVisible] = useState(false);

  const addItem = (item: Item): void => {
      setIsAddItemVisible(false);
      const updatedCategory = addItemToCategoryApi(categoryId, item);
      setCategory(updatedCategory);
  }

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        ListHeaderComponent={<Text style={[ styles.sectionTitle ]}>{ category.name }</Text>}
        data={category.items}
        renderItem={({item}) => <ItemCard item={item}/>}
        ListFooterComponent={<Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setIsAddItemVisible(true)}><Text style={styles.textStyle}>הוסף פריט</Text></Pressable>}
      />
      <AddItemModal addItem={addItem} isVisible={isAddItemVisible} onClose={() => setIsAddItemVisible(false)}/>
    </View>
  );
};

export default CategoryCard;