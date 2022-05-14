import {Category} from "../types/Category";
import {Item} from "../types/Item";


let items: Array<Item> = [new Item({name: "תיק", weight: 1500}),
    new Item({name: "מקלות הליכה", weight: 400})];

let someCategory: Category = new Category({name: "כללי", items: items})
let categories: {[id: string] : Category} = {}

for (let i = 0; i < 10; i++) {
    categories[i.toString()] = someCategory
}

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