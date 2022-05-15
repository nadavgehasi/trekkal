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

  const addItem = (newItemName: string, newItemWeight: number): void => {
      setAddItemVisible(false);
      let maxId = Math.max(...category.items.map(item => item.id));
      let newItem = new Item({id: maxId + 1, name: newItemName, weight: newItemWeight})
      let updatedCategory = new Category({id: category.id, name: category.name, items: [...category.items, newItem]})
      updateCategory(updatedCategory)
  }

  const editCategoryName = (newName: string): void => {
      setEditCategoryNameVisible(false);
      let updatedCategory = new Category({id: category.id, name: newName, items: category.items});
      updateCategory(updatedCategory);
  }

  const deleteSelf = (): void => {
      setDeleteCategoryVisible(false);
      deleteCategory(category)
  }

  const updateItem = (updatedItem: Item): void => {
      let filteredItems = category.items.filter((item) => {return item.id != updatedItem.id})
      let updatedCategory = new Category({id: category.id, name: category.name, items: [...filteredItems, updatedItem]})
      updateCategory(updatedCategory)
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
        renderItem={({item}) => <ItemCard item={item} updateItem={updateItem}/>}
        ListFooterComponent={<View style={styles.plusIconView}>
            <Icon.Button name={"plus"} backgroundColor={"dimgrey"} iconStyle={styles.icon} style={styles.icon} onPress={() => {setAddItemVisible(true)}}/></View>}
      />
      <AddItemModal addItem={addItem} isVisible={addItemVisible} onClose={() => {
          {}
      }}/>
      <EditCategoryNameModal currentName={category.name} editCategoryName={editCategoryName} isVisible={editCategoryNameVisible} onClose={() => setEditCategoryNameVisible(false)}/>
      <DeleteCategoryModal isVisible={deleteCategoryVisible} removeCategory={deleteSelf} onClose={()=>{}}/>
    </View>
  );
};

export default CategoryCard;