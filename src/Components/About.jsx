import React from "react";

const About = () => {
  return (
    <div className="about flex h-screen w-full">
      <div className="sidebar flex flex-col justify-around p-[1rem]  h-full w-[16%] border-r-[2px] border-r-[#edebde]">
        <div className="sidebarText1 whitespace-nowrap font-[600] leading-[1.3] text-[0.8rem] ">
          <h3 className="text-[7rem] lg:text-[9rem] leading-[1]">ABOUT</h3>
        </div>
      </div>
      <div className="mainContent flex items-center justify-end h-full w-[84%] p-[1rem] ">
        <div className="untiltitle w-[80%]  text-right">
          <p className="text-[2.5rem] lg:text-[3.5rem] leading-[1.3] text-balance text-right">
            Hey, I'm Swaraj Singh, a creative developer who believes the web
            should feel alive. My work lives at the intersection of code and
            art, where 3D meets storytelling, where animations breathe
            personality into interfaces, and where every click reveals something
            unexpected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
