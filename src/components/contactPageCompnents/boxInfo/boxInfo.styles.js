import styled from "styled-components"

const StyledBoxInfo = styled.div`
    text-align: center;
    padding: 20px;
    border: 1px solid var(--main-color);
    border-radius: 10px;
    background-color: var(--neutral-white);
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    svg {
      font-size: 4rem;
      display: block;
      color: var(--main-color);
      position: absolute;
      bottom: 10px;
      left: 10px ;
    }
`
export{StyledBoxInfo}