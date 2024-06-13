"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import { StickyScroll } from './ui/sticky-scroll-reveal';
import { cn } from '@/utils/cn';
import { CardStack } from './ui/card-stack';

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold   bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };
   
  const CARDS = [
    {
      id: 0,
      name: "Front End Experience",
      designation: "",
      content: (
        <p>
          Proficient in <Highlight>HTML, CSS</Highlight>, and <Highlight>JavaScript</Highlight>.
          Experience with <Highlight>React, Angular</Highlight>, and <Highlight>Vue.js</Highlight>.
          Skilled in <Highlight>responsive design</Highlight> and <Highlight>cross-browser compatibility</Highlight>.
        </p>
      ),
    },
    {
      id: 1,
      name: "Back End Experience",
      designation: "",
      content: (
        <p>
          Proficient in <Highlight>Node.js, Python</Highlight>, and <Highlight>Java.</Highlight>
          Experience in building APIs with <Highlight>Express.js, Django</Highlight>, and <Highlight>Spring Boot.</Highlight>
          Skilled in working with databases like <Highlight>MySQL, PostgreSQL</Highlight>, and <Highlight>MongoDB.</Highlight>
        </p>
      ),
    },
    {
      id: 2,
      name: "DevOps Experience",
      designation: "",
      content: (
        <p>
          Experience with CI/CD pipelines using <Highlight>enkins, Travis CI</Highlight>, or <Highlight>GitLab CI.</Highlight>
          Proficient in containerization using <Highlight>Docker</Highlight> and <Highlight>Kubernetes.</Highlight>
          Familiarity with cloud platforms like <Highlight>AWS, Azure</Highlight>, or <Highlight>Google Cloud.</Highlight>
        </p>
      ),
    },
    {
      id: 3,
      name: "Database Experience",
      designation: "",
      content: (
        <p>
          Proficient in designing and working with relational databases such as <Highlight>MySQL, PostgreSQL</Highlight>, and <Highlight>SQL Server.</Highlight>
          Experience in <Highlight>database normalization</Highlight>, <Highlight>indexing</Highlight>, and <Highlight>query optimization</Highlight>.
          Familiar with NoSQL databases like <Highlight>MongoDB and Redis</Highlight>.
        </p>
      ),
    },
    {
      id: 4,
      name: "API Development",
      designation: "",
      content: (
        <p>
          Skilled in designing and building RESTful APIs using frameworks like <Highlight>Express.js</Highlight> and <Highlight>Flask</Highlight>.
          Experience in <Highlight>API documentation</Highlight>, <Highlight>versioning</Highlight>, and <Highlight>authentication/authorization mechanisms</Highlight>.
          Proficient in <Highlight>integrating third-party APIs</Highlight> and services.
        </p>
      ),
    },
    {
      id: 5,
      name: "Agile Methodologies",
      designation: "",
      content: (
        <p>
          Experience working in Agile development environments, including <Highlight>Scrum</Highlight> and <Highlight>Kanban</Highlight>.
          Proficient in using tools like <Highlight>JIRA</Highlight> and <Highlight>Trello</Highlight> for project management and issue tracking.
          Collaborating closely with cross-functional teams to deliver high-quality software incrementally.
        </p>
      ),
    },
    {
      id: 6,
      name: "Testing and Debugging",
      designation: "",
      content: (
        <p>
          Strong understanding of testing methodologies, including <Highlight>unit testing</Highlight>, <Highlight>integration testing</Highlight>, and <Highlight>end-to-end testing</Highlight>.
          Experience with testing frameworks like <Highlight>Jest, Mocha</Highlight>, and <Highlight>Selenium</Highlight>.
          Proficient in debugging complex issues using tools like <Highlight>Chrome DevTools</Highlight> and debugging techniques.
        </p>
      ),
    },
    {
      id: 7,
      name: "Collaboration and Communication",
      designation: "",
      content: (
        <p>
          Excellent <Highlight>communication skills</Highlight>, able to effectively collaborate with team members, stakeholders, and clients.
          Experience in <Highlight>code reviews, pair programming</Highlight>, and <Highlight>mentoring junior developers</Highlight>.
          Proficient in using <Highlight>version control systems</Highlight> like Git for collaborative development.
        </p>
      ),
    },
    {
      id: 8,
      name: "Continuous Integration and Deployment",
      designation: "",
      content: (
        <p>
          Experience in setting up and maintaining CI/CD pipelines using tools like <Highlight>Jenkins, Travis CI</Highlight>, or <Highlight>GitLab CI</Highlight>.
          Familiarity with containerization technologies like <Highlight>Docker</Highlight> and <Highlight>Kubernetes</Highlight> for consistent and scalable deployments.
          Implementing <Highlight>automated testing, code quality checks</Highlight>, and <Highlight>deployment processes</Highlight> to ensure smooth releases.
        </p>
      ),
    },
    {
      id: 9,
      name: "Cloud Computing",
      designation: "",
      content: (
        <p>
          Experience in working with cloud platforms like <Highlight>AWS, Azure</Highlight>, or <Highlight>Google Cloud</Highlight>.
          Proficient in deploying and managing applications on cloud infrastructure.
          Familiarity with serverless architectures and services like <Highlight>AWS Lambda</Highlight> or <Highlight>Azure Functions</Highlight>.
        </p>
      ),
    },
    {
      id: 10,
      name: "Performance Optimization",
      designation: "",
      content: (
        <p>
          Knowledge of performance optimization techniques for web applications.
          Experience in profiling and analyzing application performance using tools like Chrome <Highlight>DevTools</Highlight> or <Highlight>New Relic</Highlight>.
          Implementing <Highlight>caching, lazy loading</Highlight>, and <Highlight>code splitting</Highlight> to improve application speed and efficiency.
        </p>
      ),
    },
    {
      id: 11,
      name: "Security Best Practices",
      designation: "",
      content: (
        <p>
          Understanding of common security vulnerabilities and how to mitigate them.
          Implementing <Highlight>secure coding practices, input validation</Highlight>, and protection against attacks like <Highlight>XSS and CSRF</Highlight>.
          Familiarity with security tools and techniques like <Highlight>OWASP Top 10</Highlight> and <Highlight>penetration testing</Highlight>.
        </p>
      ),
    },
    {
      id: 12,
      name: "Machine Learning Experience",
      designation: "",
      content: (
        <p>
          Proficient in <Highlight>Python</Highlight> and popular ML libraries like <Highlight>scikit-learn</Highlight> and <Highlight>TensorFlow</Highlight>.
          Skilled in building models for <Highlight>classification, regression</Highlight>, and <Highlight>clustering</Highlight>.
          Experience with <Highlight>data preprocessing, feature engineering</Highlight>, and <Highlight>model deployment</Highlight>.
        </p>
      ),
    },
  ];


const content = [
    {
      title: "Who am I?",
      description:
        "Hi there! I'm Francis, a passionate Machine Learning DevOps with 4 years of experience. I specialize in building end-to-end solutions that integrate machine learning models into production-ready applications. With expertise in Python, JavaScript, TensorFlow, and AWS, I leverage my skills in ML, backend, and frontend to deliver robust and scalable systems. I collaborate with cross-functional teams, optimize ML workflows, and implement CI/CD pipelines.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
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
        <div className="h-full w-full flex items-center justify-center text-white">
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
        <div className="h-full w-full flex items-center justify-center text-white">
          <CardStack items={CARDS} />
        </div>
      ),
    },
    {
      title: "Outside of work",
      description:
        "I'm a maker at heart and I love to build things. When I'm not coding, you can find me working on DIY projects with my trusty 3D printer, experimenting with new technologies, or exploring the great outdoors. I'm passionate about learning and am always looking for new ways to challenge myself and expand my horizons. Whether it's building robots, biking along Lake Michigan, or trying out a new recipe, I'm always up for an adventure.", 
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/images/fishing.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="fish image"
          />
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
    
    <section id="about" className="text-white mt-10 py-4">
        <h1 className="text-4xl font-bold text-center py-8">About Me</h1>
        <StickyScroll content={content} />
    </section>
  )
}



export default AboutSection