"use client";

import React from "react";
import globalData from "../../../data/global.json";
import {
  TestimonialSection,
  TestimonialTitle,
  TestimonialItem,
  TestimonialDescription,
  AuthorInfo,
  AuthorImage,
  AuthorName,
  AuthorInfoWrapper,
  AuthorRole,
  TestimonialList,
  TestimonialSubTitle,
  TestimonialSubTitleLink,
} from "./TestimonialSection.styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const TestimonialSectionComponent = () => {
  const { subtitle, title, people } = globalData.testimonials;

  const pagination = {
    clickable: true,
  };

  return (
    <TestimonialSection className="testimonials">
      <div className="container">
        <TestimonialTitle>{title}</TestimonialTitle>
        <TestimonialSubTitle>
          {subtitle}
          <TestimonialSubTitleLink
            target="_blank"
            href="https://www.linkedin.com/in/mkolarska/"
          >
            Linkedin
          </TestimonialSubTitleLink>
        </TestimonialSubTitle>

        <TestimonialList>
          <Swiper
            modules={[EffectCreative, Navigation, Pagination]}
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            loop={true}
            pagination={pagination}
            grabCursor={true}
          >
            {people.map((person, index) => (
              <SwiperSlide key={index}>
                <TestimonialItem>
                  <TestimonialDescription>
                    {person.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </TestimonialDescription>
                  <AuthorInfo>
                    <AuthorImage
                      src={person.img}
                      alt={person.name}
                      width="70"
                      height="70"
                    />
                    <AuthorInfoWrapper>
                      <AuthorName>{person.name}</AuthorName>
                      <AuthorRole>{person.role}</AuthorRole>
                    </AuthorInfoWrapper>
                  </AuthorInfo>
                </TestimonialItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </TestimonialList>
      </div>
    </TestimonialSection>
  );
};

export default TestimonialSectionComponent;
