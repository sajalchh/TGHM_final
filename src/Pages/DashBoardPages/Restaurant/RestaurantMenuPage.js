import React from 'react';
import {Row, List, Col} from "antd";
import styled from "styled-components";

export default function RestaurantOrderPage(props){

    const MenuItem = styled.p`
        font-weight: 600;
        margin-left: 5rem
    `

    return (
        <div>
            <List
              size="large"
              header={<h1 style={{fontSize: "2rem"}}>Current Menu</h1>}
              bordered
              dataSource={props.account.Menu.getMenuItems()}
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
        </div>
    )
}