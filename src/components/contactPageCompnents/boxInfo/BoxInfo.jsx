import React from "react";
import { StyledBoxInfo } from "./boxInfo.styles";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { Col } from "react-bootstrap";

function BoxInfo({ data }) {
  // دالة لتحديد ما إذا كان النص يحتوي على رقم هاتف
  const isPhoneNumber = (text) => {
    const phoneRegex = /^\+?[0-9\s]+$/;
    return phoneRegex.test(text);
  };

  return (
    <>
      <Col xs={12} md={4}>
        <StyledBoxInfo>
          {data.icon}
          <PrimaryText>{data.title}</PrimaryText>
          <SecondaryText
            style={isPhoneNumber(data.text) ? { direction: "ltr" } : {}}
          >
            {data.text}
          </SecondaryText>
        </StyledBoxInfo>
      </Col>
    </>
  );
}

export default BoxInfo;
