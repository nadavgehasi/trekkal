import React from "react";
import {View} from "react-native";
import {VictoryPie} from "victory-native";
import styles from "../app.style";
import {Category} from "../types/Category";


const EquipmentPieChart : React.FC<{categories: Category[]}> = ({categories}) => {
    const graphicData = [{ y: 10, x: '5%'},{ y: 90, x: '90%'},{ y: 50, x: '50%'},{ y: 20, x: '20%'},{ y: 70, x: '70%'},]


    const categoriesToGraphicData = (categories: Category[]) => {
        return categories.map(category => ({x: category.name, y: category.items.map(item => item.weight).reduce((a, b) => a + b, 0)}))
    }

    return (
        <View style={styles.pieChartView}>
            <VictoryPie data={categoriesToGraphicData(categories)} width={250} height={250} innerRadius={50} style={{labels: {fill: 'white', fontSize: 15, padding: 7,}, }}/>
        </View>
    )
}

export default EquipmentPieChart;