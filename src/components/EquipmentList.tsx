import React from "react";
import {FlatList, Text, View} from "react-native";
import styles from "../app.style";
import CategoryCard from "./CategoryCard";
import EquipmentPieChart from "./EquipmentPieChart";
import {getCategory} from "../api/data";

const EquipmentList: React.FC<{
  categoriesIds: string[];
}> = ({categoriesIds}) => {
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        ListHeaderComponent={<EquipmentPieChart categories={categoriesIds.map(categoryId => getCategory(categoryId))}/>}
        data={categoriesIds}
        renderItem={({item}) => <CategoryCard categoryId={item} />}
      />
    </View>
  );
};

export default EquipmentList;