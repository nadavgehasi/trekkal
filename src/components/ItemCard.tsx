import React, {useState} from "react";
import styles from "../app.style";
import {Text, View} from "react-native";
import {Item} from "../types/Item";
import Icon from "react-native-vector-icons/AntDesign";
import EditItemModal from "./modal/EditItemModal";
import DeleteItemModal from "./modal/DeleteItemModal";

const ItemCard: React.FC<{item: Item, updateItem: (updatedItem: Item) => void, deleteItem: (item: Item) => void}> = ({item, updateItem, deleteItem}) => {
    const [editItemVisible, setEditItemVisible] = useState(false);

    const update = (newName: string, newWeight: number) => {
        setEditItemVisible(false);
        let updatedItem = new Item({id: 1, name: newName, weight: newWeight});
        updateItem(updatedItem);
    }

    const remove = () => {
        deleteItem(item);
    }

    return (
        <View>
          <View style={styles.itemRow}>
            <Text style={[styles.sectionDescription]}>{item.name}, {item.weight}g </Text>
            <Icon.Button name={"edit"} backgroundColor={"dimgrey"} iconStyle={styles.icon} style={styles.icon} onPress={() => {setEditItemVisible(true)}}/>
          </View>
          <EditItemModal isVisible={editItemVisible} currentItem={item} updateItem={update} deleteItem={remove} onClose={()=> {setEditItemVisible(false)}}/>
        </View>
    )
}

export default ItemCard;
