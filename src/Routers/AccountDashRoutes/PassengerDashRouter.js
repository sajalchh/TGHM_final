import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import PassengerHomePage from "../../Pages/DashBoardPages/Passenger/PassengerHomePage";
import PassengerOrderPage from "../../Pages/DashBoardPages/Passenger/PassengerOrderPage";

export default function PassengerDashRouter(props){
    let match = useRouteMatch();
    return (
        <div className="agent-dash-router">
            <Switch>
                <Route exact path={`${match.path}`}>
                    <PassengerHomePage {...props} />
                </Route>
                <Route path={`${match.path}/home`}>
                    <PassengerHomePage {...props} />
                </Route>
                <Route path={`${match.path}/order`}>
                    <PassengerOrderPage {...props} />
                </Route>
            </Switch>
        </div>
    )
}