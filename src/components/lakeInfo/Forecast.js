import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
  
function Forecast(props) { 
    
    // Props setup for variable access
    const lake = props.lake
    const days = lake.days;

    // day_infos is a list that contains all of the data for each day the lake was monitored
    const day_infos = []
    let x = 1
    for (const day in days) {
        days[day]["day_index"] = x++
        day_infos.push(days[day])
    }

    // HTML for displaying each of the days in the 10 day forecast
    return(
        <Container>
            <Row>
                {
                    day_infos.map((x) => (
                        <Col pb="1">
                            <Row sm={3} style={{border: "1px solid rgb(0, 0, 0)"}} className="p-2">
                                Day {x.day_index}
                            </Row>
                            <Row style={{border: "1px solid rgb(0, 0, 0)"}} className="p-2">
                                Algae Level: {x.algae_level.$numberInt}
                            </Row>
                            <Row style={{border: "1px solid rgb(0, 0, 0)"}} className="p-2">
                                Percent Certainty: {x.percent_certainty.$numberInt}
                            </Row>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Forecast;