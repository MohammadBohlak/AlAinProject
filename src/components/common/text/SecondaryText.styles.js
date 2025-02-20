import styled from "styled-components";

const SecondaryText = styled.p`
    font-size: 2.5rem;
    color: ${props => `var(--${props.$color || "main-color"})`};

`
export {SecondaryText}