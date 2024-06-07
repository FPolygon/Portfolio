"use client";
import React from 'react'
import dynamic from 'next/dynamic'
import AnimatedNumbers from "react-animated-numbers"
import { BackgroundGradient } from "./ui/background-gradient";


const achievementsList = [
    {
        metric: "Projects",
        value: "30",
        postfix: "+"
    },
    {
        metric: "Programming Languages",
        value: "15",
    },
    {
        metric: "Lines of Code",
        value: "50000",
        postfix: "+"
    },
    {
        metric: "Years of Experience",
        value: "4",
    },
];

const AchievementsSection = () => {
    return (
      <div className='py-4 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <BackgroundGradient className="bg-[#121212] rounded-[22px] py-8 px-4 sm:px-17 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center'
            >
              <h2 className='text-white text-4xl font-bold flex flex-row'>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale='en-US'
                  className='text-white text-4xl font-bold'
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 3,
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>
                {achievement.metric}
              </p>
            </div>
          ))}
        </BackgroundGradient>
      </div>
    );
  };

export default AchievementsSection