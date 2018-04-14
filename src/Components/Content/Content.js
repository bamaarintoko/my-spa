import React from "react";
import {Card, CardTitle, Col, Row} from "react-materialize";

export const Wrapper = ({children}) => (
    // console.log(children)
    <Row key={children}>
        <Col m={2} s={12}>
        </Col>
        <Col m={8} s={12} style={{borderBottomWidth: 1, borderBottomColor: 'black'}}>
            {children}

        </Col>

        <Col m={2} s={12}>
        </Col>
    </Row>
);