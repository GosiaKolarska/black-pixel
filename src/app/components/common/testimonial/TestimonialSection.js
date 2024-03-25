"use client";

import React, { useEffect, useRef } from "react";
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
  const swiperRef = useRef(null);

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}" tabindex="0" role="button" aria-label="Go to slide ${
        index + 1
      }" onKeyDown="${(e) => handleBulletKeyDown(e, index)}"></span>`;
    },
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (!swiperInstance) return;

    const handleBulletKeyDown = (event) => {
      if (event.key === "Enter") {
        const index = parseInt(
          event.target.getAttribute("data-swiper-slide-index"),
          10
        );
        swiperInstance.swiper.slideTo(index);
      }
    };

    const addBulletEventListeners = () => {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((bullet, index) => {
        bullet.setAttribute("tabindex", "0");
        bullet.setAttribute("role", "button");
        bullet.setAttribute("aria-label", `Go to slide ${index + 1}`);
        bullet.setAttribute("data-swiper-slide-index", index.toString());
        bullet.addEventListener("keydown", handleBulletKeyDown);
      });
    };

    addBulletEventListeners();

    return () => {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((bullet) => {
        bullet.removeEventListener("keydown", handleBulletKeyDown);
      });
    };
  }, [swiperRef.current]);

  const handleBulletKeyDown = (event, index) => {
    if (event.key === "Enter") {
      swiperRef.current.swiper.slideTo(index);
    }
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
            ref={swiperRef}
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
            a11y={true}
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
