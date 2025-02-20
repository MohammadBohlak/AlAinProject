import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FeedBack = styled.div`
  color: red;
  font-size: 2rem;
  margin-top: 1px;
`;
export const Input = styled(Form.Control)`
  height: 40px;
  font-size: 3rem;
  direction: rtl;
  padding: 8px;
  &:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 10px var(--secondary-color) inset;
  }
`;
