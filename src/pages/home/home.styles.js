import styled from "styled-components";
import { PrimaryText } from "../../components/common/text/PrimaryText.styles";
import { SecondaryText } from "../../components/common/text/SecondaryText.styles";
import { Col, Row } from "react-bootstrap";

export const StyledHome = styled.section`
  #services,
  #ourProjects {
    scroll-margin-top: 100px; /* تعيين مسافة التمرير العلوية */
  }
`;
export const HomeSection = styled(Row)`
  margin-top: var(--section-spacing);
`;
export const HomeText = styled(Col)`
  @media screen and (max-width: 768px) {
    ${PrimaryText} {
      text-align: center;
    }
  }
  ${SecondaryText} {
    padding-right: 10px;
    position: relative;
  }
  ${SecondaryText}::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border: 5px solid var(--main-color);
    border-right-color: transparent;
    border-bottom-color: transparent;
    rotate: -45deg;
    right: -9px;
    top: 11px;
  }
`;
export const HomeImg = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    width: 300px;
    height: 300px;
  }
  img.circle {
    border-radius: 50%;
    align-self: flex-end;
  }
  img.square {
    border-radius: 20px;
    object-fit: cover;
    align-self: flex-start;
  }
  @media screen and (max-width: 768px) {
    img.circle,
    img.square {
      align-self: center;
    }
  }
`;
