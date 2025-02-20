import React, { useState } from "react";
import Logo from "../../components/common/Logo/Logo";
import { StyledAbout } from "./about.styles";
import { Button, Card, Container, Nav } from "react-bootstrap";
import Stats from "../../components/aboutPageComponents/Stats/Stats";
import WhoUs from "../../components/aboutPageComponents/WhoUs";
import Mission from "../../components/aboutPageComponents/mission/Mission";
import OurTeam from "../../components/aboutPageComponents/ourTeam/OurTeam";
// import TimelineSection from "../../components/aboutPageComponents/timeLine/TimelineSection";
import { Title, Meta, Link } from "react-head";

function About(props) {
  return (
    <>
      <Title>تاريخنا | مؤسسة العين الحديثة</Title>
      <Meta property="og:title" content="خبرة 15 عامًا في المقاولات" />
      <Link rel="canonical" href="/about" />

      <Container>
        <StyledAbout>
          <Logo color="blue" />
          <WhoUs />
          <Mission />

          <Stats />
          <OurTeam />
        </StyledAbout>
        {/* <TimelineSection/> */}
      </Container>
    </>
  );
}

export default About;
