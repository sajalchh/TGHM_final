import React from 'react';
import  {Steps, message, Button} from "antd";
import PassengerStationPage from "./PassengerStationPage";
import './Passenger.css';
import PassengerItemPage from "./PassengerItemPage";
import PassengerBookingPage from "./PassengerBookingPage";
import {Order} from "../../../Logic/Order";

export default function PassengerOrderPage(props){
    const [current, setCurrent] = React.useState(0);
    const [train, setTrain] = React.useState(null);
    const [seatNo, setseatNo] = React.useState();
    const [orderItems, setOrderItems] = React.useState([]);

    const changeOrderItems = (itemList) => {
        setOrderItems(itemList);
    }

    const placeOrder = () => {
        let order = new Order(props.account, 0, orderItems, seatNo, train, null);
        order.updateOrderStatus(1);
        message.success('Order Placed!');
    }


    const steps = [
        {
            title: 'Select Station',
            content: <PassengerStationPage setTrain={setTrain} setseatNo={setseatNo} />,
        },
        {
            title: 'Select Item',
            content: <PassengerItemPage train={train} setOrderItems={changeOrderItems} orderItems={orderItems}/>,
        },
        {
            title: 'Booking',
            content: <PassengerBookingPage orderItems={orderItems} setOrderItems={changeOrderItems} />,
        },
    ];


    const next = () => {
        setCurrent(current + 1);
      };

    const prev = () => {
        setCurrent(current - 1);
    };


    return (
        <div>
            <Steps current={current}>
                {steps.map(item => (
                  <Steps.Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button disabled={!train} type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => placeOrder()}>
                        Place Order
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    )
}