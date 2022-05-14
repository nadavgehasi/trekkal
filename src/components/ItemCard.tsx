import React from "react";
import styles from "../app.style";
import {Text} from "react-native";
import {Item} from "../types/Item";

const ItemCard: React.FC<{item: Item}> = ({item}) => {
    return (<Text style={[styles.sectionDescription]}>{item.name}, {item.weight}g </Text>)
}

export default ItemCard;
