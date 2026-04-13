import React from "react";

const Footer = () => {
  return (
    <div className="footer flex h-screen w-full">
      <div className="sidebar flex flex-col justify-around p-[1rem]  h-full w-[16%] border-r-[2px] border-r-[#edebde]">
        <div className="sidebarText1 whitespace-nowrap font-[600] leading-[1.3] text-[0.8rem] ">
          <h3 className="text-[7rem] lg:text-[9rem] leading-[1]">CONTACT</h3>
        </div>
      </div>
      <div className="mainContent pb-[5rem] flex flex-col justify-end h-full w-[84%] p-[1rem] ">
        <div className="title">
          <h1 className="text-[3.8rem] lg:text-[5.2rem] leading-[1.1] font-[600] ">
            Hope this gave you a <br /> feel for what I do.
          </h1>
        </div>
        <div className="email mt-[2rem] lg:mt-[4rem] ">
          <h2 className=" text-[1.5rem] lg:text-[2.6rem] ">
            Working on something exciting? Need a creative <br /> developer who
            gets it? Let's chat.
          </h2>
          <h1 className="text-[2rem] lg:text-[4rem] underline font-[600] cursor-pointer">
            swarajsingh@gmail.com
          </h1>
        </div>
        <div className="socials mt-[2.4rem] lg:mt-[4rem] ">
          <h1 className="text-[2rem] lg:text-[3.6rem] font-[700]">SOCIALS</h1>
          <div className="socialsLink mt-[1rem] flex gap-[1.3rem] ">
            <h3 className="text-[1.3rem] lg:text-[2.4rem] font-[500]">Instagram</h3>
            <h3 className="text-[1.3rem] lg:text-[2.4rem] font-[500]">LinkedIn</h3>
            <h3 className="text-[1.3rem] lg:text-[2.4rem] font-[500]">GitHub</h3>
            <h3 className="text-[1.3rem] lg:text-[2.4rem] font-[500]">Awwwards</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
