import React from 'react';
import RegistrationRouter from "../../Routers/RegistrationRouter";
import {Col, Layout, Row} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Colors from "../../Design/Colors";
import styled from "styled-components";
import './Registration.css';

export default function Registration(){

    const ColorStyle = {
        white: Colors.white,
        header: Colors.royalBlue,
        footer: Colors.grey,
    };

    const Heading = styled.h1`
        font-size: 2.5rem;
        color: ${ColorStyle.white};
        font-weight: 600;
    `

    const FooterStyle = styled.p`
        font-size: 1rem;
        font-weight: 600;
        text-align: right;
        font-style: italic;
        color: ${ColorStyle.white}
    `

    const HeaderStyle = {
        backgroundColor: ColorStyle.header,
    }

    const FooterDivStyle = {
        backgroundColor: ColorStyle.footer
    }

    const MiddleSectionStyle = {
        backgroundColor: ColorStyle.white,
        marginTop: "2rem",
        marginBottom: "2rem",
        borderRadius: "4px",
    }

    return(
        <div>
            <Layout>
                <Header style={HeaderStyle}>
                    <Heading>Register to TGHM</Heading>
                </Header>
                <Content>
                    <Row style={{width: "100%"}}>
                        <Col span={20} offset={2} style={MiddleSectionStyle}>
                            <Row style={{width: "100%"}}>
                                <Col span={18} offset={3}>
                                    <div className="registration-form">
                                        <RegistrationRouter />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Content>
                <Footer style={FooterDivStyle}>
                    <FooterStyle>Join Technology for Good Health Management and order on the move.</FooterStyle>
                </Footer>
            </Layout>
        </div>
    )
}