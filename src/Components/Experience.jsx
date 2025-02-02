import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      name: 'Center For Development of Advanced Computing (C-Dac)',
      degree: 'Project Intern',
      location: 'On-site, Chennai',
      link: 'https://cdac.in/index.aspx?id=CH',
      imageSrc:'https://media.assettype.com/thebridgechronicle%2F2021-02%2Fd097e2de-8327-4b1b-90dd-357d3262bb0a%2Fthebridgechronicle_import_s3fs_public_news_story_cover_images_2cdac_2.jpg?rect=0%2C0%2C747%2C420',
      imageAlt: 'C-Dac',
      duration: 'Dec 2024 - present',
    },
    {
      id: 2,
      name: 'Internship Studio',
      degree: 'Website Design and Development',
      location: 'Online',
      link: 'https://www.amrita.edu/school/engineering/chennai/',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXIRQiNEBMsrAQWFNGEuA_VrbXXmGDrACnQ&s',
      imageAlt: 'Amrita Vishwa Vidyapeetham University',
      duration: 'May 2024 - June 2024',
    },
    {
      id: 3,
      name: 'Computer Aided Machine Human Interaction (CAMHI)- Technical Club',
      degree: 'Media Team Head',
      location: 'Amrita school of engineering, Chennai.',
      link: 'https://www.amrita.edu/school/engineering/chennai/',
      imageSrc: 'https://media.licdn.com/dms/image/v2/D4E03AQGsHWGmE-Rq0w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676536857093?e=2147483647&v=beta&t=Y0U_f5lefdaVEPrd9wV_-38FOwVrSyqeWZ5GYuoTmj8',
      imageAlt: 'Amrita Vishwa Vidyapeetham University',
      duration: 'Feb 2023 - Apr 2025',
    },
    
  ];

  return (
    <section id="Experience" className="relative px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase text-[#45a29e] leading-tight text-left">
            work <span className="text-[#c5c6c7]">experience</span>
          </h1>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <a
              key={exp.id}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.01]"
            >
              <div className="flex flex-col sm:flex-row rounded-lg p-4 sm:p-6 gap-4 sm:gap-6">
                {/* Image Container */}
                <div className="flex-shrink-0">
                  <div className="w-full sm:w-24 h-24 relative rounded-lg overflow-hidden bg-[#0b0c10]">
                    <img
                      src={exp.imageSrc}
                      alt={exp.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-grow space-y-2">
                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#45a29e] leading-tight">
                    {exp.name}
                  </h4>

                  {/* Details */}
                  <div className="space-y-1">
                    <div className="text-sm sm:text-base text-[#c5c6c7] font-medium">
                      {exp.degree}
                    </div>
                    <div className="text-sm sm:text-base text-[#c5c6c7]">
                      {exp.location}
                    </div>
                    <div className="text-sm sm:text-base text-[#66fcf1]">
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;