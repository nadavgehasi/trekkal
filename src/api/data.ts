import {Category} from '../types/Category';
import {Item} from '../types/Item';
import {Gear} from '../types/Gear';

let mainItems: Array<Item> = [
  new Item({id: 1, name: 'תיק', weight: 1500}),
  new Item({id: 2, name: 'מקלות הליכה', weight: 400}),
];

let clothesItems: Array<Item> = [
  new Item({id: 3, name: 'מעיל', weight: 500}),
  new Item({id: 4, name: 'חולצה', weight: 200}),
];

let mainCategory: Category = new Category({
  id: 1,
  name: 'כללי',
  items: mainItems,
});
let clothesCategory: Category = new Category({
  id: 2,
  name: 'בגדים',
  items: clothesItems,
});

export let basicGear = new Gear({
  name: 'basic',
  categories: [mainCategory, clothesCategory],
});
