"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
    {
      title: "Who am I?",
      description:
        "Hi there! I'm Francis, a passionate Machine Learning DevOps with 4 years of experience. I specialize in building end-to-end solutions that integrate machine learning models into production-ready applications. With expertise in Python, JavaScript, TensorFlow, and AWS, I leverage my skills in ML, backend, and frontend to deliver robust and scalable systems. I collaborate with cross-functional teams, optimize ML workflows, and implement CI/CD pipelines.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/images/hero.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="hero image"
          />
        </div>
      ),
    },
    {
      title: "Education",
      description:
        "I recently graduated from the University of Illinois Chicago with my bachelors in computer science. Through a combination of hard work, dedication, and a lot of caffiene, I was able to complete my degree in only 2 years. I'm proud of my accomplishments and am excited to see where my career takes me next.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/images/grad.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="graduation image"
          />
        </div>
      ),
    },
    {
      title: "Technical Skills",
      description:
        "I am proficient in a wide range of technologies, including programming languages such as Python, JavaScript, and SQL, as well as machine learning frameworks like TensorFlow and PyTorch. My expertise extends to backend development with Node.js and Django, frontend frameworks like React and Angular, and databases such as MySQL and PostgreSQL. Additionally, I have strong skills in DevOps tools and technologies, including Git, Jenkins, and cloud platforms like AWS and GCP, enabling me to effectively manage and deploy ML applications.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Outside of work",
      description:
        "I'm a maker at heart and I love to build things. When I'm not coding, you can find me working on DIY projects with my trusty 3D printer, experimenting with new technologies, or exploring the great outdoors. I'm passionate about learning and am always looking for new ways to challenge myself and expand my horizons. Whether it's building robots, biking along Lake Michigan, or trying out a new recipe, I'm always up for an adventure.", 
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Python</li>
                <li>C#/ .NET</li>
                <li>C++</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Development</li>
                <li>AI/ ML Pipelines</li>
                <li>Backend Engineering</li>
                <li>Frontend Engineering</li>
                <li>Software Troubleshooting</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of Illinois Chicago</li>
                <li>Bachelors in Computer Science</li>
            </ul>
        )
    },
];

const AboutSection = () => {
  return (
    
    <section id="about" className="text-white">
        <h1 className="text-4xl font-bold text-center py-8">About Me</h1>
        <StickyScroll content={content} />
    </section>
  )
}

export default AboutSection