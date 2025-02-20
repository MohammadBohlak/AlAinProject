import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import BoxInfo from "./boxInfo/BoxInfo";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <Row className="g-4">
        <BoxInfo
          data={{
            title: "العنوان",
            text: "شارع العين, الرياض, الممكلة العربية السعودية.",
            icon: <FaLocationDot/>,
          }}
        />
        <BoxInfo
          data={{
            title: "الهاتف",
            text: "+963 998 026 793",
            icon: <FaPhoneAlt/>,
          }}
        />
        <BoxInfo
          data={{
            title: "البريد الإلكتروني",
            text: "info@alain-modern.com",
            icon: <MdEmail/>,
          }}
        />
      </Row>
    </StyledContactInfo>
  );
};

const StyledContactInfo = styled.div`
  margin-bottom: var(--section-spacing);
`;

export default ContactInfo;
