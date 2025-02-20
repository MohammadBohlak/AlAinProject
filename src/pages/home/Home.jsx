import React, { useEffect } from "react";
import Header from "../../components/homePageCompnents/header/Header";
import { HomeSection, HomeImg, HomeText, StyledHome } from "./home.styles";
import { Col, Container } from "react-bootstrap";
import { PrimaryText } from "../../components/common/text/PrimaryText.styles";
import { SecondaryText } from "../../components/common/text/SecondaryText.styles";
import plan from "../../assets/images/planning.jpg";
import manage from "../../assets/images/manage.jpg";
import SwiperCards from "../../components/homePageCompnents/swiperCardsProject/SwiperCards";
import Services from "../../components/homePageCompnents/services/Services";
import InformationUs from "../../components/homePageCompnents/informationUs/InformationUs";
import { Title, Meta, Link } from "react-head";
import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetSection) {
      const element = document.getElementById(
        location.state.targetSection.replace("#", "")
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);
  return (
    <StyledHome>
      <>
        <Title>مؤسسة العين الحديثة | المقاولات العامة</Title>
        <Meta
          name="description"
          content="الرائدة في الإنشاءات والتشطيبات بدولة الإمارات"
        />
        <Meta
          name="keywords"
          content="مقاولات, تشطيبات, بناء فلل, تشطيب داخلي"
        />
        <Meta property="og:type" content="website" />
      </>
      <Header />
      <Container>
        <InformationUs />

        <HomeSection>
          <HomeText md={6}>
            <PrimaryText>تصميم و تخطيط مخصص</PrimaryText>
            <SecondaryText>
              اكتشف مشاريع البناء التجاري ذات الصلة التي تتوافق مع احتياجات
              عملك.
            </SecondaryText>
            <SecondaryText>
              تجنب التوتر الناتج عن إعداد العطاءات باستخدام التكنولوجيا الرقمية
              للتحديد والتقدير.
            </SecondaryText>
            <SecondaryText>قم بتنظيم مشاريع فريقك في مكان واحد.</SecondaryText>
          </HomeText>
          <HomeImg md={6}>
            <img src={plan} className="circle" />
          </HomeImg>
        </HomeSection>

        <HomeSection>
          <HomeImg md={6}>
            <img src={manage} className="square" />
          </HomeImg>
          <HomeText md={6}>
            <PrimaryText>إدارة المناقصات المبسطة</PrimaryText>
            <SecondaryText>
              تحسين سير العمل من خلال العمليات المبسطة.
            </SecondaryText>
            <SecondaryText>
              أدوات متكاملة لتحقيق أقصى قدر من التعاون بين الفريق.
            </SecondaryText>
            <SecondaryText>بناء علاقات مع المقاولين الفرعيين. </SecondaryText>
          </HomeText>
        </HomeSection>
      </Container>
      <div id="services"></div>
      <Services />
      <Container>
        <div id="ourProjects"></div>
        <HomeSection>
          <HomeText md={6}>
            <PrimaryText>مشاريعنا</PrimaryText>
            <PrimaryText $color="main-color">
              إرث البناء يجسد رؤيتنا
            </PrimaryText>
            <SecondaryText>دقة التنفيذ ترفع سقف الجودة.</SecondaryText>
            <SecondaryText>إبداع التصميم يلبي أحلام العملاء.</SecondaryText>
            <SecondaryText>
              ثقة المجتمع كسبناها عبر سنوات من الإنجازات.
            </SecondaryText>
            <SecondaryText>
              الابتكار هو الأساس في كل مشروع نقوم به.
            </SecondaryText>
            <SecondaryText>
              رؤيتنا تتمحور حول تقديم الأفضل دائمًا.
            </SecondaryText>
            <SecondaryText>
              نلتزم بالمعايير العالمية في كل أعمالنا.
            </SecondaryText>
          </HomeText>
          <Col md={6}>
            <SwiperCards />
          </Col>
        </HomeSection>
      </Container>
    </StyledHome>
  );
}

export default Home;
