import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { PrimaryText } from "../common/text/PrimaryText.styles";

const SocialMedia = () => {
  return (
    <StyledSocial>
      <PrimaryText $color="secondary-color" className="mb-5">
        تواصل معنا على السوشيال ميديا
      </PrimaryText>
      <Row className="justify-content-center">
        <Col xs={6} md={3}>
          <a href="#" className="social-link twitter">
            <FaTwitter />
            <span>تويتر</span>
          </a>
        </Col>
        <Col xs={6} md={3}>
          <a href="#" className="social-link facebook">
            <FaFacebook />
            <span>فيسبوك</span>
          </a>
        </Col>
        <Col xs={6} md={3}>
          <a href="#" className="social-link instagram">
            <FaInstagram />
            <span>إنستجرام</span>
          </a>
        </Col>
      </Row>
    </StyledSocial>
  );
};

const StyledSocial = styled.div`
  margin: var(--section-spacing) 0;
  text-align: center;
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    border-radius: 10px;
    transition: transform 0.3s ease;
    text-decoration: none;
    font-size: 4rem;

    &:hover {
      transform: translateY(-5px);
    }

    i {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    span {
      font-size: 2rem;
      font-weight: bold;
    }

    &.twitter {
      border: 1px solid #1da1f2;
      color: #1da1f2;
    }
    &.facebook {
      border: 1px solid #1877f2;
      color: #1877f2;
    }
    &.instagram {
      border: 1px solid #e1306c;
      color: #e1306c;
    }
  }
`;

export default SocialMedia;
