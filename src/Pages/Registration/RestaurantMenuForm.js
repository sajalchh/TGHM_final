import React from 'react';
import {DatePicker, Col, Form, Input, Row, Button, message, InputNumber, Select} from "antd";
import styled from "styled-components";
import {Management} from "../../Logic/Management";
import {FoodType} from "../../Logic/Enum";

export default function RestaurantMenuForm(){
    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ',errorInfo);
    }

    const handleSubmit = (values) => {
        // Function to Add Station

        message.success("Item Created");
    }

    const HeadingStyled = styled.h2`
        font-size: 1.5rem;
        font-weight: 600;
    `
    const StringIsNotNumber = value => isNaN(Number(value)) === true;

    return (
        <div>
            <HeadingStyled>Fill in the form to add an Item</HeadingStyled>
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
                    <Col span={8}>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: "Price required"
                                }
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
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
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select an Item type"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                Object.keys(FoodType).filter(StringIsNotNumber).map((type, index) => (
                                    <Select.Option value={index} key={index}>{type}</Select.Option>
                                ))
                            }
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}