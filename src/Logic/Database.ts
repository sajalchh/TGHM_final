
import { Agent } from './Agent';
import { Customer } from './Customer';
import { AccountType } from './Enum';
import { Item } from './Item';
import { Menu } from './Menu';
import { Restaurant } from './Restaurant';
import { Station } from './Station';
import { Time } from './Time';
import {Train} from './Train';
import {Management} from './Management';
import { readFile } from 'node:fs';
import { Account } from './Account';
import { System } from './System';
import CustomerData from "./data/Customers.json";
import RestaurantData from "./data/Restaurants.json";
import StationsData from "./data/Stations.json";
import TrainsData from "./data/Trains.json";
import AgentData from "./data/Agents.json";


const fs = require("fs");
const CircularJSON = require('circular-json');


export class Database{
    static instance: Database|null = null;

    private constructor(){
    }

    static getInstance() : Database{
        if (this.instance==null){
            this.instance = new Database();
        }
        return this.instance;
    }

    static async writeState() {
        try {
            var FileSaver = require('file-saver');
            FileSaver.saveFile("./data/Customers.json", JSON.stringify(Management.Customers), function (){})
            FileSaver.writeFile("./data/Restaurants.json", JSON.stringify(Management.Application), function (){})
            FileSaver.writeFile("./data/Stations.json", JSON.stringify(Management.stationList), function (){})
            FileSaver.writeFile("./data/Trains.json", JSON.stringify(Management.trainList), function (){})
            FileSaver.writeFile('./data/Customers.json', JSON.stringify(Management.Customers));
            console.log(Management.Customers);
        } catch (err) {
            console.error(err)
        }
    }


    static readState(){
        try {
            
            }
    } catch (err) {
    console.error(err)
            return false
        }
    }

/*
    static readState(){
        try {
            let arrCust = CustomerData;
            for (let i=0;i<arrCust.length;i++){
                let x = Object.setPrototypeOf(arrCust[i], Customer.prototype);
                Management.Customers.set(x.getID(),(x));
                Management.loginC.set(x.getUsername(),x);
                Account.unique= Math.max(x.getID(),Account.unique);
                Account.unique++;
            }
            let arrRest = RestaurantData;
            for (let i=0;i<arrRest.length;i++){
                let x = Object.setPrototypeOf(arrRest[i], Restaurant.prototype);
                Management.ApprovedRestaurants.set(x.getID(),(x));
                Management.loginR.set(x.getUsername(), x);
                Account.unique= Math.max(x.getID(),Account.unique);
                Account.unique++;
            }
            let arrStation = StationsData;
            for (let i=0;i<arrStation.length;i++){
                let x = Object.setPrototypeOf(arrStation[i], Station.prototype)
                Management.stationList.set(x.getID(), (x));
            }
            let arrTrains = TrainsData;
            for (let i=0;i<arrTrains.length;i++){
                let x = Object.setPrototypeOf(arrTrains[i], Train.prototype);
                Management.trainList.set(x.getID(), (x));
                Management.trainNo.set(x.TrainNo, x);
            }
            Management.trainListForStoring = Array.from(Management.trainList.values());
            let arrAgent = AgentData;
            for (let i=0;i<arrAgent.length;i++){
                let x = Object.setPrototypeOf(arrAgent[i], Agent.prototype);
                Management.agentList.set(x.getID(), (x));
                Management.loginA.set(x.getUsername(), x);
                System.active_agent.push(x);
            }
        } catch (err) {
            console.error(err)
            return false
        }
    }
*/
    static AuthenticateUser(username:string, password:string): string|null{
        let l = Management.loginC.get(username);
        console.log(l);
        if (l !== undefined){
            if (l.checkPassword(password)) return l.getUsername();
        }
        let r = Management.loginR.get(username);
        console.log(Management.loginR);
        console.log(r);
        if (r !== undefined){
            if (r.checkPassword(password)) return r.getUsername();
        }
        let a = Management.loginA.get(username);
        if (a !== undefined){
            if (a.checkPassword(password)) return a.getUsername();
        }
        if (username==="manager"){
            if (password==="123"){
                return "manager";
            }
        }
        return null;
    }

    static getMenu(train : Train,  timemax : Time=new Time(23,59)) : [Map<string,Array<Item>>,Map<string,Array<Time>>]{
        let timemin = new Time();
        timemin.updateTime();
        const rStation=train.Return_RouteStation();
        let rTime:Map<string, Time> = new Map<string, Time> (train.Return_RouteTime());
        let reqStations = [];
        let time = [];
        // console.log(rTime);
        // console.log(timemin);
        // console.log(timemax);
        // console.log(typeof rTime);
        // console.log(rTime.keys());
        for(let key of Array.from(train.routeTime.keys())) {
            let t = rTime.get(key);
            // console.log(t);
            if(t){
                if(t.lessThanEqual(timemax)&&timemin.lessThanEqual(t)){
                    reqStations.push(key);
                    time.push(t);
                }
            }
        }
        console.log(reqStations);
        let items= Array <Item>();
        let times =  Array <Time>();
        let i=0;
        for(let stat of reqStations){
            // console.log(stat);
            let rs=rStation.get(stat);
            // console.log(rs);
            if(rs){
                let ms=Management.stationList.get(rs);
                console.log(typeof ms);
                if(ms){
                    console.log(ms.getID());
                    Array.prototype.push.apply(items,ms.getItem());
                    for(let x of ms.getItem()){
                        times.push(time[i]);
                    }
                    // console.log(ms.getItem());
                }
            }
            i++;
        }
        let final=new Map<string,Array<Item>>([]);
        let final2 = new Map<string,Array<Time>>([]);
        i=0;
        for(let x of items){
            let c = final.get(x.type);
            let d = final2.get(x.type);
            if(c && d) {
                c.push(x);
                d.push(times[i]);
                final.set(x.type, c);
                final2.set(x.type, d);
            }
            else{
                c = new Array<Item>();
                c.push(x);
                final.set(x.type, c);
                d = new Array<Time>();
                d.push(times[i]);
                final2.set(x.type, d);
            }
            i++;
        }
        console.log(items);
        console.log(final);
        return [final,final2];
    }
    getRestaurant(username:string) : Restaurant|null{
        return null;    
    }
    getAgent(username:string) : Agent|null{
        return null;
    }
}

// let c = new Customer("Shashvat", "Shash", "123", "123456789");
// let r = new Restaurant("Dominos", "Dom", "234", 15);
// Database.writeState();
//
//
//
// Database.readState();
