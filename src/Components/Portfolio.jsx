import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ReactTyped } from "react-typed";
import './Portfolio.css';
import { motion, useScroll, useSpring } from "framer-motion";
import imglogo from '../Img/gv-cys.jpg';
import bglogo from '../Img/backcover.jpg';
import About from "./About";
import Experience from "./Experience";
import SkillsHierarchy from "./Skills";
import Projects from "./Projects";
import Navbar from "./Navbar";
import ContactFAQPage from "./Contacts";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro", {
        xPercent: "-100",
        duration: 0,
        delay: 0,
      })
        .from(["#tl1", "#tl2"], {
          opacity: 0,
          y: "+30",
          stagger: 0.5,
        })
        .to(["#tl1", "#tl2"], {
          opacity: 0,
          y: "-30",
          delay: 0.2,
        })
        .to("#intro", {
          xPercent: "-100",
          duration: 0.7,
        })
        .from("#welcome1", {
          opacity: 0,
          duration: 0.5,
        })
        .from("#welcome2", {
          opacity: 0,
          duration: 0.4,
        })
        .from("#Portfolio", {
          opacity: 0,
          duration: 0.4,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <div className="z-10 w-full h-full" ref={comp}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="progress-bar fixed top-0 left-0 right-0 h-1 bg-[#45a29e] z-50"
          style={{ scaleX }}
        />

        {/* Intro Section */}
        <div
          id="intro"
          className="fixed inset-0 p-4 sm:p-10 flex flex-col items-center justify-center bg-black text-yellow-500 z-50 space-y-6 text-center"
        >
          <h1 id="tl1" className="text-xl sm:text-3xl max-w-3xl">
            Go ahead, Never Settle; Ask New questions, Seeking Answers, Knowledge Through Hard, Invaluable, Diverse, Endless Learning.
          </h1>
          <h1 id="tl2" className="text-sm sm:text-lg">- Inspired by Albert Einstein</h1>
        </div>

        {/* Main Portfolio Content */}
        <div id="Portfolio" className="relative">
          <Navbar />
          
          <div className="block lg:flex min-h-screen relative">
            {/* Profile Sidebar */}
            <div className="relative lg:fixed lg:left-28 lg:top-32 lg:w-1/3 max-w-sm p-10 z-40">
              <div className="container mx-auto bg-[#1f2833]/30 text-[#c5c6c7] rounded-lg shadow-lg h-auto text-center backdrop-blur-lg border border-[#66fcf1]/20">
                <div className="relative h-4/5 w-full rounded-t-lg overflow-hidden">
                  <img 
                    src={bglogo} 
                    alt="background cover"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-4 py-6">
                  <div className="relative -mt-24">
                    <img 
                      src={imglogo} 
                      alt="profile" 
                      className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-[#66fcf1] bg-[#1f2833] mx-auto"
                    />
                  </div>

                  <h1 className="text-xl font-bold mt-4">Ganesan Sakthivadivel</h1>
                  <p className="mt-2">Software Development Engineer</p>

                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="#contact"
                      className="bg-[#45a29e] text-white px-4 py-2 rounded-lg hover:bg-[#45a29e]/80 transition-colors"
                    >
                      Contact
                    </a>
                    <button 
                      className="border-2 border-[#45a29e] text-[#45a29e] px-4 py-2 rounded-lg hover:bg-[#45a29e] hover:text-white transition-colors"
                    >
                      Resume/CV
                    </button>
                  </div>

                  <div className="flex justify-center space-x-6 mt-6">
                    <a href="https://www.linkedin.com/in/ganesan-sakthivadivel/" className="text-[#c5c6c7] hover:text-[#45a29e] transition-colors">
                      <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a href="https://www.instagram.com/ganesan.05/" className="text-[#c5c6c7] hover:text-[#45a29e] transition-colors">
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="https://www.youtube.com/@GrandSolutionVault" className="text-[#c5c6c7] hover:text-[#45a29e] transition-colors">
                      <i className="fab fa-youtube text-xl"></i>
                    </a>
                    <a href="mailto:ganesan.cloud@gmail.com" className="text-[#c5c6c7] hover:text-[#45a29e] transition-colors">
                      <i className="fa fa-envelope text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:ml-[33.333333%] relative">
              <div className="px-4 lg:px-16 pt-36 space-y-16">
                <section id="home">
                  <About />
                </section>

                <section id="work">
                  <Experience />
                </section>

                <section id="about">
                  <SkillsHierarchy />
                </section>

                <section id="projects">
                  <Projects />
                </section>

                <section id="contact">
                  <ContactFAQPage />
                </section>

                <div className="py-8">
                  <button className="w-full fixed right-10 z-10 sm:w-auto px-6 py-3 bg-[#45a29e] text-white rounded-lg hover:bg-[#45a29e]/80 transition-colors">
                    Download Resume/CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;