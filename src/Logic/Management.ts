import {Account} from "./Account";
import {AccountType, ApprovalStatus} from "./Enum";
import {Station} from "./Station";
import {Train} from "./Train";
import {Restaurant} from "./Restaurant";
import { Customer } from "./Customer";
import { Agent } from "./Agent";
export class Management extends Account{
    static instance: Management|null = null;
    ApprovedRestaurants : Map<number,Restaurant> = new Map<number,Restaurant>();
    Application: Array<Restaurant> = [];
    Customers :Map<number,Customer> = new Map<number,Customer>();
    stationList: Map<number,Station> = new Map<number,Station>();
    trainList: Map<number,Train> = new Map<number,Train>();
    agentList : Map<number,Agent> = new Map<number,Agent>();

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
        this.stationList.set(Station.getID(),(Station));
       
    }
    removeStation(Station:Station) : void{
        this.stationList.delete(Station.getID());
    }
    addTrain(Train:Train) : void{
        this.trainList.set(Train.getID(),(Train));

    }
    removeTrain(Train:Train) : void{
        this.trainList.delete(Train.getID());
    }

    updateRestarantStatus(Restarant:Restaurant,status:number) : void{
        let x = this.Application.indexOf(Restarant);
        Restarant.accetanceStatus = ApprovalStatus[status];
        this.Application.splice(x,1);
        if(status != ApprovalStatus.Rejected){
            this.ApprovedRestaurants.set(Restarant.getID(),(Restarant));
            Management.restaurantForStoring.push(Restarant);
        }
    }
}
var m = Management.getInstance();