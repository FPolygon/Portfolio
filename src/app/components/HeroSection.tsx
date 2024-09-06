"use client";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="lg:py-10 pb-12 sm:pb-12 lg:pb-12 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-12 place-self-center text-center sm:text-left">
            <h1 className="text-gray-200 mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-normal text-center">
              <span className="bg-clip-text">
                Hi, I&apos;m <br />
                <span
                  className="font-semibold text-8xl"
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
                  'AI Engineer',
                  2000,
                  'GPU Babysitter',
                  2000,
                  'Capturer of Flags ',
                  2000,
                  'Lifelong Student',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-sans"
              />
            </h1>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;