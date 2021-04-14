import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import PassengerForm from "../Pages/Registration/PassengerForm";
import RestaurantForm from "../Pages/Registration/RestaurantForm";

export default function RegistrationRouter({manageHook}){
    let match = useRouteMatch();
    return (
        <div className="registration-router">
            <Switch>
                <Route exact path={`${match.path}`}>
                    <PassengerForm manageHook={manageHook}/>
                </Route>
                <Route path={`${match.path}/passenger`}>
                    <PassengerForm manageHook={manageHook}/>
                </Route>
                <Route path={`${match.path}/restaurant`}>
                    <RestaurantForm />
                </Route>
            </Switch>
        </div>
    )
}