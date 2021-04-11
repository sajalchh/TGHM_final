import React from 'react';
import {Select, Col, Row, Form, Button, Input} from "antd";
import {Management} from "../../../Logic/Management";

export default function PassengerStationPage({setTrain, setseatNo}){
    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ',errorInfo);
    }

    const handleSubmit = (values) => {
        setTrain(Management.trainListForStoring[values.train]);
        setseatNo(values.seatNo);
        console.log(Management.trainListForStoring[values.train]);
    }

    console.log(Management.trainListForStoring);

    return (
        <div className="passenger-select-station">
            <Form
                name="basic"
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                scrollToFirstError
            >
            <Row>
                <Col span={6}>
                    <Form.Item
                        label="Input Train: "
                        name="train"
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
                            placeholder="Select a train"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                Management.trainListForStoring.map((train, index) => (
                                    <Select.Option key={index} value={index}>{train.Name}</Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Seat Number: "
                        name="seatNo"
                        rules={[
                            {
                                required: true,
                                message: "Seat Number required"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
                <Col span={2}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Form>
        </div>
    )
}