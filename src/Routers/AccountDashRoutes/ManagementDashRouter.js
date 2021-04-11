import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import ManagementHomePage from "../../Pages/DashBoardPages/Management/ManagementHomePage";
import ManagementStatsPage from "../../Pages/DashBoardPages/Management/ManagementStatsPage";
import ManagementRailwaysPage from "../../Pages/DashBoardPages/Management/ManagementRailwaysPage";

export default function ManagementDashRouter(props){
    let match = useRouteMatch();
    return (
        <div className="agent-dash-router">
            <Switch>
                <Route exact path={`${match.path}`}>
                    <ManagementHomePage {...props} />
                </Route>
                <Route path={`${match.path}/home`}>
                    <ManagementHomePage {...props} />
                </Route>
                <Route path={`${match.path}/stats`}>
                    <ManagementStatsPage {...props} />
                </Route>
                <Route path={`${match.path}/railway`}>
                    <ManagementRailwaysPage {...props} />
                </Route>
            </Switch>
        </div>
    )
}