import {Agent} from "./Agent";
import {Customer} from "./Customer";
import {AgentStatus, OrderStatus} from "./Enum";
import { Item } from "./Item";
import { Management } from "./Management";
import {Restaurant} from "./Restaurant";
import {Station} from "./Station";
import {Train} from "./Train";
import {Time} from "./Time";

export class Order{
    static unique =0;
    private __customer:Customer;
    Order_Status:Array<string> = [];
    private __agent: Array<number> = [];
    private __seatNumber: string;
    private __train: Train;
    private __deliveryStation: Station|null;
    private __selectedItems : Array<Item> = [];
    private __Restaurants = new Set<Restaurant>();
    __OrderTime : Time;
    orderId;
    constructor(customer:Customer,status:number=0,items:Array<Item>,seat_Number:string,train:Train, delivery_station:Station|null = null){
        this.__customer=customer;
        customer.addOrder(this);
        this.__seatNumber=seat_Number;
        this.__train=train;
        this.__deliveryStation=delivery_station;
        this.__selectedItems=items;
        this.__OrderTime = Time.getCurrentTime();
        this.orderId = Order.unique++;
        customer.addOrder(this);
        for(let i of items){
            let x  = Management.ApprovedRestaurants.get(i.restaurant);
            if(x)
            this.__Restaurants.add(x);
        }
    }

    setDeliveryStation(station : Station){
        this.__deliveryStation = station;
    }

    addAgent(Agent : number){
        this.__agent.push(Agent);
    }

    addItem(Item : Item){
        this.__selectedItems.push(Item);
        let ar=Management.ApprovedRestaurants.get(Item.restaurant);
        if(ar){
        this.__Restaurants.add(ar);
        }
        this.Order_Status.push(OrderStatus[0]);
    }

    Track_Order(){
        return this.Order_Status;
    }

    updateOrderStatus(status:number, Item : Item|null = null){
        switch (status){
            case 0:
                break;
            case 1:
                for(let i of this.Order_Status)
                    i=OrderStatus[status];
                for(let i of Array.from(this.__Restaurants)){
                    i.orderlist.push(this);
                }
                break;
            case 2:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
            case 3:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
            case 4:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
            case 5:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
            case 6:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
        }
    }

    getCustomer(){
        return this.__customer;
    }

    getAgent(){
        return this.__agent;
    }

    getSeatNumber(){
        return this.__seatNumber;
    }

    getTrain(){
        return this.__train;
    }

    getDeliveryStation(){
        return this.__deliveryStation;
    }

    getItems(){
        return this.__selectedItems;
    }

    getReciept(){
        return this.orderId;
    }

    getItemList(Restaurant : Restaurant) : Array<Item>{
        let x = [];
        for(let i of this.__selectedItems){
            if(Management.ApprovedRestaurants.get(i.restaurant)==Restaurant){
                x.push(i);
            }
        }
        return x;
    }

    getOrderStatus() : [Array<Item>, Array<string>]{
        if(!this.__OrderTime.sum(new Time(0,15)).lessThanEqual(Time.getCurrentTime())){
            let j=0;
            for(let i of this.__selectedItems){
                if(this.Order_Status[j]==OrderStatus[1]){
                    this.updateOrderStatus(3,i);
                }
            }
        }
        return [this.__selectedItems,this.Order_Status];
    }
    getOrderStations(Restaurant : Restaurant) : Array<Station>{
        let list = new Set<Station>();
        let route = this.__train.Return_RouteStation();
        let time = this.__train.Return_RouteTime();
        for (let i of Array.from(route.keys())){
            if(time.get(i)?.lessThanEqual(Time.getCurrentTime())){
                for(let k of this.__selectedItems){
                    let temp = route.get(i);
                    if(temp)
                    if(Management.stationList.get(temp)?.getItem().indexOf(k)!=-1 && Restaurant.getPrice(k.name)!=-1){
                        let temp2 = Management.stationList.get(temp);
                        if(temp2)
                        list.add(temp2);
                    }
                }
            }
        }
        return Array.from(list);
    }

}
// var c= new Customer("a","B","C","d");
// var n= new Agent();
// var m=new Map();
// m.set("!1","Try");
// var t=new Train("train",m);
// var s=new Station("asdd");
// var item=["x","y","z"];
// var o= new Order(c,1,n,"a11",t,s,item);
// console.log(o.Track_Order());
