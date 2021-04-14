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
    constructor(name:string,TrainNo:string,route:Map<string, Time>,routeStation:Map<string, number>,ID:number = -1){
        this.Name=name;
        this.routeTime = new Map(route);
        this.routeStation = new Map(routeStation);
        this.TrainNo = TrainNo;
        if(ID==-1)
            this.__Id  = Account.unique++;
        else
            this.__Id  = ID;   
        let m = Management.getInstance();
        m.trainList.set(this.__Id,(this));
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
    static readTrain(train : Train){
        let x = new Train(train["Name"], train["TrainNo"],new Map<string, Time>(), new Map<string, number>());
        let i = 0;
        x.__Id = train["__Id"];
        for(let k of Object.keys( train["routeTime"])){
            let m = Management.getInstance();
            x.addStation(m.stationList.get(train["routeStation"].get(k)!)!,Object.setPrototypeOf(train["routeTime"].get(k), Time.prototype));
        }
    }
}
