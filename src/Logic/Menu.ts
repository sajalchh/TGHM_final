import { readSync } from "node:fs";
import {Item} from "./Item"
import { Restaurant } from "./Restaurant";
export class Menu{
    private __Items : Array<Item> = [];
    constructor(){
    }
    getMenuItems(){
        return this.__Items;
    }
    getPrice(s:string){
        for (let i of this.__Items){
            if(i.name==s){
                return i.price;
            }
        }
        return -1;
    }
    addItem(Item : Item){
        this.__Items.push(Item);
    }
    addItembyName(name:string , price:number, type: number, restaurant : number){
        let item = new Item(name, price, type,restaurant);
        this.__Items.push(item);
    }
    removeItem(item: Item){
        this.__Items.forEach((value,index)=>{
            if(value==item) this.__Items.splice(index,1);
            return;
        });
    }
}