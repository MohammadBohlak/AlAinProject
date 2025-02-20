import { Container, Row, Col } from 'react-bootstrap';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock 
} from 'react-icons/fi';
import { 
  FaTwitter, 
  FaInstagram, 
  FaFacebook
} from 'react-icons/fa';
import {ContactInfo, LogoBox, FooterTitle, SocialIcons, StyledCopyright, StyledFooter, StyledTopSection, WorkingHours } from './footer.styles';
import Logo from '../Logo/Logo';
import { PrimaryText } from '../text/PrimaryText.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        {/* القسم العلوي */}
        <StyledTopSection className="py-5">
          <Row className="g-4">
            {/* الشعار ووسائل التواصل */}
            <Col md={4}>
              <LogoBox>
                <Logo color="white"/>
                <SocialIcons className="">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                </SocialIcons>
              </LogoBox>
            </Col>

            {/* معلومات الاتصال */}
            <Col md={4}>
              <FooterTitle>
              <PrimaryText>تواصل معنا</PrimaryText>
              </FooterTitle>
              <ContactInfo>
                <div className="d-flex align-items-center mb-3">
                  <FiMapPin className="me-2" />
                  <span>شارع العين, الرياض, الممكلة العربية السعودية.</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FiPhone className="me-2" />
                  <span style={{direction:"ltr"}}>+963 998 026 796</span>
                </div>
                <div className="d-flex align-items-center">
                  <FiMail className="me-2" />
                  <span>info@alain-modern.com</span>
                </div>
              </ContactInfo>
            </Col>

            {/* أوقات العمل */}
            <Col md={4}>
            <FooterTitle>
              <PrimaryText>أوقات الدوام</PrimaryText>
            </FooterTitle>
              <WorkingHours>
                <div className="d-flex">
                  <FiClock className="me-2" />
                  <div>
                    <p>الأحد - الخميس: 8 صباحاً - 6 مساءً</p>
                    <p>الجمعة: مغلق</p>
                    <p>السبت: 10 صباحاً - 4 مساءً</p>
                  </div>
                </div>
              </WorkingHours>
            </Col>
          </Row>
        </StyledTopSection>

        {/* حقوق النشر */}
        <StyledCopyright className="py-3">
          <Row>
            <Col>
              <p className="mb-0 text-center">
                © {new Date().getFullYear()} جميع الحقوق محفوظة 
                <span className="mx-2">|</span>
                تطوير بواسطة فريق المؤسسة
              </p>
            </Col>
          </Row>
        </StyledCopyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;