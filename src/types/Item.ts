interface ItemInterface {
  id: number;
  name: string;
  weight: number;
}

export class Item implements ItemInterface {
  id: number;
  name: string;
  weight: number;

  constructor(itemInterface: ItemInterface) {
    this.id = itemInterface.id;
    this.name = itemInterface.name;
    this.weight = itemInterface.weight;
  }
}
