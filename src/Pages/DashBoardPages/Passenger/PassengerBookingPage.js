import React, {useEffect} from 'react';
import {Button, Card, Col, Collapse, Row} from "antd";
import {func} from "prop-types";

export default function PassengerBookingPage(props){

    const removeItem = (item) => {
        let newOrderList = props.orderItems;
        let index = newOrderList.indexOf(item);
        if (index > -1) {
            newOrderList.splice(index, 1);
        }
        props.setOrderItems(newOrderList);
    }

    const calculateCost = () => {
        let cost = 0;
        for (let i = 0; i<props.orderItems.length;i++){
            cost += props.orderItems[i].price;
        }
        return cost;
    }

    useEffect(() => {

    }, [props.orderlist])

    console.log(props.orderItems);
    return (
        <div>
            <Row>
                <Col span={12}>
                    <Card title="Cart" className="cart-card">
                        <Collapse accordion>
                            {
                                props.orderItems.map(function (value, index){
                                    return(
                                        <Collapse.Panel key={index} header={value.name}>
                                            <p>
                                                Price: {value.price} <br/>
                                                <Button onClick={() => {removeItem(value)}}>Remove from Cart</Button>
                                            </p>
                                        </Collapse.Panel>
                                    )
                                })
                            }
                        </Collapse>
                    </Card>
                </Col>
                <Col span = {12}>
                    <Card title="Booking Summary" className="booking-card">
                        <p>
                            Total Cost: {calculateCost()}
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}