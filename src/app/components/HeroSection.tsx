"use client";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-12 place-self-center text-center sm:text-left">
            <h1 className="text-gray-200 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-center">
              <span className="bg-clip-text">
                Hi, I'm <br />
                <span
                  style={{
                    background: "linear-gradient(to right, #103CE7, #64E9FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Francis Pagulayan
                </span>
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI/ML Engineer',
                  2000,
                  'Cybersecurity Analyst',
                  2000,
                  'DevOps Engineer',
                  2000,
                  'Data Scientist',
                  2000,
                  'Lifelong Learner',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-3xl sm:text-4xl lg:text-5xl text-gray-200"
              />
            </h1>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;