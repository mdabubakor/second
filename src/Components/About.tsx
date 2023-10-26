'use client'
import React from "react";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import { services } from "@/Constant/Data";

import Services from "./Services";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
      <div className="col-span-12 bg-slate-900  lg:col-span-3 p-4 text-center  rounded-2xl">
        <Sidebar />
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 2.5}}
      className="col-span-12 bg-slate-900 text-white   lg:col-span-9   rounded-2xl">
        <Rightbar />
        <div
       
        className="px-6 p-1 my-16 items-center justify-center flex flex-col">
          <h2 className="flex items-center justify-center text-2xl my-4 py-4 font-serif w-40  font-semibold shadow-inner  shadow-slate-600 ">About me</h2>
          <input type="range" />
          <p
         
          className="font-medium  my-3">
            As a dedicated and proficient full-stack developer I am seeking a
            challenging role in a dynamic organization where I can leverage my
            extensive experience in web technologies, contributing to innovative
            projects, and continually enhancing my skills to foster personal and
            professional growth while adding value to the company objectives
            and vision.
          </p>
        </div>
        <div className="  bg-slate-900 py-5   rounded-lg " >
          <h5 className=" font-bold text-xl ms-3 shadow-inner shadow-zinc-600 w-36 flex items-center justify-center  ">What i Offer</h5>
          <div >

          <Services/>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
