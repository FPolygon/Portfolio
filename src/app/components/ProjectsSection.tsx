"use client";
import { Tabs } from "./ui/tabs";
import { ProjectCard } from "./ProjectCard";


const machineLearningCards = [
  {
    title: 'Predictive Analytics in Road Safety',
    description: 'Used various ML techniques to predict the severity of road accidents based on location, weather conditions, and road metadata.',
    imageSrc: '/images/projects/ml/accident.webp',
    tryNowLink: '/link1',
    longDescription: 'Flipped description for Predictive Analytics in Road Safety.',
  },
];

const dataanalysisCards = [
  {
    title: 'Parallel Computation of the Mandelbrot set',
    description: 'Parallelized Mandelbrot set generation using MPI for significant performance improvements in a distributed computing environment.',
    imageSrc: '/images/projects/dataAnalysis/mandelbrot.webp',
    tryNowLink: '/link1',
    longDescription: 'Flipped description for Predictive Analytics in Road Safety.',
  },
];

const webdevCards = [
  {
    title: 'Professional Portfolio',
    description: 'This is my professional portfolio website built using Next.js, Tailwind CSS, and Typescript. It showcases my projects, skills, and achievements',
    imageSrc: '/images/projects/webdev/portfolio.webp',
    tryNowLink: 'https://github.com/FPolygon/Portfolio',
    longDescription: 'Flipped description for Predictive Analytics in Road Safety.',
  },
  {
    title: 'Melodi',
    description: 'Melodi is a music theory learning website utilizing the principles of web design. It is built using pure HTML, CSS, and JavaScript and integrates with AWS services for backend functionality.',
    imageSrc: '/images/projects/webdev/melodi.webp',
    tryNowLink: 'https://github.com/MarcOlivess/MelodiPrototypeWeb',
    longDescription: 'Flipped description for Predictive Analytics in Road Safety.',
  },
];

const gamedevCards = [
  {
    title: 'Alexander\'s Conquest',
    description: 'Alexander\'s Conquest is a historically accurate strategy game built using Unity and C#. It features troop upgrades, defenses, and educational elements about the battle of Thrace.',
    imageSrc: '/images/projects/gamedev/alexander.webp',
    tryNowLink: '/link1',
    longDescription: 'Flipped description for Predictive Analytics in Road Safety.',
  },
];


export function ProjectsSection() {
  const tabs = [
    {
      title: "Machine Learning",
      value: "Machine Learning",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#103be7] to-[#50b8cb]">
        <p>Machine Learning</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machineLearningCards.map((card, index) => (
            <ProjectCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
              flippedTitle={card.title}
              flippedDescription={card.longDescription}
            />
          ))}
        </div>
      </div>
      ),
    },
    {
      title: "Data Analysis",
      value: "Data Analysis",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#103CE7] to-[#50b8cb]">
          <p>Data Analysis</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataanalysisCards.map((card, index) => (
            <ProjectCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
              flippedTitle={card.title}
              flippedDescription={card.longDescription}
            />
          ))}
        </div>
      </div>
      ),
    },
    {
      title: "Web Development",
      value: "Web Development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#103CE7] to-[#50b8cb]">
          <p>Web Development</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webdevCards.map((card, index) => (
            <ProjectCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
              flippedTitle={card.title}
              flippedDescription={card.longDescription}
            />
          ))}
        </div>
        </div>
      ),
    },
    {
      title: "Game Development",
      value: "Game Development",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#103CE7] to-[#50b8cb]">
          <p>Game Development</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gamedevCards.map((card, index) => (
            <ProjectCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
              flippedTitle={card.title}
              flippedDescription={card.longDescription}
            />
          ))}
        </div>
      </div>
      ),
    },
  ];

  return (
    <section id="projects">
      <div className="h-[60rem] md:h-[45rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}