import { Accordion } from "react-bootstrap";
import styled from "styled-components";

export const StyledAccordionHeader = styled(Accordion.Header)`
  .accordion-button:focus {
    box-shadow: none;
  }
  .accordion-button {
    &:not(.collapsed) {
      background: #ffffff;
      box-shadow: 0px 0px 10px var(--main-color) inset;
    }
  }
  .accordion-button::after {
    display: none;
  }
  .accordion-button .custom-arrow {
    margin-right: 5px;
    font-size: 4rem;
    transition: transform 0.3s ease;
    transform: rotate(180deg); // الإتجاه عند الفتح (مفتوح)
  }
  .accordion-button.collapsed .custom-arrow {
    transform: rotate(0deg); // الإتجاه الافتراضي (مغلق)
    color: var(--secondary-color);
  }
`;
export const TitleAccordion = styled.div`
  color: var(--main-color);
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;
`;
export const StyledAccordionItem = styled(Accordion.Item)`
  margin-bottom: 10px;
  transition: 0.3s;
  font-size: 3rem;
  box-shadow: 0px 0px 10px var(--secondary-color) inset;
  &:hover {
    background: #f1f1f1;
  }
`;

export const IconWrapper = styled.span`
  margin-left: 1rem;
  font-size: 3rem;
  color: var(--secondary-color);
`;
