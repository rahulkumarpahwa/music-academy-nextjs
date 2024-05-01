"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Content from "@/data/testimonialCards.json";

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.12] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony : Voices Of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={Content.testimonialCards}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
