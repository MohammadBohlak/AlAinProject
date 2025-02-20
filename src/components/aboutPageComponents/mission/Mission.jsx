import React, { useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { PrimaryText } from '../../common/text/PrimaryText.styles';
import { CardMission, CardMissionHeader } from './Mission.styles';
import { SecondaryText } from '../../common/text/SecondaryText.styles';
// import { CardMissionHeader } from './Mission';

function Mission(props) {
  const [activeTab, setActiveTab] = useState("first");
  const [isActive, setIsActive] = useState(true);
    return (
        <>
           <CardMission>
          <CardMissionHeader>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  onClick={() => {
                    setActiveTab("first");
                    setIsActive(true);
                  }}
                  className= {isActive? "active" : ""}
                >
                  <PrimaryText>رسالتنا</PrimaryText>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  onClick={() => {
                    setActiveTab("second");
                    setIsActive(false);
                }}
                  className= {isActive? "" : "active"}

                >
                  <PrimaryText>رؤيتنا</PrimaryText>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </CardMissionHeader>
          <Card.Body>
              {activeTab === "first" && (
                // <Card.Text>
                  <SecondaryText>
                    نسعى في مؤسسة العين الحديثة للمقاولات إلى تقديم خدمات بناء
                    متميزة تلبي أعلى معايير الجودة والابتكار. نحن ملتزمون بتحقيق
                    رضا عملائنا من خلال تنفيذ مشاريع تنموية مستدامة تسهم في
                    تحسين جودة الحياة وبناء مستقبل أفضل لمجتمعنا.
                  </SecondaryText>
                // </Card.Text>
              )}
              {activeTab === "second" && (
                // <Card.Text>
                  <SecondaryText>
                    أن نصبح الشركة الرائدة في مجال البناء والتشييد على مستوى
                    المنطقة، مع تحقيق التميز في كل مشروع نقوم به. نحن نؤمن
                    بالاستثمار في التكنولوجيا الحديثة والتطوير المستمر لفريق
                    عملنا لضمان تقديم حلول مبتكرة ومتفوقة تلبي تطلعات عملائنا
                    وتفوقها.
                  </SecondaryText>
                // </Card.Text>
              )}
          </Card.Body>
        </CardMission>   
        </>
    );
}

export default Mission;