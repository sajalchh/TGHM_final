import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import RestaurantHomePage from "../../Pages/DashBoardPages/Restaurant/RestaurantHomePage";
import RestaurantOrdersPage from "../../Pages/DashBoardPages/Restaurant/RestaurantOrdersPage";
import RestaurantMenuPage from "../../Pages/DashBoardPages/Restaurant/RestaurantMenuPage";
import RestaurantAgentsPage from "../../Pages/DashBoardPages/Restaurant/RestaurantAgentsPage";

export default function RestaurantDashRouter(props){
    let match = useRouteMatch();
    return (
        <div className="restaurant-dash-router">
            <Switch>
                <Route exact path={`${match.path}`}>
                    <RestaurantHomePage {...props} />
                </Route>
                <Route path={`${match.path}/home`}>
                    <RestaurantHomePage {...props} />
                </Route>
                <Route path={`${match.path}/orders`}>
                    <RestaurantOrdersPage {...props} />
                </Route>
                <Route path={`${match.path}/menu`}>
                    <RestaurantMenuPage {...props} />
                </Route>
                <Route path={`${match.path}/agents`}>
                    <RestaurantAgentsPage {...props} />
                </Route>
            </Switch>
        </div>
    )
}