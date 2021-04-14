import {Restaurant} from "./Restaurant";
import {Item} from "./Item";
import { Management } from "./Management";
import { Account } from "./Account";

export class Station{
    name;
    private __restaurant: Array<number> = [];
    private __food = new Set<Item>();
    private __ID : number;
    deliveredCount : number = 0;
    failedCount : number = 0;
    constructor(name:string,ID:number = -1){
        this.name = name;
        if(ID==-1)
            this.__ID  = Account.unique++;
        else
            this.__ID  = ID;
        let m = Management.getInstance();
        m.stationList.set(this.__ID,(this));
        Management.stationListForStoring.push(this);
    }
    addRestaurant(restaurant:Restaurant){
        this.__restaurant.push(restaurant.getID());
    }
    getRestaurant(){
        return this.__restaurant;
    }
    addItem(item: Item){
        this.__food.add(item);
    }
    removeItem(item: Item){
        this.__food.delete(item);
    }
    getItem(){
        //console.log(this.__food);
        return Array.from(this.__food);
    }
    getID(){
        return this.__ID;
    }
}