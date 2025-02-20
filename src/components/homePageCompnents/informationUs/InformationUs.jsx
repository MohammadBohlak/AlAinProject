import React from 'react';
import { StyledInformationUs } from './informationUs.styles';
import Logo from '../../common/Logo/Logo';
import { PrimaryText } from '../../common/text/PrimaryText.styles';

function InformationUs(props) {
    return (
        <StyledInformationUs>
          <Logo color="blue" className="logo" />
          <PrimaryText>معلومات عنا</PrimaryText>
          <p>
            مؤسسة العين الحديثة هي شركة مقاولات عامة متخصصة في تنفيذ كافة خدمات
            الأعمال الهندسية بخبرة واسعة، نحن نمتلك متخصصين وخبراء فنيين في كل
            من أعمال البناء والانشاء والصيانة والترميم، وأعمال التصميم الداخلي
            والمعماري بشكل احترافي يتوافق مع أهداف العميل، حيث إننا شركة متخصصة
            خبيرة في مجال المقاولات على مدار السنوات الماضية، لذلك تعتبر مؤسسة
            العين الحديثة اختيار مثالي من أجلك.
          </p>
        </StyledInformationUs>
    );
}

export default InformationUs;