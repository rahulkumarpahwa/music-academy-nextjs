"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Content from "../data/musicSchoolContent.json";

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={Content.musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
