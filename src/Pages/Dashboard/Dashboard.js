import React from 'react';
import DashBoard from "../../Components/DashBoard/DashBoard";
import AgentDashRouter from "../../Routers/AccountDashRoutes/AgentDashRouter";
import RestaurantDashRouter from "../../Routers/AccountDashRoutes/RestaurantDashRouter";
import ManagementDashRouter from "../../Routers/AccountDashRoutes/ManagementDashRouter";
import PassengerDashRouter from "../../Routers/AccountDashRoutes/PassengerDashRouter";
import {Management} from "../../Logic/Management";
import {Customer} from "../../Logic/Customer";
import {AccountType} from "../../Logic/Enum";

const allAccounts = [
    {
        id: 1,
        name: "David",
        type: "",
        username: "David123",
        password: "123",
    },
]

const AgentLinks = [
    {link: "/dashboard/", item:"Home"},
    {link: "/dashboard/order", item:"Orders"},
]

const RestaurantLinks = [
    {link: "/dashboard/", item:"Home"},
    {link: "/dashboard/orders", item:"Orders"},
    {link: "/dashboard/menu", item:"Menu"},
    {link: "/dashboard/agents", item:"Agents"},
]

const ManagementLinks = [
    {link: "/dashboard/", item:"Home"},
    {link: "/dashboard/stats", item:"Statistics"},
    {link: "/dashboard/railway", item:"Railways"},
]

const PassengerLinks = [
    {link: "/dashboard/", item:"Home"},
    {link: "/dashboard/order", item:"Order"}
]

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            account: {}
        };
    }

    componentWillMount() {
        let tokenString = sessionStorage.getItem('token');
        if (!tokenString){
            tokenString = localStorage.getItem('token');
        }
        const userToken = JSON.parse(tokenString);
        console.log(userToken);
        if (userToken === "manager"){
            this.setState({account: Management.getInstance()})
        }
        let l = Management.loginC.get(userToken);
        console.log(l);
        if (l !== undefined){
            this.setState({account: l});
        }
        let r = Management.loginR.get(userToken);
        console.log(r);
        if (r !== undefined){
            this.setState({account: r});
        }
        let a = Management.loginA.get(userToken);
        if (a !== undefined){
            this.setState({account: a});
        }
    };

    renderDashBoard(){
        if (this.state.account.getType() === AccountType.Agent){
            return (
                <DashBoard menu={AgentLinks}>
                    <div style={{minHeight: "90vh"}}>
                        <AgentDashRouter account = {this.state.account} />
                    </div>
                </DashBoard>
            );
        }
        if (this.state.account.getType() === AccountType.Restaurant){
            return (
                <DashBoard menu={RestaurantLinks}>
                    <div style={{minHeight: "90vh"}}>
                        <RestaurantDashRouter account = {this.state.account} />
                    </div>
                </DashBoard>
            );
        }
        if (this.state.account.getType() === AccountType.Management){
            return (
                <DashBoard menu={ManagementLinks}>
                    <div style={{minHeight: "90vh"}}>
                        <ManagementDashRouter account = {this.state.account} />
                    </div>
                </DashBoard>
            )
        }
        if (this.state.account.getType() === AccountType.Customer){
            return (
                <DashBoard menu={PassengerLinks}>
                    <div style={{minHeight: "90vh"}}>
                        <PassengerDashRouter account = {this.state.account} />
                    </div>
                </DashBoard>
            )
        }
    }


    render(){
        console.log(this.state);
        return(
            <div>
                {this.renderDashBoard()}
            </div>
        );
    }
}
