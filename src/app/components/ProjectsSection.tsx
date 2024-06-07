"use client";
import { Tabs } from "./ui/tabs";
import { ThreeDCardDemo } from "./ThreeDCardDemo";


const machineLearningCards = [
  {
    title: 'Predictive Analytics in Road Safety',
    description: 'Used various ML techniques to predict the severity of road accidents based on location, weather conditions, and road metadata.',
    imageSrc: '/images/projects/1.png',
    tryNowLink: '/link1',
  },
  {
    title: 'Machine Learning Card 2',
    description: 'This is the second card in the Machine Learning tab.',
    imageSrc: '/images/projects/2.png',
    tryNowLink: '/link2',
  },
  {
    title: 'Machine Learning Card 3',
    description: 'This is the third card in the Machine Learning tab.',
    imageSrc: '/images/projects/3.png',
    tryNowLink: '/link3',
  },
];

const dataanalysisCards = [
  {
    title: 'Parallel Computation of the Mandelbrot set',
    description: 'Parallelized Mandelbrot set generation using MPI for significant performance improvements in a distributed computing environment.',
    imageSrc: '/images/projects/dataAnalysis/mandelbrot.webp',
    tryNowLink: '/link1',
  },
  {
    title: 'Data Analysis Card 2',
    description: 'This is the second card in the Data Analysis tab',
    imageSrc: '/images/projects/dataAnalysis/mandelbrot.webp',
    tryNowLink: '/link2',
  },
  {
    title: 'Data Analysis Card 3',
    description: 'This is the third card in the Data Analysis tab',
    imageSrc: '/images/projects/dataAnalysis/mandelbrot.webp',
    tryNowLink: '/link3',
  },
];

const webdevCards = [
  {
    title: 'Professional Portfolio',
    description: 'This is my professional portfolio website built using Next.js, Tailwind CSS, and Typescript. It showcases my projects, skills, and achievements',
    imageSrc: '/images/projects/webdev/portfolio.webp',
    tryNowLink: '/link1',
  },
  {
    title: 'Melodi',
    description: 'Melodi is a music theory learning website utilizing the principles of web design. It is built using pure HTML, CSS, and JavaScript and integrates with AWS services for backend functionality.',
    imageSrc: '/images/projects/webdev/melodi.webp',
    tryNowLink: 'https://github.com/MarcOlivess/MelodiPrototypeWeb',
  },
  {
    title: 'WebDev card 3',
    description: 'This is the third card in the WebDev tab.',
    imageSrc: '/images/projects/webdev/portfolio.webp',
    tryNowLink: '/link3',
  },
];

const gamedevCards = [
  {
    title: 'Alexander\'s Conquest',
    description: 'Alexander\'s Conquest is a historically accurate strategy game built using Unity and C#. It features troop upgrades, defenses, and educational elements about the battle of Thrace.',
    imageSrc: '/images/projects/gamedev/alexander.webp',
    tryNowLink: '/link1',
  },
  {
    title: 'Game Dev Card 2',
    description: 'This is the second card in the Game Dev tab.',
    imageSrc: '/images/projects/gamedev/alexander.webp',
    tryNowLink: '/link2',
  },
  {
    title: 'Game Dev Card 3',
    description: 'This is the third card in the Game Dev tab.',
    imageSrc: '/images/projects/gamedev/alexander.webp',
    tryNowLink: '/link3',
  },
];

const mobileappsCards = [
  {
    title: 'Mobile Apps Card 1',
    description: 'This is the first card in the Mobile Apps tab',
    imageSrc: '/images/projects/gameDev/alexander.webp',
    tryNowLink: '/link1',
  },
  {
    title: 'Mobile Apps Card 2',
    description: 'This is the second card in the Mobile Apps tab',
    imageSrc: '/images/projects/gameDev/alexander.webp',
    tryNowLink: '/link2',
  },
  {
    title: 'Mobile Apps Card 3',
    description: 'This is the third card in the Mobile Apps tab',
    imageSrc: '/images/projects/gameDev/alexander.webp',
    tryNowLink: '/link3',
  },
];


export function ProjectsSection() {
  const tabs = [
    {
      title: "Machine Learning",
      value: "Machine Learning",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary-500 to-secondary-500">
        <p>Machine Learning</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machineLearningCards.map((card, index) => (
            <ThreeDCardDemo
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary-600 to-secondary-600">
          <p>Data Analysis</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataanalysisCards.map((card, index) => (
            <ThreeDCardDemo
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary-700 to-secondary-700">
          <p>Web Development</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webdevCards.map((card, index) => (
            <ThreeDCardDemo
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary-800 to-secondary-800">
          <p>Game Development</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gamedevCards.map((card, index) => (
            <ThreeDCardDemo
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
            />
          ))}
        </div>
      </div>
      ),
    },
    {
      title: "Mobile Apps",
      value: "Mobile Apps",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary-900 to-secondary-900">
          <p>Mobile Apps</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mobileappsCards.map((card, index) => (
            <ThreeDCardDemo
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              tryNowLink={card.tryNowLink}
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