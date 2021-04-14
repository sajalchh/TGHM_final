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
    constructor(name:string){
        this.name = name;
        this.__ID = Account.unique++; 
        Management.stationList.set(this.__ID,(this));
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
    static ReadStation(station:Station){
        let x=new Station(station["name"]);
        x.__restaurant=station["__restaurant"];
        x.__ID=station["__ID"];
        x.deliveredCount= station["deliveredCount"];
        x.failedCount= station["failedCount"];
        // for (let i = station["__food"].values(), val= null; val=i.next().value; ) {
        //     x.__food.add(new Item(i["name"],i["price"],i["type"],i["restaurant"]))
        // }
    }
}