"use client";
import React, { useState } from "react";
import aboutContent from "../src/app/data/about.json";

import {
  AboutExperience,
  AboutHero,
  AboutLinkedin,
  AboutSkillset,
  AboutWork,
} from "../src/app/components/about";

export default function About() {
  const [isBioVisible, setIsBioVisible] = useState(false);
  return (
    <>
      <AboutHero
        isBioVisible={isBioVisible}
        setIsBioVisible={setIsBioVisible}
      />
      {isBioVisible && <AboutExperience />}
      <AboutLinkedin />
      <AboutWork work={aboutContent.work} />
      <AboutSkillset skillset={aboutContent.skillset} />
    </>
  );
}
