import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import {StyledRow } from "./stats.styles";
import CardStats from "./CardStats";
import { TitleSection } from "../../common/text/TitleSection";

function Stats() {
  return (
    <Container className="stats-section">
      <TitleSection>
        <PrimaryText $color="secondary-color">إحصاءات</PrimaryText>
        <SecondaryText>
          نفتخر في مؤسسة العين الحديثة للمقاولات بتقديم خدمات متميزة تحقق رضا
          العملاء من خلال مشاريع ناجحة ومستدامة, تعرف على إحصاءاتنا وأرقامنا
          التي تعكس نجاحاتنا وإنجازاتنا على مر السنين.
        </SecondaryText>
      </TitleSection>
      <StyledRow>
        <CardStats title={"مشاريع مكتملة بنجاح"} number={"150+"} />

        <CardStats
          title={"أعوام من الخبرة في مجال البناء والتشييد"}
          number={"20+"}
        />

        <CardStats title={"عملاء راضين عن خدماتنا"} number={"200+"} />

        <CardStats title={"فريق عمل متخصص ومحترف"} number={"50+"} />

        <CardStats
          title={"جوائز وشهادات تقدير في مجال البناء"}
          number={"10+"}
        />
        <CardStats
          title={" المساحات المبنية بالمتر مربع"}
          number={"500,000+"}
        />
      </StyledRow>
    </Container>
  );
}

export default Stats;
