import React from "react";
import styled from "styled-components";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import { TitleSection } from "../../common/text/TitleSection";
import { HomeText } from "../../../pages/home/home.styles";

function SideText(props) {
  return (
    <StyledSideText>
      <HomeText>
        <TitleSection>
          <PrimaryText>تواصل معنا اليوم واحصل على أفضل الخدمات</PrimaryText>
        </TitleSection>
        <SecondaryText>
          نحن في مؤسسة العين الحديثة للمقاولات نسعى جاهدين لتقديم أفضل الحلول
          والخدمات في مجال المقاولات. فريقنا المحترف والخبير مستعد للإجابة على
          جميع استفساراتكم وتلبية احتياجاتكم.
        </SecondaryText>
        <SecondaryText>
          سواء كنت تبحث عن عرض أسعار، تحتاج إلى استشارة أو لديك أسئلة حول
          خدماتنا، نحن هنا لمساعدتك.
        </SecondaryText>
        <SecondaryText>
          اتصل بنا الآن أو أرسل استفسارك عبر النموذج على اليمين، وسنقوم بالرد
          عليك في أقرب وقت ممكن.
        </SecondaryText>
      </HomeText>
    </StyledSideText>
  );
}

const StyledSideText = styled.div`
  margin-top: var(--section-spacing);
  height: 100%;
  ${SecondaryText} {
    margin-top: 40px;
  }
`;
export default SideText;
