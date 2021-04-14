import React from 'react';
import {DatePicker, Col, Form, Input, Row, Button, message} from "antd";
import styled from "styled-components";
import {Agent} from "../../Logic/Agent";

export default function AgentForm({restaurant}){

    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ',errorInfo);
    }

    const handleSubmit = (values) => {
        let a = new Agent(values.firstname + " " + values.lastname, values.username, values.password, restaurant, null, null);
        message.success("Agent Created");
    }

    const HeadingStyled = styled.h2`
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
    `

    return (
        <div>
            <HeadingStyled>Fill in the form to sign up as Agent</HeadingStyled>
            <Form
                name="basic"
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                scrollToFirstError
            >
                <Row style={{width: "100%"}}>
                    <Col span={24}>
                        <Form.Item
                            label="First Name"
                            name="firstName"
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
                    <Col span={24}>
                        <Form.Item
                            label="Last Name: "
                            name="lastName"
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
                <Row style={{width:"100%"}}>
                    <Col span={24}>
                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid Email',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{width: "100%"}}>
                    <Col span={24}>
                        <Form.Item
                            label="Enter Username: "
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Username needed",
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item
                            label="Enter Password: "
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Password needed",
                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Confirm Password: "
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm password'
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value){
                                        if (!value || getFieldValue('password') === value){
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error("Passwords don't match"))
                                    }
                                })
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{width: "100%"}}>
                    <Col span={12}>
                        <Form.Item
                            label="Phone Number: "
                            name="phoneNo"
                            rules={[
                                {
                                    required: true,
                                    message: "Phone Number required",
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6} offset={3} style={{objectAlign: "center"}}>
                        <Form.Item
                            label="Date of Birth: "
                            name="dob"
                            rules={[
                            ]}
                        >
                            <DatePicker />
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