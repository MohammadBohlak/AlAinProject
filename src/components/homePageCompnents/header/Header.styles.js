import styled from "styled-components";

export const HeaderContent = styled.header`
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  height: 550px;
  .logo {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    .logo {
      width: 30%;
    }
    .text {
      font-size: 2.5rem;
    }
  }
  .text {
    font-weight: bold;
    text-align: center;
    font-size: 3rem;
  }
`;
