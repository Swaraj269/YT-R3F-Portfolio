import React from "react";

const Landing = () => {
  return (
    <div className="landing flex h-screen w-full ">
      <div className="sidebar flex flex-col justify-around p-[1rem]  h-full w-[16%] border-r-[2px] border-r-[#edebde]">
        <div className="sidebarText1 whitespace-nowrap font-[600] leading-[1.3] text-[0.8rem] lg:text-[1.2rem] ">
          <h3>With a background in both</h3>
          <h3 className="mb-[2.5rem]">design and development.</h3>
        </div>
        <div className="sidebarText2 whitespace-nowrap font-[600] text-[0.8rem] lg:text-[1.2rem]  ">
          <h3 className="mb-[2.5rem]">I transform creative visions</h3>
          <h3>into pixel-perfect realities.</h3>
        </div>
      </div>
      <div className="mainContent flex flex-col justify-between h-full w-[84%] p-[1rem] ">
        <div className="title">
          <h1 className="text-[6rem] lg:text-[9rem] leading-[1] font-[500]">
            CREATIVE
          </h1>
          <h1 className=" text-[6rem] lg:text-[9rem] leading-[1] font-[500] ml-[5.6rem] lg:ml-[7rem]">
            DEVELOPER
          </h1>
          <h1 className="text-[6rem] lg:text-[9rem] leading-[1] font-[500]">
            DESIGNER
          </h1>
        </div>
        <div className="untiltitle text-right">
          <h1 className="text-[6rem] lg:text-[9rem] mr-[5rem] lg:mr-[7.5rem] leading-[1] font-[500]">
            SINCE
          </h1>
          <h1 className="text-[6rem] lg:text-[9rem] leading-[1] font-[500]">
            - 2022
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
