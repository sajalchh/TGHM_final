import React, {useState} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import useToken from "../Hooks/useToken";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Database} from "../Logic/Database";
import {Management} from "../Logic/Management";

export default function MasterRouter(){
    const { token, setToken } = useToken();

    const restrictedPage = (restrictedComponent, redirectComponent) => {
        return token ? restrictedComponent : redirectComponent;
    }

    const timeout = { enter: 800, exit: 400 };
    return(
        <div className="master-router-wrapper">
            <TransitionGroup component="div">
                <CSSTransition timeout={timeout} classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        {!token ? <Login setToken={setToken} /> : <Redirect to="/dashboard" />}
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                    <Route path="/dashboard">
                        {restrictedPage(<Dashboard />, <Login setToken={setToken}/> )}
                    </Route>
                </Switch>
            </BrowserRouter>
                    </CSSTransition>
            </TransitionGroup>
        </div>
    )
}