import React from 'react';
import { Badge, Container, Row, Col } from 'react-bootstrap';

function LakeStatus(props) { 
     
    // Getting the current time to display when the website was last updated
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    // Instantiating variables to contain averages
    let averageAlgaeLevel = 0;
    let averagePercentCertainty = 0;

    // Validating and parsing the input values from the lake_data.json file
    for (let day in props.lake.days) {

        let algae_level = props.lake.days[day]["algae_level"]["$numberInt"]
        let percent_certainty = props.lake.days[day]["percent_certainty"]["$numberInt"]

        // If algae_level is not in the range of 0-100, print out the invalid algae level to the console
        if (100 >= parseInt(algae_level) && parseInt(algae_level) >= 0) {
            averageAlgaeLevel += parseInt(algae_level)

        } else {
            console.log("Invalid Algae Level: " + algae_level)
        }

        // If percent_certainty is not in the range of 0-100, print out the invalid percent certainty to the console
        if (100 >= parseInt(percent_certainty) && parseInt(percent_certainty) >= 0) {
            averagePercentCertainty += parseInt(percent_certainty)

        } else {
            console.log("Invalid Percent Certainty: " + percent_certainty)
        }
        
    }
    
    // Get the averages for algae level and percent certainty. There are 10 days, so we divide the sum by 10
    averageAlgaeLevel /= 10
    averagePercentCertainty /= 10

    // Instantiating the status/color variables for each lake
    let algae_status = ""
    let badge_color = ""

    // Checking algae levels, if <= 25 it is good, > 25 and <= 50 it is a warning, > 50 is danger
    if (averageAlgaeLevel <= 25) {
        algae_status = "Good"
        badge_color = 'success'
    } else if (averageAlgaeLevel <= 50) {
        algae_status = "Warning"
        badge_color = 'warning'
    } else {
        algae_status = "Danger"
        badge_color = 'danger'
    }

    // HTML for displaying the lake algae status
    return(
        <Container sm={8}>
            <Row>
                <Col>
                    Algae Status:
                    <Badge pill bg={badge_color} className="m-2">
                        {algae_status}
                    </Badge>
                </Col>
            </Row>
            <Row>
                Average Percent Certainty: {averagePercentCertainty}%
            </Row>
            <Row>
                Last Updated: {time}
            </Row>
        </Container>
    )
}

export default LakeStatus;