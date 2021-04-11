import { Account } from "./Account";
import { Management } from "./Management";
import {Station} from "./Station";
import { Time } from "./Time";
    
export class Train{
    Name:string;
    TrainNo : string;
    routeTime:Map<string, Time>;
    routeStation:Map<string,number>;
    private __Id : number;
    constructor(name:string,TrainNo:string,route:Map<string, Time>,routeStation:Map<string, number>){
        this.Name=name;
        this.routeTime = new Map(route);
        this.routeStation = new Map(routeStation);
        this.TrainNo = TrainNo;
        this.__Id  = Account.unique++;
        Management.trainList.set(this.__Id,(this));
        Management.trainNo.set(TrainNo,this);
        Management.trainListForStoring.push(this);
    }
    addStation(station:Station, time : Time){
        this.routeTime.set(station.name,time);
        this.routeStation.set(station.name,station.getID());
        //console.log(this.routeTime);
    }
    Return_RouteTime(): Map<string, Time>{
        return this.routeTime;
    }
    Return_RouteStation(): Map<string, number>{
        return this.routeStation;
    }
    getID(){
        return this.__Id;
    }
}
