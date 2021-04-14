import React, {useState} from 'react';
import './App.css';
import "antd/dist/antd.css";
import MasterRouter from "./Routers/MasterRouter";
import {AddData} from "./Logic/addingData";
import {Management} from "./Logic/Management";

// function App() {
//     // Database.readState();
//     const [management, setManagement] = useState();
//     setManagement(Management);
//     AddData();
//     return (
//         <MasterRouter />
//         )
// }

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            management: Management.getInstance()
        };
    }

    setManagement(manage){
        this.setState({management: manage});
    }

    componentWillMount() {
        AddData();
        this.setManagement(Management.getInstance());
        console.log(Management.Customers);
    }

    render(){
        let manageHook = {management: this.state.management, setManagement: this.setManagement}
        return(
            <MasterRouter manageHook={manageHook}/>
        )
    }
}

export default App;
