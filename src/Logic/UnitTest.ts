import { Console } from "node:console"
import {Account} from "./Account";
import {AccountType,AgentStatus, FoodType, OrderStatus} from "./Enum";
import {Menu} from "./Menu";
import {Management} from "./Management"
import {Item} from "./Item"
import {Agent} from "./Agent"
import {Certi} from "./Certificate"
import {Station} from "./Station"
import {Order} from "./Order"
import {Restaurant} from "./Restaurant"
import { AddData } from "./addingData"
import { Customer } from "./Customer"

import { Train } from "./Train"
import { Time } from "./Time"

let m = Management.getInstance();
let c1 = new Customer("sajal", "sajalchh", "hello", "9293945535",  m);
let c2 = new Customer("shaswat", "shaswat621", "kgpianboy", "9293945235",  m);
let c3 = new Customer("abhishek", "gandhi", "baba", "91885665571",  m);

let t1 = new Train("mumbai rajdhani", "12951", new Map<string, Time>(), new Map<string, number>(),  m);
let t2 = new Train("Howrah Express", "12833", new Map<string, Time>(), new Map<string, number>(),  m);

let s1 = new Station("Mumbai",  m);
let s2 = new Station("Delhi",  m);
let s3 = new Station("Kolkata",  m);
let s4 = new Station("Raipur",  m);
let s5 = new Station("Nagpur",  m);
let s6 = new Station("Ahmedabad",  m);
let s7 = new Station("Durg",  m);
let s8 = new Station("Surat",  m);
let s9 = new Station("Kota",  m);

t1.addStation(s1, new Time(7, 53));
t1.addStation(s2, new Time(8, 35));
t1.addStation(s8, new Time(3, 31));
t1.addStation(s9, new Time(16, 30));

t2.addStation(s1, new Time(0, 15));
t2.addStation(s3, new Time(23, 59));
t2.addStation(s4, new Time(22, 55));
t2.addStation(s5, new Time(17, 45));
t2.addStation(s6, new Time(10, 5));
t2.addStation(s7, new Time(22, 10));

let r1 = new Restaurant("sajal dhaba", "dhaba", "123",s1, new Time(0,15),m);
let r2 = new Restaurant("club mahindra", "mahindra", "123",s2,  new Time(0,15),m);
let r3 = new Restaurant("dominos", "domi", "123",s3, new Time(0,15),m);
let r4 = new Restaurant("foodbuz", "food", "123",s4, new Time(0,15),m);
let r5 = new Restaurant("swastam", "swami", "123",s5, new Time(0,15),m);
let r6 = new Restaurant("Mio Amore", "mio_me", "123",s6, new Time(0,15),m);
let r7 = new Restaurant("Arabian Nights", "nights", "123",s7, new Time(0,15),m);
let r8 = new Restaurant("KFC", "kfc", "123",s8, new Time(0,15),m);

m.updateRestarantStatus(r1, 1);
m.updateRestarantStatus(r2, 1);
m.updateRestarantStatus(r3, 1);
m.updateRestarantStatus(r4, 1);
m.updateRestarantStatus(r5, 1);
m.updateRestarantStatus(r6, 1);
m.updateRestarantStatus(r7, 1);
m.updateRestarantStatus(r8, 1);

let a1 = new Agent("ramesh", "ramesh", "123", r1,m);
let a2 = new Agent("ramu", "ramu", "123", r2,m);
let a3 = new Agent("mahesh", "mahesh", "123", r3,m);
let a4 = new Agent("ganesh", "ganesh", "123", r4,m);
let a5 = new Agent("sham", "sham", "123", r5,m);
let a6 = new Agent("shamu", "shamu", "123", r6,m);
let a7 = new Agent("lalit", "lalu", "123", r7,m);

/*r1.addStation(s1, new Time(0, 30));
r2.addStation(s2, new Time(0, 30));
r2.addStation(s3, new Time(0, 40));
r3.addStation(s4, new Time(0, 30));
r4.addStation(s5, new Time(0, 30));
r5.addStation(s6, new Time(0, 30));
r6.addStation(s7, new Time(0, 20));
r7.addStation(s8, new Time(0, 50));
r7.addStation(s9, new Time(0, 10));
r8.addStation(s1, new Time(0, 60));
r8.addStation(s2, new Time(0, 40));
r8.addStation(s5, new Time(0, 10));
*/
r1.addItem("cheese fries", 600, 8,m);
r1.addItem("veggie potato burger", 60, 0,m);
r1.addItem("chicken burger", 60, 0,m);
r1.addItem("veg whopper", 60, 0,m);
r1.addItem("Mc veggie", 60, 0,m);
r1.addItem("coke", 60, 5,m);
r1.addItem("veg momos", 60, 4,m);

r2.addItem("veg rolls", 60, 2,m);
r2.addItem("dahi chaat", 60, 3,m);
r2.addItem("hara bhara kabab", 60, 12,m);
r2.addItem("chicken rolls", 60, 2,m);

r3.addItem("Margerita", 60, 1,m);
r3.addItem("Paneer pizza", 60, 1,m);
r3.addItem("corn pizza", 60, 1,m);
r3.addItem("lava cake", 60, 21,m);

r4.addItem("butterchoch cake", 260, 5,m);
r4.addItem("chocalate cake", 560, 5,m);
r4.addItem("pineapple cake", 600, 5,m);
r4.addItem("oreo milkshake", 60, 13,m);

r5.addItem("samosa", 430, 6,m);
r5.addItem("raj kajori", 450, 6,m);
r5.addItem("allu tikki", 500, 6,m);
r5.addItem("masala soda", 40, 22,m);

r6.addItem("Brownie", 60, 21,m);
r6.addItem("coffee", 60, 22,m);
r6.addItem("Chicken nuggets", 60, 20,m);
r6.addItem("pastry", 60, 21,m);

r7.addItem("hot sour soup", 200, 15,m);
r7.addItem("biryani", 60, 21,m);
r7.addItem("chicken biryani", 360, 10,m);
r7.addItem("green salad", 100, 14,m);

r8.addItem("chicken burger", 200, 0,m);
r8.addItem("chicken noodles", 60, 9,m);
r8.addItem("fish nuggets", 360, 17,m);
r8.addItem("prawns", 700, 20,m);

function UnitTestingManagement(){
    console.log("----------------------UnitTestingManagementAndAccount----------------------------");
    console.log(m.getID());
    let m2 = Management.getInstance();
    if(m.getID()!=0){
        console.log("error in ID allocation");
    }
    console.log(m.getName());
    if(m.getName()!="Management"){
        console.log("error in name allocation");
    }
    console.log(m.getUsername());
    if(m.getUsername()!="Manager"){
        console.log("error in Username allocation");
    }
    if(m!=m2){
        console.log("error in singelton allocation");
    }
    if(m.checkPassword("admin")){
        console.log("Password Verification working");
    }
    if(m.checkPassword("admin1")){
        console.log("Password Verification failed");
    }
    console.log(AccountType[m.getType()]);
    if(m.getType()!=AccountType.Management){
        console.log("Error in account Type");
    }
    let r10 = new Restaurant("baba", "baba", "123",s1,new Time(0,15),m);
    let r11 = new Restaurant("baba123", "baba", "123",s1,new Time(0,15),m);
    let Manage = Management.getInstance();
    if(Manage.Application[0]==r10 && Manage.Application[1]==r11){
        console.log("Checking Application Array: Found");
    }
    m.updateRestarantStatus(r10,1);
    m.updateRestarantStatus(r11,2);
    //console.log(Management.Application)
    if(Manage.ApprovedRestaurants.get(r10.getID())==r10 && Manage.ApprovedRestaurants.get(r11.getID())==undefined){
        console.log("updateRestaurantStatus : Working");
    }
    console.log("-------------------------------------------------------------------------------");
}

function UnitTestingTime(){
    console.log("-------------------------------UnitTestingTime---------------------------------");
    let time = new Time(1,30);
    if(time.min === 30 && time.hour===1){
        console.log("Correct initilisation");
    }
    let time2 = new Time(1,29);
    let time3 = new Time(0,23);
    if(!time.lessThanEqual(time2) && time3.lessThanEqual(time)){
        console.log("LessthanequalWorking");
    }
    let d = new Date();
    time.updateTime();
    if(time.min === d.getMinutes() && time.hour===d.getHours()){
        console.log("update working fine");
    }

    console.log("-------------------------------------------------------------------------------");
}

function UnitTestingItems(){
    console.log("-------------------------------UnitTestingItems-----------------------------");
    let item = new Item("normal fries",400,FoodType.Biryani,4);
    if(item.name=="normal fries"){
        console.log("Name Verified");
    }
    if(item.price==400){
        console.log("Price Verified");
    }
    if(item.type==FoodType[FoodType.Biryani]){
        console.log("item type Verified");
    }
    if(item.restaurant==4){
        console.log("Restaurant Verified");
    }
    console.log("-------------------------------------------------------------------------------");
}

function UnitTestingMenu(){
    console.log("-------------------------------UnitTestingMenu--------------------------------");
    let menu = r1.Menu;
    if(menu.getPrice("cheese fries")==600){
        console.log("get price functionality working");
    }
    menu.addItembyName("momos",50,FoodType.Momos,r1.getID());
    if(menu.getPrice("momos")==50){
        console.log("Add Item functionality working properly");
    }
    let item = new Item("momos2",500,FoodType.Momos,r1.getID());
    menu.addItem(item);
    if(menu.getPrice("momos2")==500){
        menu.removeItem(item);
        //console.log(menu.getPrice("momos2"))
        if(menu.getPrice("momos2")==-1){
            console.log("Remove fuctionality working properly");
        }
    }
    console.log("-------------------------------------------------------------------------------");
}
var order1 : Order;
function UnitTestingOrders(){
    console.log("-------------------------------UnitTestingOrders-------------------------------");
    order1 = new Order(c1,0,r1.Menu.getMenuItems(),"1",t1.getID(),m);
    if(order1.getCustomer()===c1 && order1.getSeatNumber()==="1" && order1.getTrain()===t1.getID()){
        console.log("order allotment checked");
    }
    order1.updateOrderStatus(1);
    let x = r1.getOrderDetails(order1.orderId,m);
    if(x)
    if(x.length == 8)
        console.log("Get order details working properly both in restaurant and order");
    if(order1.getReciept==order1.getReciept){
        console.log("get Reciept working properly");
    }
    if(x){
        order1.updateOrderStatus(4,x[0]);
        if(order1.getOrderStatus()[1][0] == OrderStatus[4]){
            console.log("update order status working properly");
        }
    }
    

    console.log("-------------------------------------------------------------------------------");
}

function UnitTestingRestaurants(){
    console.log("-------------------------------UnitTestingRestaurants--------------------------");
    let res = r1;
    if(res.getPrice("fries")!=-1){
        console.log("get price working perfectly");
    }
    console.log("adding Item and Adding Station working properly");
    res.allotAgent(order1,a1,null,m);
    //console.log(order1.getAgent());
    let Manage = Management.getInstance();
    if(Manage.agentList.get(order1.getAgent()[0])==a1){
        console.log("agent allotment working properly")
    }

    console.log("-------------------------------------------------------------------------------");
}



function UnitTestingAgents(){
    console.log("-------------------------------UnitTestingAgents-------------------------------");
    let agent = a1;
    if(agent.getAllotedOrder() == order1){
        console.log("order allotment working properly");
    }
    if(agent.restaurant == r1.getID()){
        console.log("restaurant allotment working properly");
    }
    console.log("-------------------------------------------------------------------------------");
}

function UnitTestingStations(){
    console.log("-------------------------------UnitTestingStations-----------------------------");
    let statiom = s1;
    console.log(s1.getRestaurant());
    if(s1.getRestaurant().length==2){
        console.log("Add Station and get Station working");
    }
    if(s1.getItem().length==11){
        console.log("Add Item and get Item working");
    } 
    console.log("-------------------------------------------------------------------------------");
}

function UnitTestingTrains(){
    console.log("-------------------------------UnitTestingTrains-----------------------------");
        let train = t1;
        if(t1.Return_RouteStation().size==4 && t1.Return_RouteTime().size==4){
            console.log("adding Station and retuen functions working properly");
        }
        if(t1.TrainNo == "12951"){
            console.log("train number allotement correct");
        }
        if(t1.Name == "mumbai rajdhani"){
            console.log("train name allotement correct");
        }
    console.log("-------------------------------------------------------------------------------");
}

UnitTestingManagement();
UnitTestingTime();
UnitTestingItems();
UnitTestingMenu();
UnitTestingOrders();
UnitTestingRestaurants();
UnitTestingAgents();
UnitTestingStations();
UnitTestingTrains();