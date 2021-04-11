import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import AgentHomePage from "../../Pages/DashBoardPages/Agent/AgentHomePage";
import AgentOrderPage from "../../Pages/DashBoardPages/Agent/AgentOrderPage";

export default function AgentDashRouter(props){
    let match = useRouteMatch();
    return (
        <div className="agent-dash-router">
            <Switch>
                <Route exact path={`${match.path}`}>
                    <AgentHomePage {...props}/>
                </Route>
                <Route path={`${match.path}/home`}>
                    <AgentHomePage {...props}/>
                </Route>
                <Route path={`${match.path}/order`}>
                    <AgentOrderPage {...props}/>
                </Route>
            </Switch>
        </div>
    )
}