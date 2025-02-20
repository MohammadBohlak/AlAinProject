import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardMission = styled(Card)`
  width: 50%;
  border-color: var(--main-color);
  margin:var(--section-spacin-sm) auto;
  @media (max-width: 575px) {
    width: 80%;
  }
`


const CardMissionHeader = styled(Card.Header)`
  .nav-item {
    margin-right: 10px;
  }
  a.nav-link:hover,
  a.active {
    border-color: var(--secondary-color) !important;
    border-bottom-color: transparent !important;
  }
  background-color: var(--main-color);
  h2 {
    color: white;
  }
  a.active {
    h2 {
      color: var(--secondary-color);
    }
  }
`;
export {CardMissionHeader, CardMission}