import React, {useState} from "react";
import {FlatList, View} from "react-native";
import styles from "../app.style";
import CategoryCard from "./CategoryCard";
import EquipmentPieChart from "./EquipmentPieChart";
import {basicGear} from "../api/data";
import {Category} from "../types/Category";
import {Gear} from "../types/Gear";
import AddCategoryModal from "./modal/AddCategoryModal";
import Icon from "react-native-vector-icons/AntDesign";

const GearCard: React.FC = ({}) => {
  const [gear, setGear] = useState(basicGear)
  const [addCategoryVisible, setAddCategoryVisible] = useState(false)

  const updateCategory = (updatedCategory: Category) => {
      let filteredCategories = gear.categories.filter((category) => {return category.id != updatedCategory.id})
      let updatedGear = new Gear({name: gear.name, categories: [...filteredCategories, updatedCategory]})
      setGear(updatedGear)
  }

  const deleteCategory = (categoryToDelete: Category) => {
      let filteredCategories = gear.categories.filter((category) => {return category.id != categoryToDelete.id})
      let updatedGear = new Gear({name: gear.name, categories: [...filteredCategories]})
      setGear(updatedGear)
  }

  const addCategory = (newCategoryName: string) => {
      setAddCategoryVisible(false);
      let maxId = Math.max(...gear.categories.map(category => category.id));
      let newCategory = new Category({id: maxId + 1, name: newCategoryName, items: []})
      let updatedGear = new Gear({name: gear.name, categories: [...gear.categories, newCategory]})
      setGear(updatedGear)
  }

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        ListHeaderComponent={<EquipmentPieChart categories={gear.categories}/>}
        data={gear.categories}
        renderItem={({item}) => <CategoryCard category={item} updateCategory={updateCategory} deleteCategory={deleteCategory}/>}
        ListFooterComponent={<View style={styles.plusIconView}><Icon.Button name={"plus"} backgroundColor={"dimgrey"} iconStyle={styles.icon} style={styles.icon} onPress={() => {setAddCategoryVisible(true)}}/></View>}
      />
      <AddCategoryModal isVisible={addCategoryVisible} addCategory={addCategory} onClose={()=> {setAddCategoryVisible(false)}}/>
    </View>
  );
};

export default GearCard;