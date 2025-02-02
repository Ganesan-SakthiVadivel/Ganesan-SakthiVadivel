import React from 'react';
const Education = () => {
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
      imageSrc:'https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_JCI.png', // Replace with actual image source
      imageAlt: 'aycees Matriculation Higher Secondary School',
      duration: '2019-2021',
    },
  ];
  

  return (
    <section id="education" className="p-8">
      <div className="flex min-h-0 flex-col gap-y-3">
        <div style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}>
          <h2 className="text-6xl text-left font-bold text-yellow-300">Education</h2>
        </div>
        <br></br>
        {educationData.map((edu) => (
          <a
            key={edu.id}
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
          >
            <div className="flex rounded-lg bg-card text-card-foreground p-3">
              <div className="flex-none">
                <div
                  className="relative flex shrink-0 overflow-hidden bg-muted-background m-auto size-24"
                  data-avatar-root="">
                  <img
                    src={edu.imageSrc}
                    className="aspect-square h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="group ml-8 flex-grow flex-col items-left">
                <div className="flex flex-col">
                  <div className="flex items-left justify-between gap-x-2">
                    <h3 className="inline-flex items-left justify-center text-4xl font-bold sm:text-3xl">
                      {edu.name}
                    </h3>
                  </div>
                  <div className="flex items-left justify-items-end gap-x-2 text-base">
                    <div className="font-sans text-2xl ">{edu.degree}</div>
                    </div>
                    <div className="flex items-left font-sans font-left text-sx">{edu.location}</div>
                    <div className="flex items-left font-sans font-left text-sx">{edu.duration}</div>
                    
                  </div>
                  
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Education;
