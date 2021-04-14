import React from 'react';
import {DatePicker, Col, Form, Input, Row, Button, message} from "antd";
import styled from "styled-components";
import {Agent} from "../../Logic/Agent";

export default function AgentForm({restaurant}){

    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ',errorInfo);
    }

    const handleSubmit = (values) => {
        // Function to Add Station

        message.success("Station Created");
    }

    const HeadingStyled = styled.h2`
        font-size: 1.5rem;
        font-weight: 600;
    `

    return (
        <div>
            <HeadingStyled>Fill in the form to add a Station</HeadingStyled>
            <Form
                name="basic"
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                scrollToFirstError
            >
                <Row style={{width: "100%"}}>
                    <Col span={24}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Name required"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{width: "100%"}}>
                    <Col span={12}>
                        <Form.Item
                            label="Captcha"
                            extra="We make sure that you are human"
                        >
                            <Row gutter={8}>
                                <Col span={12}>
                                    <Form.Item
                                        name="captcha"
                                        noStyle
                                        rules={[
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Button>Get Captcha</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={5}>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}