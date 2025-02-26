import React, { useState } from "react";
import excelImage from "../assets/jpgs/web_excel-33055.jpg";
import learnImage from "../assets/jpgs/web_learn-33056.jpg";
import standoutImage from "../assets/jpgs/web_standout-33057.jpg";
import linetagIcon from "/icons/linetag5.svg";

const Page5 = () => {
  const [imageSrc, setImageSrc] = useState(learnImage);

  return (
    <div className="">
      <div className="bg-[#eef1f7] h-[780px]">
        <div className="border-l-2 border-dotted border-gray-400 h-32 ml-64"></div>
        <div className="mt-6 max-w-4xl w-full flex items-start">
          <img
            src={linetagIcon}
            className="px-[236px] mt-[-24px]"
            alt="Line tag"
          />
          <h1 className="text-xl ml-[-216px] mt-[-18px] text-black font-bold">
            A 3-stage learning model to turn you into a Coding Ninja
          </h1>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex">
              <div className="border-l-2 border-dotted border-gray-400 h-[93px] ml-64 mt-32"></div>
              <button
                className="h-24 w-72 mt-32 ml-7"
                onMouseEnter={() => setImageSrc(learnImage)}
                onMouseLeave={() => setImageSrc(excelImage)}
              >
                <h1 className="text-xl text-start font-bold text-gray-500">
                  Learn
                </h1>
                <p className="text-sm text-start text-gray-500 mt-3">
                  Experience seamless learning with problem-solving modules,
                  leaderboard, and awards.
                </p>
              </button>
            </div>
            <div className="flex">
              <div className="border-l-2 border-dotted border-gray-400 h-[93px] ml-64 mt-5"></div>
              <button
                className="h-24 w-72 mt-5 ml-7"
                onMouseEnter={() => setImageSrc(excelImage)}
              >
                <h1 className="text-xl text-start ">Excel</h1>
                <p className="text-sm text-start mt-3">
                  Track your skill level and make meaningful progress for you to
                  grow.
                </p>
              </button>
            </div>
            <div className="flex">
              <div className="border-l-2 border-dotted border-gray-400 h-[93px] ml-64 mt-5"></div>
              <button
                className="h-24 w-72 mt-5 ml-7"
                onMouseEnter={() => setImageSrc(standoutImage)}
                onMouseLeave={() => setImageSrc(excelImage)}
              >
                <h1 className="text-xl text-start font-bold text-gray-500">
                  Standout
                </h1>
                <p className="text-sm text-start text-gray-500 mt-3">
                  Stand out to recruiters, showcase ratings, get feedback, and
                  interview insights.
                </p>
              </button>
            </div>
          </div>
          <img
            src={imageSrc}
            className="h-96 mt-24 ml-16 transition-all duration-300"
            alt="Hovered State"
          />
        </div>
      </div>
    </div>
  );
};

export default Page5;
