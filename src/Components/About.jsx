import React from 'react';
import './About.css';

const About = () => {
  const educationData = [
    {
      id: 1,
      name: 'Amrita Vishwa Vidyapeetham University',
      degree: 'Bachelor of Technology, Computer and Communication Engineering',
      location: 'Chennai, TamilNadu, India',
      link: 'https://www.amrita.edu/school/engineering/chennai/',
      imageSrc: 'https://webfiles.amrita.edu/2024/04/WhQq1FiB-amrita-vishwa-vidyapeetham-university-logo-colored-version.svg',
      imageAlt: 'Amrita Vishwa Vidyapeetham University',
      duration: '2021-2025',
    },
    {
      id: 2,
      name: 'Jaycees Matriculation Higher Secondary School',
      degree: 'High School',
      location: 'Erode, TamilNadu, India',
      link: 'https://jaycees-school.org/frontend/',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_JCI.png',
      imageAlt: 'Jaycees Matriculation Higher Secondary School',
      duration: '2019-2021',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] p-4">
      {/* Hero Section */}
      <section id="summary" className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase text-[#45a29e] text-left leading-tight">
          Software Development <span className="text-[#c5c6c7]">Engineer</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-justify text-[#c5c6c7]">
          A passionate Full Stack MERN Software Development Engineer and AI/ML enthusiast skilled in JavaScript, Python, and DSA. Experienced in building intelligent systems, scalable apps, and visually appealing designs. Proficient in digital marketing to boost online engagement. Enthusiast of new technologies and active in open-source contributions.
        </p>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          <div className="flex flex-col items-center p-4 rounded-lg">
            <span className="text-3xl sm:text-4xl font-bold text-[#45a29e]">+2</span>
            <span className="text-sm text-[#c5c6c7]">Years of Experience</span>
          </div>
          <div className="flex flex-col items-center p-4  rounded-lg">
            <span className="text-3xl sm:text-4xl font-bold text-[#45a29e]">+10</span>
            <span className="text-sm text-[#c5c6c7]">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg">
            <span className="text-3xl sm:text-4xl font-bold text-[#45a29e]">+12</span>
            <span className="text-sm text-[#c5c6c7]">Top Technical framework used</span>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="relative h-auto sm:h-[16em] w-full sm:w-[18em] mx-auto">
      {/* Background ribbons */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-8 -left-8 w-24 h-32 bg-[#1f2833] rotate-45 transform origin-bottom-right"></div>
        <div className="absolute -top-8 -right-8 w-24 h-32 bg-[#45a29e] rotate-45 transform origin-bottom-left opacity-50"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-32 bg-[#66fcf1] -rotate-45 transform origin-top-right opacity-30"></div>
        <div className="absolute -bottom-8 -right-8 w-24 h-32 bg-[#45a29e] -rotate-45 transform origin-top-left opacity-40"></div>
      </div>
      
      {/* Main card content */}
      <div className="relative h-full rounded-2xl bg-[#0b0c10] bg-opacity-95 text-[#c5c6c7] p-6 flex justify-center items-left flex-col gap-3 border border-[#1f2833] backdrop-blur-sm shadow-xl hover:border-[#66fcf1]/30 transition-all duration-300">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-medium text-[#66fcf1]">
            Graphic Designing and video Editing
          </h1>
         
        </div>
        
        <button className="group relative h-fit w-fit px-4 py-2 rounded-full flex items-center gap-2 bg-[#1f2833] hover:bg-[#45a29e] transition-all duration-300 shadow-lg hover:shadow-[#66fcf1]/20">
          <p className="text-[#66fcf1] group-hover:text-white">Visit</p>
          <svg
            className="w-5 h-5 text-[#66fcf1] group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>

          <div className="relative h-auto sm:h-[16em] w-full sm:w-[18em] mx-auto">
      {/* Background ribbons */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-8 -left-8 w-24 h-32 bg-[#1f2833] rotate-45 transform origin-bottom-right"></div>
        <div className="absolute -top-8 -right-8 w-24 h-32 bg-[#45a29e] rotate-45 transform origin-bottom-left opacity-40"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-32 bg-[#66fcf1] -rotate-45 transform origin-top-right opacity-20"></div>
        <div className="absolute -bottom-8 -right-8 w-24 h-32 bg-[#45a29e] -rotate-45 transform origin-top-left opacity-30"></div>
      </div>
      
      {/* Main card content */}
      <div className="relative h-full rounded-2xl bg-[#0b0c10] bg-opacity-95 text-[#c5c6c7] p-6 flex justify-center items-left flex-col gap-3 border border-[#1f2833] backdrop-blur-sm shadow-xl hover:border-[#66fcf1]/30 transition-all duration-300">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-medium text-[#66fcf1]">
            web development and software development
          </h1>
          
        </div>
        
        <button className="group relative h-fit w-fit px-4 py-2 rounded-full flex items-center gap-2 bg-[#1f2833] hover:bg-[#45a29e] transition-all duration-300 shadow-lg hover:shadow-[#66fcf1]/20">
          <p className="text-[#66fcf1] group-hover:text-white">Visit</p>
          <svg
            className="w-5 h-5 text-[#66fcf1] group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="Experience" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex min-h-0 flex-col">
          <div style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase text-[#45a29e] mb-8 text-left">
              education <span className="text-[#c5c6c7]">qualification</span>
            </h1>
          </div>
          
          <div className="space-y-6">
            {educationData.map((edu) => (
              <a
                key={edu.id}
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-[1.01]"
              >
                <div className="flex flex-col sm:flex-row rounded-lg md:bg-[#0b0c10] sm:bg-[#1f2833] p-4 sm:p-6">
                  <div className="flex-none mb-4 sm:mb-0">
                    <div className="relative flex shrink-0 overflow-hidden bg-white rounded-lg m-auto w-16 h-16 sm:w-24 sm:h-24">
                      <img
                        src={edu.imageSrc}
                        alt={edu.imageAlt}
                        className="aspect-square h-full w-full object-contain p-2"
                      />
                    </div>
                  </div>
                  <div className="sm:ml-8 flex-grow">
                    <h4 className="text-xl sm:text-3xl font-bold text-[#45a29e] mb-2">
                      {edu.name}
                    </h4>
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base text-[#c5c6c7]">{edu.degree}</div>
                      <div className="text-sm sm:text-base text-[#c5c6c7]">{edu.location}</div>
                      <div className="text-sm sm:text-base text-[#c5c6c7]">{edu.duration}</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;