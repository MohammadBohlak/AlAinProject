import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import backgroundImage from "../../../assets/images/background.webp";
import { HeaderContent } from "./Header.styles";
import Logo from "../../common/Logo/Logo";

function Header(props) {
  return (
    <Background>
      <Container>
        <HeaderContent>
          <div className="logo">
            <Logo color="white" />
          </div>
          <div className="text">
            مؤسسة العين الحديثة شركة مقاولات متخصصة في تنفيذ كافة حدمات الأعمال
            الهندسية بخبرة واسعة
          </div>
        </HeaderContent>
      </Container>
    </Background>
  );
}

export default Header;

const Background = styled.div`
  position: relative;
  height: 550px;
  background-image: url(${backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #041c3f;
    opacity: 0.6;
  }
`;

// import React from "react";
// import { Container } from "react-bootstrap";
// import styled from "styled-components";
// import backgroundImage from "../../assets/images/background.webp";
// import { HeaderContent } from "./Header.styles";
// // import logo from "../../../assets/images/logo/big.svg"
// import logo from "../../assets/images/logo/bigWhite.svg"
// function Header(props) {
//   return (
//     <Background>
//       <Container>
//         <HeaderContent>
//         <div className="logo">
//             <img src={logo}/>
//         </div>
//         <div className="text">
//         مؤسسة العين الحديثة
//          شركة مقاولات متخصصة في تنفيذ كافة حدمات الأعمال الهندسية بخبرة واسعة
//         </div>
//         </HeaderContent>
//       </Container>
//     </Background>
//   );
// }

// export default Header;

//     const Background = styled.div`
//       position: relative;
//       height: 550px;
//       background-image: url(${backgroundImage});
//       background-position: center center;
//       background-repeat: no-repeat;
//       background-size: cover;
//       &::before {
//         content: "";
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         background-color: #041c3f;
//         opacity: 0.6;
//       }
//     `;
