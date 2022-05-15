import React, {useState} from "react";
import {FlatList, View} from "react-native";
import styles from "../app.style";
import CategoryCard from "./CategoryCard";
import EquipmentPieChart from "./EquipmentPieChart";
import {basicGear} from "../api/data";
import {Category} from "../types/Category";
import {Gear} from "../types/Gear";

const GearCard: React.FC = ({}) => {
  const [gear, setGear] = useState(basicGear)

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

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        ListHeaderComponent={<EquipmentPieChart categories={gear.categories}/>}
        data={gear.categories}
        renderItem={({item}) => <CategoryCard category={item} updateCategory={updateCategory} deleteCategory={deleteCategory}/>}
      />
    </View>
  );
};

export default GearCard;