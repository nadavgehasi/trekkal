import React from 'react';
import {View} from 'react-native';
import {VictoryPie} from 'victory-native';
import styles from '../app.style';
import {Category} from '../types/Category';
import {reduceNumbers} from '../utils/arrays';

const GearPieChart: React.FC<{categories: Category[]}> = ({categories}) => {
  const categoriesToGraphicData = (categories: Category[]) => {
    let categoryToWeight: {[id: string]: number} = {};
    let totalWeight = 0;
    for (let i = 0; i < categories.length; i++) {
      let categoryWeight = categories[i].items
        .map(item => item.weight)
        .reduce(reduceNumbers, 0);
      categoryToWeight[categories[i].name] = categoryWeight;
      totalWeight += categoryWeight;
    }
    return categories.map(category => ({
      x: `${Math.round(
        (100 * categoryToWeight[category.name]) / totalWeight,
      )}% ${category.name}`,
      y: categoryToWeight[category.name],
    }));
  };

  return (
    <View style={styles.pieChartView}>
      <VictoryPie
        data={categoriesToGraphicData(categories)}
        width={300}
        height={250}
        innerRadius={50}
        style={{labels: {fill: 'white', fontSize: 15, padding: 7}}}
      />
    </View>
  );
};

export default GearPieChart;
