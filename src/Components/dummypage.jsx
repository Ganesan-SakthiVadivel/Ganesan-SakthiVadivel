import React from "react";
import './Project.css';
import Imglogo from '../Img/Green and Yellow Simple Clean Shoes Sale Banner.jpg';

const ProjectCard = ({ projectName, techStack, liveLink, githubLink, imageSrc, altText }) => (
  <div 
        className="flex justify-center p-5 gap-16 w-full rounded-xl flex-col sm:flex-row items-center project-glass bg-[#1f2833]">
    <div>
      <img
        alt={altText}
        loading="lazy"
        width="400"
        height="500"
        className="w-full h-full"
        src={imageSrc}
      />
    </div>
    <div className="flex w-full lg:w-1/2 justify-center flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">{projectName}</h1>
      <hr />
      <div className="flex gap-3 flex-wrap">
        {techStack.map((tech, index) => (
          <div key={index} className="p-2 border-2 border-[#45a29e] text-[#45a29e] rounded-2xl">
            {tech}
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <a
          className="p-2 px- border-[1px] items-center cursor-pointer bg-[#c5c6c7] border-white text-[#1f2833] rounded-xl"
          href={liveLink}
        >
          Visit site
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      technology: ["React.js", "Tailwind CSS", "CSS", "GSAP", "Framer Motion", "Bootstrap", "Email.js","Vite.js"],
      link: "#",
      image:"ogo",
      description: "A site I helped "
    },
    {
      title: "Bookify",
      technology: ["React.js", "CSS", "Mongodb","Django", "Express.js", "Machine Learning Algorithm"],
      link: "#",
      image: 'https://cdn.pixabay.com/photo/2014/08/27/16/21/travelcard-429277_960_720.jpg',
      description: "A site I helped "
    },
    {
      title: "Clinic-Mobile",
      technology: ["React.js", "CSS", "Mongodb","Django", "Express.js", "Email.js"],
      link: "#",
      image: Imglogo,
      description: "A site I helped "
    },
    {
      title: "Posters, Flyers Borchures and Logo Reveal Transition",
      technology: ["Adobe After Effects", "Adobe Illustrator", "davinci resolve", "Canva"],
      link: "#",
      image: Imglogo,
      description: "A site I helped "
  
    },
  ];

  return (
    <div className="overflow-hidden p-5 lg:p-10 gap-16 flex flex-col justify-center items-left">
      <div style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase text-left  text-[#45a29e]">
          Recent<span className="text-[#c5c6c7]"> Project</span>
        </h1>
      </div>
      <p className="text-secondary text-lg">
        The following projects helped me a lot in grasping and mastering a ton of concepts about Front-End and Back-End.
      </p>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.projectName}
          technology={project.techStack}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
          imageSrc={project.imageSrc}
          altText={project.altText}
        />
      ))}
    </div>
  );
};

export default Projects;
