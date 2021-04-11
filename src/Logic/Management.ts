import {Account} from "./Account";
import {AccountType, ApprovalStatus} from "./Enum";
import {Station} from "./Station";
import {Train} from "./Train";
import {Restaurant} from "./Restaurant";
import { Customer } from "./Customer";
import { Agent } from "./Agent";
export class Management extends Account{
    static instance: Management|null = null;
    static ApprovedRestaurants : Map<number,Restaurant> = new Map<number,Restaurant>();
    static Application: Array<Restaurant> = [];
    static Customers :Map<number,Customer> = new Map<number,Customer>();
    static stationList: Map<number,Station> = new Map<number,Station>();
    static trainList: Map<number,Train> = new Map<number,Train>();
    static agentList : Map<number,Agent> = new Map<number,Agent>();

    static loginC : Map<string, Customer> = new Map<string, Customer>();
    static loginR : Map<string, Restaurant> = new Map<string, Restaurant>();
    static loginA : Map<string, Agent> = new Map<string, Agent>();
    static trainNo : Map<string,Train> = new Map<string,Train>();

    static CustomersForStoring :Array<Customer> = new Array<Customer>();
    static stationListForStoring: Array<Station> = new Array<Station>();
    static trainListForStoring: Array<Train> = new Array<Train>();
    static agentListForStoring : Array<Agent> = new Array<Agent>();
    static restaurantForStoring : Array<Restaurant> = new Array<Restaurant>();

    private constructor(){
        super("Management","Manager",new Date(),AccountType.Management,"admin");
    }
    static getInstance() : Management{
        if (this.instance==null){
            this.instance = new Management();
        }
        return this.instance;
    }


    addStation(Station:Station) : void{
        Management.stationList.set(Station.getID(),(Station));
       
    }
    removeStation(Station:Station) : void{
        Management.stationList.delete(Station.getID());
    }
    addTrain(Train:Train) : void{
        Management.trainList.set(Train.getID(),(Train));

    }
    removeTrain(Train:Train) : void{
        Management.trainList.delete(Train.getID());
    }

    updateRestarantStatus(Restarant:Restaurant,status:number) : void{
        let x = Management.Application.indexOf(Restarant);
        Restarant.accetanceStatus = ApprovalStatus[status];
        Management.Application.splice(x,1);
        if(status != ApprovalStatus.Rejected){
            Management.ApprovedRestaurants.set(Restarant.getID(),(Restarant));
            Management.restaurantForStoring.push(Restarant);
        }
    }
}
var m = Management.getInstance();