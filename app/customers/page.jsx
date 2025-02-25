"use client"

import Image from "next/image";
import React, { useState } from 'react';
import Entitylist from "../components/entitylist";
import CombinedCharts from "../components/charts/combinedcharts";
import Bookingtable from "../components/Bookingtable";

export default function Home() {
  return (
      <div className="flex bg-white h-[100%] w-[100%] rounded-[12px] p-4 gap-5 ">
        <Entitylist/>
      <div className="flex w-[100%] lg:w-[100%] lg:gap-2 md:w-[100%] sm:gap-4 h-[100%] md:flex-col overflow-y-auto no-scrollbar overflow-hidden md:gap-6 ">
        <CombinedCharts/>
        <Bookingtable/>
      </div>
      </div>
  );
}
