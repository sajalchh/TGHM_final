import React from 'react';
import {Col, Row} from "antd";
import StationForm from "../../Registration/StationForm";
import RouteForm from "../../Registration/RouteForm";

export default function ManagementOrderPage(){
    return (
        <div>
            <div className="add-station">
                <Row>
                    <Col offset={2} span={20}>
                        <StationForm />
                    </Col>
                </Row>
            </div>
            <div className="add-train">
                <Row>
                    <Col offset={2} span={20}>
                        <RouteForm />
                    </Col>
                </Row>
            </div>
        </div>
    )
}