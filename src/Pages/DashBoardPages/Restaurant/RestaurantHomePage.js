import React from "react";
import Colors from "../../../Design/Colors";
import styled from "styled-components";
import {Avatar, Col, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";

export default function RestaurantHomePage(props){
    const colorStyles = {
        headingColor: Colors.black,
    }

    const Heading = styled.h1`
        font-size: 2rem;
        font-weight: 600;
        color: ${colorStyles.headingColor};
    `

    return(
        <div className="passenger-account-home">
            <Row>
                <Col span={12}>
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<UserOutlined/>}
                    />
                    <Heading>
                        {props.account.getName()}
                    </Heading>
                </Col>
            </Row>
            <Row>

            </Row>
        </div>
    )
}