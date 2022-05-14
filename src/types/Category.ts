import {Item} from "./Item";

interface CategoryInterface {
    name: string;
    items: Item[]
}

export class Category implements CategoryInterface {
    name: string;
    items: Item[];

    constructor(category: CategoryInterface) {
        this.name = category.name;
        this.items = category.items;
    }
}