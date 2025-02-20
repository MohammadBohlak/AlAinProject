import styled from "styled-components";
import { PrimaryText } from "../text/PrimaryText.styles";

export const StyledFooter = styled.footer`
  background: var(--main-color);
  color: white;
  margin-top: var(--section-spacing);
`;

export const StyledTopSection = styled.div`
  border-bottom: 2px solid var(--secondary-color);
`;

export const LogoBox = styled.div`
  img {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    picture {
      width: 20%;
      margin-bottom: 20px;
    }
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  a {
    color: white;
    font-size: 3rem;
    transition: color 0.3s;
    &:hover {
      color: var(--secondary-color);
      transform: translateY(-2px);
    }
  }
`;

export const FooterTitle = styled.div`
  ${PrimaryText} {
    font-size: 3rem;
    color: white;
  }
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--secondary-color);
`;

export const ContactInfo = styled.div`
  svg {
    font-size: 2rem;
    min-width: 25px;
    color: var(--secondary-color);
  }

  span {
    font-size: 2rem;
  }
`;

export const WorkingHours = styled.div`
  svg {
    color: var(--secondary-color);
    margin-top: 3px;
    margin-left: 3px;
  }

  p {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const StyledCopyright = styled.div`
  background: rgba(0, 0, 0, 0.15);
  p {
    font-size: 1.8rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    span {
      color: var(--secondary-color);
    }
  }
`;
