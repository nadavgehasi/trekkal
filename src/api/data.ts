import {Category} from "../types/Category";
import {Item} from "../types/Item";
import {Gear} from "../types/Gear";


let mainItems: Array<Item> = [new Item({name: "תיק", weight: 1500}),
    new Item({name: "מקלות הליכה", weight: 400})];

let clothesItems: Array<Item> = [new Item({name: "מעיל", weight: 500}),
    new Item({name: "חולצה", weight: 200})];

let mainCategory: Category = new Category({id: 1, name: "כללי", items: mainItems})
let clothesCategory: Category = new Category({id: 2, name: "בגדים", items: clothesItems})

export let basicGear = new Gear({name: "basic", categories: [mainCategory, clothesCategory]})