import {Category} from "./Category";

interface GearInterface {
    name: string;
    categories: Category[]
}

export class Gear implements GearInterface {
    name: string;
    categories: Category[];

    constructor(gear: GearInterface) {
        this.name = gear.name;
        this.categories = gear.categories;
    }
}