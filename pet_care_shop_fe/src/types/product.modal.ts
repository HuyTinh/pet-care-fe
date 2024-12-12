export interface IProducts {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    status: boolean;
    type: ProductType
    unit: string;
  }

  export enum ProductType {
    FOOD = "FOOD",
    PATE = "PATE",
    SANDBYCAT = "SANDBYCAT",
  }