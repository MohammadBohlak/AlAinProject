import React from "react";
import { Col } from "react-bootstrap";
import { StyledCardStats } from "./stats.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { PrimaryText } from "../../common/text/PrimaryText.styles";

function CardStats({ title, number }) {
  return (
    <Col xs={12} sm={6} md={4} lg={4}>
      <StyledCardStats>
        <StyledCardStats.Body>
          <SecondaryText>{title}</SecondaryText>
          <PrimaryText $color="secondary-color">{number}</PrimaryText>
        </StyledCardStats.Body>
      </StyledCardStats>
    </Col>
  );
}

export default CardStats;
