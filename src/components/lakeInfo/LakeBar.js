import React from 'react';
import Forecast from './Forecast';
import LakeStatus from './LakeStatus';
import {
    Row,
    Col,
    Container
} from "react-bootstrap";

function LakeBar(props) {

    // Props setup for variable access
    const lake = props.lake

    // HTML for each lake's status and information box
    return(
            <Container className='p-3' style={{border: "1px solid black"}}>

                    <Row>
                        <h5>{lake.lake_name}</h5>
                    </Row>

                    <Row>
                        {/*Spacing column*/}
                        <Col sm={3}></Col>
                        <Col>
                            <h6>10 Day Forecast</h6>
                        </Col>
                        
                    </Row>

                    {/*Row for displaying the 10 day forecast table and the status of the lake*/}
                    <Row>
                        <Col sm={3}>
                            <LakeStatus lake={lake}></LakeStatus>
                        </Col>
                        <Col><Forecast lake={lake}></Forecast></Col>
                    </Row>
            </Container>
    )
}

export default LakeBar;