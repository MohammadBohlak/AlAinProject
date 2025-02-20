import React from 'react';
import { PrimaryText } from '../common/text/PrimaryText.styles';
import { SecondaryText } from '../common/text/SecondaryText.styles';

function WhoUs(props) {
    return (
        <>
            <PrimaryText>من نحن ؟</PrimaryText>
        <SecondaryText>
          مؤسسة العين الحديثة للمقاولات هي شركة رائدة في مجال البناء والتشييد،
          تأسست لتقديم أعلى معايير الجودة والابتكار في صناعة البناء. منذ
          تأسيسنا، ونحن ملتزمون بتحقيق رؤيتنا في بناء مستقبل مشرق ومستدام من
          خلال مشاريعنا المتنوعة والتي تتراوح بين المباني السكنية، والمشاريع
          التجارية، والبنية التحتية.
        </SecondaryText>

        {/*  */}
        <PrimaryText>
          ما هي مؤسسة العين الحديثة ؟
        </PrimaryText>
        <SecondaryText>
          مؤسسة العين الحديثة هي كيان رائد في مجال المقاولات والبناء، تسعى إلى
          تقديم خدمات متميزة وحلول مبتكرة في صناعة البناء والتشييد. تأسست
          المؤسسة على أسس قوية من الخبرة والكفاءة، وتركز على تلبية احتياجات
          عملائها من خلال الالتزام بأعلى معايير الجودة والأمان.
        </SecondaryText>
        </>
    );
}

export default WhoUs;