export class House {

    name: string;
    length: number;
    height: number;
    color: string;
    type: Type;
    location: string;
    bhk: number;
}

export enum Type {
    GLASS = 'Glass',
    WODDEN = 'Wooden',
    PENT_HOUSE = 'Pent House',
    CEMENT = 'Cement'
}

export class Car {
    company: string;
    model: string;
    seater: number;
    color: string;
    type: string;
}