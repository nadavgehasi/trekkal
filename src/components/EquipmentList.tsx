import React from "react";
import {FlatList, Text, View} from "react-native";
import styles from "../app.style";
import CategoryCard from "./CategoryCard";

const EquipmentList: React.FC<{
  categoriesIds: string[];
}> = ({categoriesIds}) => {
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={categoriesIds}
        renderItem={({item}) => <CategoryCard categoryId={item} />}
      />
    </View>
  );
};

export default EquipmentList;