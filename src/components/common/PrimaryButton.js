import { Button } from "react-bootstrap";
import styled from "styled-components";

export const PrimaryButton = styled(Button)`
  height: 40px;
  background-color: transparent;
  color: var(--secondary-color);
  font-size: 2.5rem;
  font-weight: bolder;
  border-color: var(--secondary-color);
  &:hover,
  &:active {
    background-color: var(--secondary-color) !important;
    border-color: var(--secondary-color) !important;
    color: white !important;
  }
`;