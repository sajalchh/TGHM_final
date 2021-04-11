import React from 'react';
import {Route, Switch, useRouteMatch, userRouteMatch} from 'react-router-dom';
import PassengerStationPage from "../Pages/DashBoardPages/Passenger/PassengerStationPage";
import PassengerItemPage from "../Pages/DashBoardPages/Passenger/PassengerItemPage";
import PassengerBookingPage from "../Pages/DashBoardPages/Passenger/PassengerBookingPage";

export default function PassengerOrderRouter(){
    let match = useRouteMatch();
    return (
        <div className="passenger-order-router">
            <Switch>
                <Route exact path={`${match.path}`}>
                    <PassengerStationPage />
                </Route>
                <Route path={`${match.path}/items`}>
                    <PassengerItemPage />
                </Route>
                <Route path={`${match.path}/booking`}>
                    <PassengerBookingPage />
                </Route>
            </Switch>
        </div>
    )
}