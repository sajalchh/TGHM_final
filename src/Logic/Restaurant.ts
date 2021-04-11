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
    private __timeToReach : Array<Time> = [];
    private __agent : Array<number> = [];
    private __agentStatus: Array<string> = [];
    //private __agentTimeToGetBack : Array<number> = [];
    accetanceStatus = ApprovalStatus[0];
    Menu = new Menu();
    certi: Array<Certi> = [];
    servingStation : Array<number> = [];
    
    constructor(name:string,username:string,password:string) {
        super(name,username,new Date(),AccountType.Restaurant,password);
        Management.Application.push(this);
        //this.__timeToReach = timeToReach;
        Management.loginR.set(username, this);
    }
    getPrice(s : string){
        return this.Menu.getPrice(s);
    }
    addItem(s : string , price : number, type:number){
        let item = new Item(s, price, type, this.getID());
        this.Menu.addItem(item);
        for(let i of this.servingStation){
            let ms=Management.stationList.get(i);
            if(ms)
            ms.addItem(item);
        }
    }
    removeItem(item:Item){
        this.Menu.removeItem(item);
        for(let i of this.servingStation){
            let ms=Management.stationList.get(i);
            if(ms)
            ms.removeItem(item);
        }
    }
    provideCerti(file : Certi){
        this.certi.push(file);
    }
    AddAgent(agent : Agent){
        this.__agent.push(agent.getID());
        this.__agentStatus.push(AgentStatus[0]);
        //this.__agentTimeToGetBack.push(0);
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
    allotAgent(order: Order,agent : Agent,time : number|null = null){
        let index = this.__agent.indexOf(agent.getID());
        let ag=Management.agentList.get(this.__agent[index]);
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
    addStation(Station : Station, time:Time){
        Station.addRestaurant(this);
        this.__timeToReach.push(time);
        for(let i of this.Menu.getMenuItems()){
            Station.addItem(i);
        }
        this.servingStation.push(Station.getID());
    }
    getOrderDetails(orderId : number){
        for(let i of this.orderlist){
            if(i.orderId ==orderId){
                return i.getItemList(this);
            }
        }
    }
    getOrderStations(orderId: number){
        for(let i of this.orderlist){
            if(i.orderId ==orderId){
                return i.getOrderStations(this);
            }
        }
    }
    updateAgentStatus(agent : Agent,status: number){
        let index = this.__agent.indexOf(agent.getID());
        this.__agentStatus[index] = AgentStatus[status];
    }

    getFreeAgents() : Array<Agent>{
        let i=0;
        let v : Array<Agent> = [];
        for(let x of this.__agentStatus){
            if(x==AgentStatus[0]){
                let y = Management.agentList.get(this.__agent[i])
                if(y)
                v.push(y);
            }
            i++;
        }
        return v;
    }

}