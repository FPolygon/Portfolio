"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "./ui/moving-border";
import { Highlight } from "./ui/hero-highlight";

const HeroSection = () => {
  return (
    <section className="lg:py-1">
      <WavyBackground backgroundFill="#121212" colors={["#1A4046", "#232F46", "#322F4f", "#123742"]}>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 place-self-center text-center sm:text-left"
          >
            <h1 className="text-slate-100 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold text-center">
              <span className="bg-clip-text">
                Hi, I'm <br /><Highlight className="text-white whitespace-nowrap">Francis Pagulayan</Highlight>
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'AI/ML Engineer',
                  2000,
                  'Lifelong Learner',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-3xl sm:text-4xl lg:text-5xl"
              />
            </h1>
          </motion.div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default HeroSection;