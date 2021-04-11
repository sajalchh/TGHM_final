import React from 'react';
import DashBoardCard from "../../../Components/DashBoard/DashBoardCard";
import {Button, Card, Form, List, message, Select} from "antd";
import {Management} from "../../../Logic/Management";

export default function RestaurantOrderPage(props){
    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ',errorInfo);
    }

    const computeCost = (order) => {
        let cost = 0;
        for (let i = 0;i<props.account.getOrderDetails(order.orderId).length;i++){
            cost += props.account.getOrderDetails(order.orderId)[i].price;
        }
        return cost;
    }




    return (
        <div>
            {
                props.account.orderlist.map(function(value, index){
                    console.log(value);
                    return (
                        <Card title={"Order ID " + value.orderId} style={{ minWidth: "2rem", maxWidth:"32%" }}>
                              <List
                                  style={{margin: "1rem"}}
                                  size="small"
                                  header={<div>All Items</div>}
                                  bordered
                                  dataSource={props.account.getOrderDetails(value.orderId)}
                                  renderItem={item => (
                                      <List.Item style={{borderWidth: "1px", borderStyle: "solid"}}>
                                          <p>{item.name}</p>
                                      </List.Item>
                                  )}
                              />
                              <div>
                                  <div style={{textAlign: "center", padding: "0 0 1rem"}}>
                                      Total Cost: {computeCost(value)}
                                  </div>
                                  <Form
                                        name="basic"
                                        onFinish={(values) => {
                                            value.addAgent(values.agent);
                                            // for (let i = 0;i<props.account.getOrderDetails(value.orderId).length;i++){
                                            //     value.updateOrderStatus(2, props.account.getOrderDetails(value.orderId)[i])
                                            // }
                                            message.success("Agent Assigned");
                                        }}
                                        onFinishFailed={onFinishFailed}
                                        scrollToFirstError
                                    >
                                      <Form.Item
                                        label="Input Agent: "
                                        name="agent"
                                        rules = {[
                                            {
                                                required: true,
                                                message: "Input Station to get Items List",
                                            }
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Select an Agent: "
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            {
                                                props.account.getFreeAgents().map((agent, index) => (
                                                    <Select.Option key={agent.getID()} value={agent.getID()}>{agent.getName()}</Select.Option>
                                                ))
                                            }
                                        </Select>
                                    </Form.Item>
                                      <Form.Item>
                                          <Button type="primary" htmlType="submit">Select Agent</Button>
                                      </Form.Item>
                                  </Form>
                              </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}