interface ItemInterface {
    name: string;
    weight: number;
}

export class Item implements ItemInterface{
    name: string;
    weight: number;

    constructor(itemInterface: ItemInterface) {
        this.name = itemInterface.name;
        this.weight = itemInterface.weight;
    }
}
