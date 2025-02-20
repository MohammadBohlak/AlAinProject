import { Collapse } from "bootstrap";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";

export const StyledServices = styled(Row)`
  min-height: 500px;
  margin-top: var(--section-spacing);
  margin-right:0 ;
  position: relative;
  width: 100%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  flex: 1;
 
  &::before {
    content: "";
    max-height: 100%;
    height: 100%;
    width: 100%;
    background-color: var(--main-color);
    position: absolute;
    right: -115px;
    top: 0;
    z-index: -10;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  @media (max-width: 768px) {
        &::before{
            right: 0px;
            left: 0;
            border-radius:0;
        }
    }
`
export const TitleServices = styled(Row)`
 ${PrimaryText},${SecondaryText}{
    text-align:center;
    color: white !important;
    width:80%;
    @media (max-width: 768px) {
        width:100%
    }
}
${PrimaryText}{
    font-size: 8rem !important;
    margin-top: var(--section-spacing)
  }
`
export const RightServices = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  picture {
      width: 100%;
    }
    @media (max-width: 768px) {
        picture {
            width: 20%;
          }
    }
    `;
export const LeftServices = styled(Col)`
    height:100%;
    padding: 20px 20px;
`;
