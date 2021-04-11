import React from 'react';
import {Row, Col, Card, List} from "antd";
import styled from "styled-components";
import {Management} from "../../../Logic/Management";
import {Order} from "../../../Logic/Order";



export default function AgentOrderPage(props){
    // let allotedOrder = props.account.getAllotedOrder();
    let allotedOrder = props.account.getAllotedOrder();
    let restaurant = Management.ApprovedRestaurants.get(props.account.restaurant);
    // console.log(allotedOrder);
    const MenuItem = styled.p`
        font-weight: 600;
        margin-left: 5rem
    `

    return(
        <div className="agent-account-order">
            <Row>
                <Col span={12}>
                    <h1>Order Summary</h1>
                </Col>
            </Row>
            <Row>
                {
                    allotedOrder &&
                        <List
                  size="large"
                  header={<h1 style={{fontSize: "2rem"}}>Order Id {allotedOrder.orderId}</h1>}
                  bordered
                  dataSource={restaurant.getOrderDetails(allotedOrder.orderId)}
                  renderItem={item => (
                      <List.Item style={{borderWidth: "1px 0 1px 0", borderStyle: "solid"}}>
                          <Row style={{width: "100%", fontSize: "1.3rem"}}>
                              <Col span={12}>
                                  <MenuItem>{item.name}</MenuItem>
                              </Col>
                              <Col span={12}>
                                  <p style={{float: "right", marginRight: "5rem"}}>Price: {item.price}Rs</p>
                              </Col>
                          </Row>
                      </List.Item>
                  )}
                />
                }
                {
                    !allotedOrder && <p>No Order Alloted</p>
                }
            </Row>
        </div>
    )
}