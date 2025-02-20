import styled from "styled-components";

const PrimaryText = styled.h2`
  color: ${props => `var(--${props.$color || "secondary-color"})`};
  font-size: 4rem ; 
`
export {PrimaryText}