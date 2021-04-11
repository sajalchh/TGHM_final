import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import MasterRouter from "./Routers/MasterRouter";
import {AddData} from "./Logic/addingData";

function App() {
    // Database.readState();
    AddData();
    return (
        <MasterRouter />
        )
}

export default App;
