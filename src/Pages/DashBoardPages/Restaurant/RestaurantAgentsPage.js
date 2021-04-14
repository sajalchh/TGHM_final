import React from 'react';
import {List, Col, Row} from "antd";
import {Management} from "../../../Logic/Management";
import styled from "styled-components";
import AgentForm from "../../Registration/AgentForm";
import './Restaurant.css'

export default function RestaurantOrderPage(props){

    const Name = styled.div`
        font-weight: 600;
        font-size: 1.2rem;
    `

    return (
        <div>
            <Row>
                <Col span={24}>
                    <List
                      size="large"
                      header={<div>All Agents</div>}
                      bordered
                      dataSource={props.account.getAgents().map((value, index) => Management.agentList.get(value))}
                      renderItem={item => (
                          <List.Item style={{borderWidth: "1px", borderStyle: "solid"}}>
                              <Name>{item.getName()}</Name>
                              Status: {item.IsFree} <br/>
                              Successful Deliveries: {item.deliveredCount} <br/>
                              Failed Deliveries: {item.failedCount} <br />
                          </List.Item>
                      )}
                    />
                </Col>
            </Row>
            <Row>
                <Col offset={2} span={20}>
                    <div className="add-agent">
                        <AgentForm restaurant={props.account}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}