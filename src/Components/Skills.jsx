import React, { useState } from "react";

const SkillsChartAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Frontend Development >>",
      items: [
        { name: "HTML5", img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
        { name: "Bootstrap", img: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" },
        { name: "CSS", img: "https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000" },
        { name: "React", img: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
        { name: "Angular", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original-wordmark.svg" },
        { name: "Vue", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" },
        { name: "FramerMotion", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original-wordmark.svg" },
        { name: "ReactBootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" },
        { name: "ReactRouter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" },
      ],
    },
    {
      title: "Backend Development >>",
      items: [
        { name: "Node.js", img: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
        { name: "MongoDB", img: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000" },
        { name: "MySQL", img: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" },
        { name: "Docker", img: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000" },
        { name: "Express JS", img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" },
        { name: "Redis", img: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000" },
        { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" },
      ],
    },
    {
      title: "Data Processing & AI/ML >>",
      items: [
        { name: "Python", img: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
        { name: "scikitlearn", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "xml", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" },
        { name: "tensorflow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg" },
        { name: "numpy", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain-wordmark.svg" },
        { name: "matplotlib", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg" },
        { name: "xml", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" },
        { name: "tensorflow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg" },
      
      ],
    },
    {
      title: "Graphic Designing and Others >>",
      items: [
        { name: "Adobe photoshop", img: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000" },
        { name: "Adobe indesign", img: "https://img.icons8.com/?size=100&id=13675&format=png&color=000000" },
        { name: "Adobe illustrator", img: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000" },
        { name: "Adobe premiere pro", img: "https://img.icons8.com/?size=100&id=e57Y1CnsOasB&format=png&color=000000" },
        { name: "Adobe After effect", img: "https://img.icons8.com/?size=100&id=XJqAuI8VfoCe&format=png&color=000000" },
        { name: "Davinci resolver", img: "https://img.icons8.com/?size=100&id=40604&format=png&color=000000" },
        { name: "canva", img: "https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000" },
        { name: "git", img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
        { name: "github", img: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000" },
        { name: "gitlab", img: "https://img.icons8.com/?size=100&id=34886&format=png&color=000000" },
      ],
    },
  ];

  return (
    <div className="skills-chart p-5">
      <div className="mb-10">
        <h1 className="text-6xl md:text-8xl font-extrabold uppercase text-left text-[#45a29e]">
          Technical <span className="text-[#c5c6c7]">tools</span>
        </h1>
      </div>
      {/* <div className="w-full mx-auto p-3 border border-dashed rounded-lg shadow-lg"> */}
      <div className="w-full mx-auto p-3 shadow-lg">

        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <div
              className="cursor-pointer bg-[#1f2833]  hover:bg-[#45a29e]  hover:border hover:border-gray-300 p-4 rounded-lg hover:scale-[1.01]"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-left text-[#c5c6c7] hover:text-[#1f2833] ">{section.title}</h3>
            </div>
            {activeIndex === index && (
              <div className="bg-[#0b0c10] p-4 border border-gray-300 rounded-lg text-[#c5c6c7]">
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <img src={item.img} alt={item.name} className="w-6 h-6" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsChartAccordion;
