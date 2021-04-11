import React from 'react';
import {Database} from "../../../Logic/Database";
import {Management} from "../../../Logic/Management";
import {Time} from "../../../Logic/Time";
import {Button, Collapse, message} from "antd";
import {Item} from "../../../Logic/Item";

export default function PassengerItemPage(props){

    let [mapD, mapP] = Database.getMenu(props.train, new Time(23, 59));

    const handleClick = (item) => {
        let newOrderList = props.orderItems;
        newOrderList.push(item);
        message.success(item.name + ' added to cart.');
        props.setOrderItems(newOrderList);
    }

    const renderList = () => {
        let rows = [];
        console.log(mapD);
        for (const [keys, values] of mapD.entries()){
            rows.push(
                <Collapse.Panel header={keys} key={keys}>
                    <Collapse accordion>
                        {
                            values.map(function (item, index){
                                let l = Management.ApprovedRestaurants.get(item.restaurant);
                                let name;
                                if (l){
                                    name = l.getName();
                                }
                                else{
                                    name = null;
                                }
                                return (
                                    <Collapse.Panel key={index} header={item.name}>
                                    <p>
                                        Price: {item.price}<br/>
                                        Restaurant: {name}<br/>
                                        Expected Time of Delivery: {mapP.get(keys)[index].hour}:{mapP.get(keys)[index].min} <br />
                                        <Button onClick={(e) => handleClick(item)}>Add to Cart</Button>
                                    </p>
                                </Collapse.Panel>
                                )
                            })
                        }
                    </Collapse>
                </Collapse.Panel>
            );
        }
        console.log(rows);
        return rows;
    }


    return (
        <div>
            <Collapse accordion style={{margin: "2rem"}}>
                {renderList()}
            </Collapse>
        </div>
    )
}