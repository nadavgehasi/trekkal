import {Item} from "./Item";

interface CategoryInterface {
    id: number;
    name: string;
    items: Item[]
}

export class Category implements CategoryInterface {
    id: number;
    name: string;
    items: Item[];

    constructor(category: CategoryInterface) {
        this.id = category.id;
        this.name = category.name;
        this.items = category.items;
    }
}