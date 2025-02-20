import React from "react";
import { Accordion } from "react-bootstrap";
import { FaHardHat } from "react-icons/fa";
import {
  FiChevronDown,
  FiClock,
  FiDollarSign,
  FiMap,
  FiShield,
} from "react-icons/fi";
import { SecondaryText } from "../../common/text/SecondaryText.styles";
import {
  IconWrapper,
  StyledAccordionHeader,
  StyledAccordionItem,
  TitleAccordion,
} from "./FAQSection.styles";
import { PrimaryText } from "../../common/text/PrimaryText.styles";
import { TitleSection } from "../../common/text/TitleSection";
const faqData = [
  {
    question: "ما هي أنواع المشاريع التي تنفذها مؤسسة العين الحديثة؟",
    answer:
      "نحن متخصصون في المشاريع السكنية والتجارية والإنشائية، بما في ذلك التشطيبات الداخلية، البناء من الصفر، والتجديدات الشاملة.",
    icon: <FaHardHat />,
  },
  {
    question: "كيف يمكنني طلب عرض سعر لمشروعي؟",
    answer:
      "يمكنك تعبئة نموذج التواصل أدناه أو الاتصال بنا مباشرة على الرقم الموحد، وسيقوم فريقنا بدراسة متطلباتك وإرسال عرض مبدئي خلال 48 ساعة.",
    icon: <FiDollarSign />,
  },
  {
    question: "ما هي مدة تنفيذ المشاريع المتوسطة الحجم؟",
    answer:
      "تختلف المدة حسب طبيعة المشروع، لكن معظم المشاريع السكنية (مثل الفلل) تستغرق بين 6-12 شهرًا مع الالتزام بجدول زمني واضح.",
    icon: <FiClock />,
  },
  {
    question: "هل تقدمون ضمانًا على الأعمال المنفذة؟",
    answer:
      "نعم، جميع أعمالنا مغطاة بضمان يصل إلى 5 سنوات للمنشآت الإنشائية وسنة واحدة لأعمال التشطيب، حسب طبيعة العمل.",
    icon: <FiShield />,
  },
  {
    question: "ما هي مناطق العمل التي تغطيها المؤسسة؟",
    answer:
      "نعمل في جميع أنحاء الإمارات العربية المتحدة، مع وجود فرق ميدانية في أبوظبي، دبي، والعين.",
    icon: <FiMap />,
  },
];

function FAQSection() {
  return (
    <>
      <TitleSection>
        <PrimaryText className="mb-5">الأسئلة الشائعة</PrimaryText>
        <SecondaryText>
          نحن هنا للإجابة على استفساراتكم المتكررة. إذا كان لديك سؤال، ربما تجده
          هنا!{" "}
        </SecondaryText>
      </TitleSection>
      <Accordion flush>
        {faqData.map((item, index) => {
          return (
            <StyledAccordionItem eventKey={index} key={index}>
              <StyledAccordionHeader>
                <TitleAccordion>
                  <IconWrapper>{item.icon}</IconWrapper>
                  {item.question}
                  <FiChevronDown className="custom-arrow" />
                </TitleAccordion>
              </StyledAccordionHeader>

              <Accordion.Body>
                <SecondaryText $color="b">{item.answer}</SecondaryText>
              </Accordion.Body>
            </StyledAccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

export default FAQSection;
