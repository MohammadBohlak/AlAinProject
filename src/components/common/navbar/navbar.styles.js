import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const StyledNavBar = styled(Navbar)`
  background-color: var(--main-color) !important ;
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 75px;
  width: 100%;
  opacity: 0.9;
  img {
    max-width: 100%;
    width: 200px;
  }
  .navbar-collapse{
    background-color: var(--main-color) !important ;
    opacity: 0.9;
  }
`;
const StyledNavLink = styled(Nav.Link)`
  font-size: 2.5rem;

  text-decoration: none;
  --padding: 20px;
  color: white !important;
  padding: var(--padding) !important;
  position: relative;
  font-weight: bold;
  &::before {
    content: "";
    position: absolute;
    right: var(--padding);
    bottom: var(--padding);
    width: 0%;
    height: 1px;
    background-color: white;
    transition: 0.5s;
  }
  &:hover::before {
    width: calc(100% - var(--padding) * 2);
  }
  &:hover {
    color: var(--secondary-color);
  }
  @media screen and (max-width: 768px) {
    transition: 0.3s;
    &:hover {
      padding-right: 30px !important;
    }
    &::before {
      width: calc(100% - var(--padding));
      bottom: 0;
    }
    &:hover::before {
      width: calc(100% - var(--padding));
    }
  }
`;
const Toggler = styled(Navbar.Toggle)`
  background-color: white !important;
`;
export { StyledNavBar, StyledNavLink, Toggler };
