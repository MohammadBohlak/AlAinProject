import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/images/logo/bigWhite.svg";
import { StyledNavBar, StyledNavLink, Toggler } from "./navbar.styles";
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();

  const handleScrollToSection = (hash) => {
    // إذا لم نكن في الصفحة الرئيسية
    if (window.location.pathname !== "/") {
      navigate("/", { state: { targetSection: hash } });
    } else {
      // إذا كنا في الصفحة الرئيسية
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <StyledNavBar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} />
        </Navbar.Brand>
        <Toggler aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <StyledNavLink as={Link} to="/">
              الرئيسية
            </StyledNavLink>

            <StyledNavLink as={Link} to="/about">
              حولنا
            </StyledNavLink>

            <StyledNavLink as={Link} to="/contact">
              تواصل معنا
            </StyledNavLink>
            {/* <StyledNavLink href="/#services">
              خدماتنا
            </StyledNavLink>
            <StyledNavLink href="#ourProjects">
              مشاريعنا
            </StyledNavLink> */}
            <StyledNavLink 
              // as="button"
              onClick={() => handleScrollToSection("#services")}
            >
              خدماتنا
            </StyledNavLink>

            <StyledNavLink 
              // as="button"
              onClick={() => handleScrollToSection("#ourProjects")}
            >
              مشاريعنا
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
}

export default NavBar;
