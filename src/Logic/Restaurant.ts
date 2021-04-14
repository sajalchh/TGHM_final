import {Account} from "./Account"
import {AccountType,AgentStatus,ApprovalStatus,FoodType} from "./Enum"
import {Menu} from "./Menu"
import {Management} from "./Management"
import {Item} from "./Item"
import {Agent} from "./Agent"
import {Certi} from "./Certificate"
import {Station} from "./Station"
import {Order} from "./Order"
import {System} from "./System"
import { Time } from "./Time"

export class Restaurant extends Account{
    orderlist : Array<Order> = [];
    private __timeToReach : Time;
    private __agent : Array<number> = [];
    private __agentStatus: Array<string> = [];
    //private __agentTimeToGetBack : Array<number> = [];
    accetanceStatus = ApprovalStatus[0];
    Menu = new Menu();
    certi: Array<Certi> = [];
    servingStation : number;
    
    constructor(name:string,username:string,password:string,station:Station,timeToReach : Time, m:Management,ID:number = -1) {
        super(name,username,new Date(),AccountType.Restaurant,password,ID);
        //let m = Management.getInstance();
        m.Application.push(this);
        this.__timeToReach = timeToReach;
        this.servingStation = station.getID();
        m.loginR.set(username, this);
    }
    getPrice(s : string){
        return this.Menu.getPrice(s);
    }
    addItem(s : string , price : number, type:number, m:Management){
        let item = new Item(s, price, type, this.getID());
        this.Menu.addItem(item);
        //let m = Management.getInstance();
        let ms=m.stationList.get(this.servingStation);
        if(ms)
        ms.addItem(item);
    }
    removeItem(item:Item, m:Management){
        this.Menu.removeItem(item);
        //let m = Management.getInstance();
        let ms=m.stationList.get(this.servingStation);
        if(ms)
        ms.removeItem(item);
    }
    provideCerti(file : Certi){
        this.certi.push(file);
    }
    AddAgent(agent : Agent){
        this.__agent.push(agent.getID());
        this.__agentStatus.push(AgentStatus[0]);
        System.active_agent.push(agent);
        agent.addRestaurant(this);
    }
    removeAgent(agent : Agent){
        let index = this.__agent.indexOf(agent.getID());
        this.__agent.slice(index);
        //this.__agentTimeToGetBack.slice(index);
        this.__agentStatus.splice(index);
        System.active_agent.slice(System.active_agent.indexOf(agent));
    }

    getAgents(){
        return this.__agent;
    }

    //getClosestAgent(){
    //    return Math.min.apply(Math,this.__agentTimeToGetBack);   
    //}
    allotAgent(order: Order,agent : Agent,time : number|null = null, m:Management){
        let index = this.__agent.indexOf(agent.getID());
        //let m = Management.getInstance();
        let ag=m.agentList.get(this.__agent[index]);
        if(ag)
            ag.updateAllotedOrder(order);
         
    }
    updateOrderStatus(orderId : number,status : number, Item : Item){
        for(let i of this.orderlist){
            if(i.orderId ==orderId){
                i.updateOrderStatus(status,Item);
            }
        }
    }
    //addStation(Station : Station, time:Time){
    //    Station.addRestaurant(this);
    //    this.__timeToReach.push(time);
    //    for(let i of this.Menu.getMenuItems()){
    //        Station.addItem(i);
    //    }
    //    this.servingStation.push(Station.getID());
    // }
    addBrand(newuser : string,password : string,Station : Station,time : Time, m:Management){
        let s = new Restaurant(this._name,newuser,password,Station,time,m);
        for(let i of this.Menu.getMenuItems()){
            let type : string = i.type
            s.addItem(i.name,i.price,(<any>FoodType)[i.type],m);
        }
    }
    getOrderDetails(orderId : number,m:Management){
        for(let i of this.orderlist){
            if(i.orderId ==orderId){
                return i.getItemList(this,m);
            }
        }
    }
    getOrderStations(orderId: number){
        for(let i of this.orderlist){
            if(i.orderId ==orderId){
                return this.servingStation;
            }
        }
        return null;
    }
    updateAgentStatus(agent : Agent,status: number){
        let index = this.__agent.indexOf(agent.getID());
        this.__agentStatus[index] = AgentStatus[status];
    }

    getFreeAgents(m:Management) : Array<Agent>{
        let i=0;
        let v : Array<Agent> = [];
        for(let x of this.__agentStatus){
            if(x==AgentStatus[0]){
                //let m = Management.getInstance();
                let y = m.agentList.get(this.__agent[i]);
                if(y)
                v.push(y);
            }
            i++;
        }
        return v;
    }
    static ReadRestaurant(restaurant:Restaurant, m:Management){
        //let m = Management.getInstance();
        let y = m.stationList.get(restaurant["servingStation"]);
        if(y){
            let timeToReach = new Time(restaurant["__timeToReach"]["hour"],restaurant["__timeToReach"]["min"],restaurant["__timeToReach"]["day"]);
            let x=new Restaurant(restaurant["_name"],restaurant["_username"],restaurant["_password"],y,timeToReach,m,restaurant["_ID"])
            x.__agent=restaurant["__agent"];
            x.__agentStatus=restaurant["__agentStatus"];
            //x._ID=restaurant["_ID"];
            //for(let i of restaurant["__timeToReach"]){
            //}
            x.accetanceStatus=restaurant["accetanceStatus"];
            for(let i of restaurant["Menu"]["__Items"]){
                x.addItem(i["name"],i["price"],(<any>FoodType)[i["type"]],m);
            }
        }
    }

}