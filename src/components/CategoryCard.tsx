import React, {useState} from "react";
import {FlatList, Text, View} from "react-native";
import styles from "../app.style";
import {Item} from "../types/Item";
import AddItemModal from "./modal/AddItemModal";
import ItemCard from "./ItemCard";
import Icon from 'react-native-vector-icons/AntDesign';
import EditCategoryNameModal from "./modal/EditCategoryNameModal";
import {Category} from "../types/Category";
import DeleteCategoryModal from "./modal/DeleteCategoryModal";

const CategoryCard: React.FC<{
  category: Category;
  updateCategory: (category: Category) => void;
  deleteCategory: (category: Category) => void;
}> = ({category, updateCategory, deleteCategory}) => {
  const [addItemVisible, setAddItemVisible] = useState(false);
  const [editCategoryNameVisible, setEditCategoryNameVisible] = useState(false);
  const [deleteCategoryVisible, setDeleteCategoryVisible] = useState(false);

  const addItem = (newItem: Item): void => {
      setAddItemVisible(false);
      let updatedCategory = new Category({id: category.id, name: category.name, items: [...category.items, newItem]})
      updateCategory(updatedCategory)
  }

  const editCategoryName = (newName: string): void => {
      setEditCategoryNameVisible(false);
      let updatedCategory = new Category({id: category.id, name: newName, items: category.items});
      updateCategory(updatedCategory);
  }

  return (
    <View style={styles.categoryContainer}>
      <FlatList
        ListHeaderComponent={<View style={styles.title}>
            <Icon.Button name={"edit"} iconStyle={styles.icon} style={styles.icon} onPress={() => {setEditCategoryNameVisible(true)}}/>
            <Text style={[ styles.sectionTitle ]}>{ category.name }</Text>
            <Icon.Button name={"delete"} iconStyle={styles.icon} style={styles.icon} onPress={() => {setDeleteCategoryVisible(true)}}/>
        </View>
        }
        data={category.items}
        renderItem={({item}) => <ItemCard item={item}/>}
        ListFooterComponent={
            <Icon.Button name={"plus"} backgroundColor={"dimgrey"} iconStyle={styles.icon} style={styles.icon} onPress={() => {setAddItemVisible(true)}}/>}
      />
      <AddItemModal addItem={addItem} isVisible={addItemVisible} onClose={() => setAddItemVisible(false)}/>
      <EditCategoryNameModal currentName={category.name} editCategoryName={editCategoryName} isVisible={editCategoryNameVisible} onClose={() => setEditCategoryNameVisible(false)}/>
      <DeleteCategoryModal isVisible={deleteCategoryVisible} removeCategory={() => {deleteCategory(category)}} onClose={() => setDeleteCategoryVisible(false)}/>
    </View>
  );
};

export default CategoryCard;