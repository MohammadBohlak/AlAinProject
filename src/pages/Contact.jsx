import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "../components/contactPageCompnents/ContactInfo";
import ContactForm from "../components/contactPageCompnents/contactForm/ContactForm";
import SideText from "../components/contactPageCompnents/sideText/SideText";
import SocialMedia from "../components/contactPageCompnents/SocailMedia";
import FAQSection from "../components/contactPageCompnents/FAQSection/FAQSection";
import { Title, Meta } from "react-head";

const Contact = () => {
  return (
    <>
      <Title>اتصل بنا - مؤسسة العين الحديثة</Title>
      <Meta
        name="description"
        content="تواصل مع فريقنا لاستشارات مجانية وعروض أسعار"
      />

      <StyledContact>
        <Container>
          <ContactInfo />
          <Row>
            <Col md={6}>
              <SideText />
            </Col>
            <Col md={6}>
              <ContactForm />
            </Col>
          </Row>
          <SocialMedia />
          <FAQSection />
        </Container>
      </StyledContact>
    </>
  );
};

const StyledContact = styled.section`
  padding: var(--section-spacing) 0;
  background-color: var(--neutral-white);
  h1 {
    color: var(--primary-dark);
    margin-bottom: 20px;
  }
  .lead {
    color: var(--primary-dark);
    font-size: 2.5rem;
  }
  .links {
    margin-top: 30px;
    .btn {
      font-size: 1.8rem;
      padding: 10px 20px;
    }
  }
`;

export default Contact;
