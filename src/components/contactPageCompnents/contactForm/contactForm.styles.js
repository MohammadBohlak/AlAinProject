import styled from "styled-components";
import { Input } from "../formInput/formInput.styles";
import { PrimaryText } from "../../common/text/PrimaryText.styles";

export const StyledForm = styled.div`
padding: 4rem;
box-shadow: -1px -1px 5px var(--main-color),
  2px 2px 5px var(--secondary-color);
border-radius: 10% 0 10% 0;
margin: var(--section-spacing) 0;
${PrimaryText}{
  text-align: center;
}
`;

export const Select = styled(Input).attrs({
  as: 'select',
})`
  width: 100%;
  padding: 0 8px;
  outline: none;
  font-size: 2.5rem;
`;
export const TextArea = styled(Input).attrs({
  as: 'textarea',
})`
  width: 100%;
  padding: 0 8px;
  outline: none;
  height: 80px;
  font-size: 2.5rem;
`;
