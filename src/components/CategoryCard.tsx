import React, {useState} from "react";
import {FlatList, Image, Modal, Pressable, Text, TextInput, View} from "react-native";
import styles from "../app.style";
import {addItemToCategoryApi, editCategoryNameApi, getCategory} from "../api/data";
import {Item} from "../types/Item";
import AddItemModal from "./AddItemModal";
import ItemCard from "./ItemCard";
import Icon from 'react-native-vector-icons/AntDesign';
import EditCategoryNameModal from "./EditCategoryNameModal";

const CategoryCard: React.FC<{
  categoryId: string;
}> = ({categoryId}) => {
  const [category, setCategory] = useState(getCategory(categoryId));
  const [addItemVisible, setAddItemVisible] = useState(false);
  const [editCategoryNameVisible, setEditCategoryNameVisible] = useState(false);

  const addItem = (item: Item): void => {
      setAddItemVisible(false);
      const updatedCategory = addItemToCategoryApi(categoryId, item);
      setCategory(updatedCategory);
  }

  const editCategoryName = (newName: string): void => {
      setEditCategoryNameVisible(false);
      const updatedCategory = editCategoryNameApi(categoryId, newName);
      setCategory(updatedCategory);
  }

  return (
    <View style={styles.categoryContainer}>
      <FlatList
        ListHeaderComponent={<View style={styles.title}>
            <Icon.Button name={"edit"} iconStyle={styles.icon} style={styles.icon} onPress={() => {setEditCategoryNameVisible(true)}}/>
            <Text style={[ styles.sectionTitle ]}>{ category.name }</Text>
            <Icon.Button name={"plus"} iconStyle={styles.icon} style={styles.icon} onPress={() => {setAddItemVisible(true)}}/>
        </View>
        }
        data={category.items}
        renderItem={({item}) => <ItemCard item={item}/>}
      />
      <AddItemModal addItem={addItem} isVisible={addItemVisible} onClose={() => setAddItemVisible(false)}/>
      <EditCategoryNameModal currentName={category.name} editCategoryName={editCategoryName} isVisible={editCategoryNameVisible} onClose={() => setEditCategoryNameVisible(false)}/>
    </View>
  );
};

export default CategoryCard;