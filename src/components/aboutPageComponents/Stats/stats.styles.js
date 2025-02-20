import styled from "styled-components";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { Card, Row } from "react-bootstrap";

const StyledCardStats = styled(Card)`
border-radius: 20% 0% 20% 0%; 
  background-color: white;
  text-align: center;
  min-height: 200px;
  height: 100%;
  margin-top: 30px;
  box-shadow: 0px 0px 10px var(--main-color) inset;
  border: none;
  ${SecondaryText},
  ${PrimaryText}{
    font-weight: bold;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  } 
  ${SecondaryText}{
    font-size: 4rem;
  }
  ${PrimaryText} {
    font-size: 6rem ;
    opacity: 0.8;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    /* padding: 50px; */
    flex: 1;
  }
`;
const StyledRow = styled(Row)`
  row-gap: 12px;
`;

export {StyledCardStats, StyledRow }