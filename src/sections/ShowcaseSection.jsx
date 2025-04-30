import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <a
              className="image-wrapper"
              href="https://posting-app-share-me.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/project1.png" alt="sharing app" />
            </a>
            <div className="text-content">
              <h2>
                A Pinterest-Inspired App to Post Pins and View Profiles —
                ShareMe
              </h2>
              <p className="text-white-50 md:text-xl">
                An app build with React and Sanity and deployed on Netlify
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <a
              className="project"
              ref={project2Ref}
              href="https://simple-shirt-designer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="3D t-shirt" />
              </div>

              <h2>A 3D T-shirt Mockup Design Web App</h2>
            </a>

            <a
              className="project"
              ref={project3Ref}
              href="https://yc-directory-ebon-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
