import React from "react";
import Portfolio from '../Img/portfolioweb.jpg';
import Bookify from '../Img/ticket.jpg';
import Designing from '../Img/graphic.jpg';
import Doctors from '../Img/doctor.jpg';

const projects = [
  {
    title: "Portfolio",
    description: "A site I helped create for a client to show off their architectural and interior designs. We migrated from Netlify CMS to Contentful for better scalability.",
    image: "https://cdn.pixabay.com/photo/2021/10/08/18/55/website-6692147_1280.png",
    link: "#",
    technologies: ["React.js", "Tailwind CSS", "CSS", "GSAP", "Framer Motion", "Bootstrap", "Email.js","Vite.js"],
  },
  {
    title: "bookify",
    description:"American Curb is a local landscaping business that I designed and developed.",
    image: "https://cdn.pixabay.com/photo/2015/12/07/16/32/grunge-1080987_1280.jpg",
    link: "#",
    technologies: ["React.js", "CSS", "Mongodb","Django", "Express.js", "Machine Learning Algorithm"],
  },
  {
    title: "Clinic-Mobile",
    description:"Vuer is a Vue.js-based project that helps users visualize data in an interactive way.",
    image: "https://cdn.pixabay.com/photo/2021/11/20/03/13/female-doctor-6810748_1280.png",
    link: "#",
    technologies:  ["React.js", "CSS", "Mongodb","Django", "Express.js", "Email.js"],
  },
  {
    title: "Posters, Flyers Borchures and Logo Reveal Transition",
    description:"American Curb is a local landscaping business that I designed and developed.",
    image: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg",
    link: "https://www.americancurb.co/",
    technologies: ["Adobe After Effects", "Adobe Illustrator", "davinci resolve", "Canva"],
  },
  
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto text-center">
      <div style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase text-left  text-[#45a29e] mb-5">
          Recent<span className="text-[#c5c6c7]"> Projects</span>
        </h1>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1f2833] shadow-md rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2 text-sm text-gray-500">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="bg-[#45a29e] px-2 py-1 rounded-md text-[#c5c6c7]">{tech}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                >
                  Visit Site ›
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
