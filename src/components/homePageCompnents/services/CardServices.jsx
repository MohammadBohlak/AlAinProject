import React from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
import { SecondaryText } from "../../common/text/SecondaryText.styles";

function CardServices(props) {
  return (
    <StyledCardServices>
      <StyledCardBodyServices>
        {/* <Card.Text> */}
            <SecondaryText>
            {props.text}
            </SecondaryText>
        {/* </Card.Text> */}
      </StyledCardBodyServices>
    </StyledCardServices>
  );
}
const StyledCardServices = styled(Card)`
    width: 90%;
    height: 150px ;
    /* background-color: red; */
    box-shadow: 0px 0px 5px var(--secondary-color) !important;
    `
const StyledCardBodyServices = styled(Card.Body)`
    height: 100%; 
    display: flex; 
    justify-content: center;
    align-items: center;
`
export default CardServices;
