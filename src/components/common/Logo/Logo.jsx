import React from "react";
import styled from "styled-components";
// import blueBigLogo from "../../assets/images/logo/blue/big.svg";

import blueBigLogo from "../../../assets/images/logo/bigBlue.svg";
import blueMediumLogo from "../../../assets/images/logo/mediumBlue.svg";
import blueSmallLogo from "../../../assets/images/logo/smallBlue.svg";
import whiteBigLogo from "../../../assets/images/logo/bigWhite.svg";
import whiteMediumLogo from "../../../assets/images/logo/mediumWhite.svg";
import whiteSmallLogo from "../../../assets/images/logo/smallWhite.svg";

const Logo = ({ color }) => {
  const logoSet = {
    blue: {
      big: blueBigLogo,
      medium: blueMediumLogo,
      small: blueSmallLogo,
    },
    white: {
      big: whiteBigLogo,
      medium: whiteMediumLogo,
      small: whiteSmallLogo,
    },
  };

  const selectedLogo = logoSet[color];

  return (
    <Picture>
      <source srcSet={selectedLogo.big} media="(min-width: 992px)" />
      <source srcSet={selectedLogo.medium} media="(min-width: 768px)" />
      <img src={selectedLogo.small} alt="Logo" />
    </Picture>
  );
};

export default Logo;

const Picture = styled.picture`
  img {
    /* width: 100%; */
  }
`;
