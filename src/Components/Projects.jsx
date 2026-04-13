import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const card = root.querySelectorAll(".card");
      const images = root.querySelectorAll(".card img");
      const totalCard = card.length;
      if (totalCard === 0) return;

      gsap.set(card[0], { y: "0%", scale: 1, rotation: 0 });
      gsap.set(images[0], { scale: 1 });

      for (let i = 1; i < totalCard; i++) {
        gsap.set(card[i], { y: "100%", scale: 1, rotation: 0 });
        gsap.set(images[i], { scale: 1 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: `+=${window.innerHeight * (totalCard - 1)}`,
          pin: true,
          scrub: 0.8,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < totalCard - 1; i++) {
        const currentCard = card[i];
        const currentImage = images[i];
        const nextCard = card[i + 1];
        const position = i;

        tl.to(
          currentCard,
          {
            scale: 0.5,
            rotation: 10,
            duration: 1,
            ease: "none",
          },
          position,
        )
          .to(
            currentImage,
            {
              scale: 2,
              duration: 1,
              ease: "none",
            },
            position,
          )
          .to(
            nextCard,
            {
              y: "0%",
              duration: 1,
              ease: "none",
            },
            position,
          );
      }

      return () => {
        tl.kill();
      };
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="projects relative flex h-screen w-full">
      <div className="sidebar flex flex-col justify-around p-[1rem]  h-full w-[16%] border-r-[2px] border-r-[#edebde]">
        <div className="sidebarText1 whitespace-nowrap font-[600] leading-[1.3] text-[0.8rem] ">
          <h3 className="text-[7rem] lg:text-[9rem] leading-[1]">PROJECTS</h3>
        </div>
      </div>
      <div className="mainContent flex items-center justify-center h-full w-[84%] p-[1rem] ">
        <div className="card-container relative h-[50%] w-[50%] rounded-[0.5rem] overflow-hidden ">
          <div className="card overflow-hidden  absolute h-full w-full rounded-[0.5rem] ">
            <div className="tag z-[2] px-[1rem] py-[0.4rem] bg-[#edebde] absolute top-[4%] left-[4%]">
              <h3 className="text-[0.9rem] ">ASTRARISE</h3>
            </div>
            <img
              className="relative h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1773772255047-74744067601e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="card overflow-hidden absolute h-full w-full rounded-[0.5rem] ">
            <div className="tag z-[2] px-[1rem] py-[0.4rem] bg-[#edebde] absolute top-[4%] left-[4%]">
              <h3 className="text-[0.9rem] ">ZEIGRANIK</h3>
            </div>
            <img
              className="relative h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1562666938-671e1509e2ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="card overflow-hidden absolute h-full w-full rounded-[0.5rem] ">
            <div className="tag z-[2] px-[1rem] py-[0.4rem] bg-[#edebde] absolute top-[4%] left-[4%]">
              <h3 className="text-[0.9rem] ">MOTION WALK</h3>
            </div>
            <img
              className="relative h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1623857214741-ceb1aed6976a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="card overflow-hidden absolute h-full w-full rounded-[0.5rem] ">
            <div className="tag z-[2] px-[1rem] py-[0.4rem] bg-[#edebde] absolute top-[4%] left-[4%]">
              <h3 className="text-[0.9rem] ">RING BELL</h3>
            </div>
            <img
              className="relative h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1681479485258-f376382976c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
