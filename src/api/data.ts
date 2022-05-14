import {Category} from "../types/Category";
import {Item} from "../types/Item";


let mainItems: Array<Item> = [new Item({name: "תיק", weight: 1500}),
    new Item({name: "מקלות הליכה", weight: 400})];

let clothesItems: Array<Item> = [new Item({name: "מעיל", weight: 500}),
    new Item({name: "חולצה", weight: 200})];

let mainCategory: Category = new Category({name: "כללי", items: mainItems})
let clothesCategory: Category = new Category({name: "בגדים", items: clothesItems})
let categories: {[id: string] : Category} = {1: mainCategory, 2: clothesCategory}


export const addItemToCategoryApi = (categoryId: string, newItem: Item): Category => {
    let category: Category = categories[categoryId]
    categories[categoryId] = new Category({name: category.name, items: [...category.items, newItem]})
    return categories[categoryId]
}

export const editCategoryNameApi = (categoryId: string, newName: string): Category => {
    let category: Category = categories[categoryId]
    categories[categoryId] = new Category({name: newName, items: category.items})
    return categories[categoryId]
}

export const getCategory = (categoryId: string) => {
    return categories[categoryId]
}

export const getCategoriesIds = (): string[] => {
    return Object.keys(categories);
}