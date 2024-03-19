"use client";

import React, { useState } from "react";
import {
  WorkSection,
  Container,
  TitleWork,
  WorkList,
  WorkTab,
  WorkTabTitleWrapper,
  WorkTabTitle,
  WorkTabInner,
  WorkContent,
  WorkContentItem,
  WorkItemNumber,
  WorkContentTitle,
  WorkContentParagraph,
} from "./AboutWork.styles";

const AboutWork = ({ work }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const toggleTab = (index) => {
    if (selectedTab !== index) {
      setSelectedTab(index);
    }
  };

  return (
    <WorkSection>
      <Container className="container">
        <TitleWork>
          {work.title}
          <span> {work.titleBlue}</span>
        </TitleWork>
        <WorkList>
          {work.steps.map((step, index) => (
            <React.Fragment key={index}>
              <WorkTab
                key={index}
                className={selectedTab === index ? "active" : ""}
              >
                <WorkTabInner
                  onClick={() => toggleTab(index)}
                  className={selectedTab === index ? "activeTabInner" : ""}
                  $backgroundImage={step.img}
                >
                  <WorkTabTitleWrapper>
                    <WorkItemNumber>{step.number}</WorkItemNumber>
                    <WorkTabTitle>{step.title}</WorkTabTitle>
                  </WorkTabTitleWrapper>

                  <svg
                    width="15"
                    height="28"
                    viewBox="0 0 15 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.0625 0.9375L14.5 12.9375C14.7917 13.2292 14.9375 13.5625 14.9375 13.9375C14.9375 14.3125 14.7917 14.6667 14.5 15L3.0625 26.9375C2.39583 27.5208 1.6875 27.5417 0.9375 27C0.354167 26.2917 0.354167 25.5833 0.9375 24.875L11.4375 13.875L0.9375 3.0625C0.354167 2.3125 0.354167 1.60417 0.9375 0.9375C1.6875 0.354167 2.39583 0.354167 3.0625 0.9375Z"
                      fill="white"
                    />
                  </svg>
                </WorkTabInner>

                <WorkContent>
                  <WorkContentItem
                    key={index}
                    className={selectedTab === index ? "visible" : ""}
                  >
                    <WorkContentTitle>{step.contentTitle}</WorkContentTitle>
                    {step.content.map((paragraph, pIndex) => (
                      <WorkContentParagraph key={pIndex}>
                        {paragraph}
                      </WorkContentParagraph>
                    ))}
                  </WorkContentItem>
                  <hr />
                </WorkContent>
              </WorkTab>
            </React.Fragment>
          ))}
        </WorkList>
      </Container>
    </WorkSection>
  );
};

export default AboutWork;
