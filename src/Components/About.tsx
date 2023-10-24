import React from "react";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import { services } from "@/Constant/Data";

import Services from "./Services";

const About = () => {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
      <div className="col-span-12 bg-slate-500 lg:col-span-3 p-4 text-center  rounded-2xl">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-zinc-200 lg:col-span-9  rounded-2xl">
        <Rightbar />
        <div className="px-6 p-1">
          <p className="font-medium  my-3">
            As a dedicated and proficient full-stack developer I am seeking a
            challenging role in a dynamic organization where I can leverage my
            extensive experience in web technologies, contributing to innovative
            projects, and continually enhancing my skills to foster personal and
            professional growth while adding value to the company objectives
            and vision.
          </p>
        </div>
        <div className=" mt-5 bg-gray-400 lg:h-50 md:h-80 pb-4 rounded-lg " >
          <h5 className="my-3 font-bold text-xl tracking-wider">What i Offer</h5>
          <Services/>
        </div>
      </div>
    </div>
  );
};

export default About;
