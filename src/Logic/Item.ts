import {FoodType} from "./Enum"
import { Restaurant } from "./Restaurant";
import { Time } from "./Time";
export class Item{
    name: string;
    price: number;
    type : string;
    restaurant : number;
    constructor(name : string,price : number,type : number,restaurant : number){
        this.name = name;
        this.price = price;
        this.type = FoodType[type];
        this.restaurant = restaurant;
    }
}