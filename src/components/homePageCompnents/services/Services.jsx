import React from "react";
import {
  LeftServices,
  RightServices,
  StyledServices,
  TitleServices,
} from "./services.styles";
import {Row } from "react-bootstrap";
import Logo from "../../common/Logo/Logo";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import SwiperServices from "../swiperSevices/SwiperServices";

function Services(props) {
  return (
    <StyledServices>
      <TitleServices>
        <PrimaryText>خدماتنا</PrimaryText>
        <SecondaryText>
          نرحب بكم في مؤسسة العين الحديثة، حيث نقدم مجموعة متكاملة من الخدمات
          المميزة في مجال المقاولات والهندسة. نحن نتفهم أهمية الجودة والدقة في
          المشاريع الإنشائية، ونسعى لتقديم حلول مبتكرة وشاملة تناسب احتياجات
          عملائنا.
        </SecondaryText>
      </TitleServices>
      <RightServices md={6}>
        <Logo color="white" />
      </RightServices>
      <LeftServices md={6}>
        <Row className="h-100">
          <SwiperServices />
        </Row>
      </LeftServices>
    </StyledServices>
  );
}

export default Services;
