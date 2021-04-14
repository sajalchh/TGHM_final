import {Form, Input, Button, Space, Select, TimePicker, Col, Row, InputNumber} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styled from "styled-components";
import React from "react";
import {Management} from "../../Logic/Management";

export default function RouteForm(){
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  const HeadingStyled = styled.h2`
        font-size: 1.5rem;
        font-weight: 600;
    `

  return (
      <div>
            <HeadingStyled>Fill in the form to add a Train</HeadingStyled>
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        <Row style={{width: "100%"}}>
                    <Col offset={2} span={10}>
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
                    <Col offset={2} span={10}>
                        <Form.Item
                            label="Number"
                            name="number"
                            rules={[
                                {
                                    required: true,
                                    message: "Number required"
                                }
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Col>
                </Row>
      <Form.List name="stations">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'first']}
                  fieldKey={[fieldKey, 'first']}
                  rules={[{ required: true, message: 'Missing Station Field' }]}
                >
                    <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a station"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                Management.stationListForStoring.map((station, index) => (
                                    <Select.Option key={index} value={index}>{station.name}</Select.Option>
                                ))
                            }
                        </Select>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'last']}
                  fieldKey={[fieldKey, 'last']}
                  rules={[{ required: true, message: 'Missing last name' }]}
                >
                  <TimePicker />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Station in Route
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
  );
};