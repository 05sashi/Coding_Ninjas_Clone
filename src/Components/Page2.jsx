import React, { useContext } from "react";
import { CodingNinjasContext } from "../Context/ContextAPI";
import { useInView } from "react-intersection-observer";

import AdvantageLogo from "../assets/SVGs/advantage_logo.svg";
import LogoWhite from "../assets/SVGs/logo_white.svg";
import Check from "../assets/SVGs/check_fill.svg";

const SpecificationCard = ({ icon, bgColor, heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className={`h-24 w-24 rounded-3xl flex items-center justify-center ${bgColor} animated-icon`}
      >
        <img
          src={icon}
          className="h-12 w-12 items-center justify-center p-6 invert"
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className="animated-text text-white text-8xl font-bold opacity-40">
          {heading}
        </h1>
        <p className="animated-para text-white text-4xl opacity-40 mt-5">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

const Page2 = () => {
  const contextValues = useContext(CodingNinjasContext) || {};
  const { scroll = () => {} } = contextValues;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className="bg-neutral-900 min-h-screen pb-24">
      <div className="bg-neutral-900 h-32 w-full" />
      <div className="w-full bg-neutral-900">
        <div className="mt-9 flex flex-col gap-2 mb-20">
          <h1 className="animated-text text-white text-7xl font-bold text-center opacity-40">
            9 years of
          </h1>
          <h1 className="animated-text text-white text-7xl font-bold text-center opacity-40">
            empowering
          </h1>
          <h1 className="animated-text text-white text-7xl font-bold text-center opacity-40">
            tech careers
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="mt-20">
            <SpecificationCard
              icon="/icons/study.png"
              bgColor="bg-purple-900"
              heading="1.5 Lac+ learners"
              paragraph="crack dream roles at top tech companies"
            />
          </div>

          <div className="border-l-2 border-dotted border-gray-500 h-32" />

          <div className="mt-[-20px]">
            <SpecificationCard
              icon="/icons/thai.png"
              bgColor="bg-green-600"
              heading="1,400 Alumni in MAANG"
              paragraph="& more in 103/111 Unicorns"
            />
          </div>

          <div className="border-l-2 border-dotted border-gray-500 h-32" />

          <div className="mt-[-20px]">
            <SpecificationCard
              icon="/icons/rupee.png"
              bgColor="bg-pink-500"
              heading="1 Cr+ highest CTC"
              paragraph="after completing the course"
            />
          </div>

          <div className="border-l-2 border-dotted border-gray-500 h-32" />

          <div className="mt-[-20px]">
            <SpecificationCard
              icon="/icons/trending.svg"
              bgColor="bg-blue-600"
              heading="128% average hike"
              paragraph="via our placement cell"
            />
          </div>

          <button className="px-6 py-3 flex items-center justify-center bg-orange-500 text-white font-bold text-xl rounded-lg hover:bg-orange-400 mt-16">
            Explore offerings
            <span className="ml-2">
              <img className="h-6 invert" src="/icons/upper.png" alt="" />
            </span>
          </button>
        </div>

        <div className="mt-24 mb-16">
          <h1 className="text-8xl font-bold text-center opacity-40 animated-text tracking-wide text-white/10 mb-16">
            WHY US
          </h1>

          <div className="flex justify-center gap-24">
            <div className="w-96 rounded-2xl overflow-hidden shadow-lg bg-[#1E1E1E] border border-[#36312f]">
              <div className="h-96 bg-neutral-900 flex items-center justify-center">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/icons/video2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <h2 className="text-[#F66C3B] text-xl font-semibold">
                  Ankush Singla
                </h2>
                <p className="text-gray-400 text-sm">
                  Co-Founder of Coding Ninjas | Mentor
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <button className="w-[450px] h-20 rounded-xl bg-[#1E1E1E] flex items-center gap-4 px-6 border border-[#36312f] hover:bg-neutral-800 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/icons/personmsg.png" className="h-8 w-8" alt="" />
                </div>
                <span className="text-white text-lg font-medium">
                  Fastest 1:1 doubt support
                </span>
              </button>

              <button className="w-[450px] h-20 rounded-xl bg-transparent flex items-center gap-4 px-6 border border-[#36312f] hover:bg-neutral-800 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/icons/personmic.png" className="h-8 w-8" alt="" />
                </div>
                <span className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors">
                  Stanford/IIT/MAANG faculty
                </span>
              </button>

              <button className="w-[450px] h-20 rounded-xl bg-transparent flex items-center gap-4 px-6 border border-[#36312f] hover:bg-neutral-800 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src="/icons/placement.png" className="h-8 w-8" alt="" />
                </div>
                <span className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors">
                  Placement assistance
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-5 flex flex-col gap-10 items-center bg-advantage bg-cover bg-center bg-no-repeat">
        <h3 className="text-xl text-center text-transparent font-semibold bg-[linear-gradient(113deg,_#0047ff_9.94%,_#00c2ff_90%)] bg-clip-text md:text-2xl">
          The Coding Ninjas advantage
        </h3>

        <div className="max-w-screen-lg w-full border border-[#403f3f] rounded-3xl">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-8 px-2"></th>
                <th className="py-8 px-2 flex justify-center">
                  <img src={AdvantageLogo} alt="" className="min-w-8" />
                </th>
                <th className="py-8 px-2 text-xs font-medium text-[#b2b2b2] sm:text-sm md:text-base">
                  Free resources
                </th>
                <th className="py-8 px-2 text-xs font-medium text-[#b2b2b2] sm:text-sm md:text-base">
                  Other courses
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 pr-0 text-xs font-semibold text-[#e3e3e3] sm:text-sm md:text-base md:pl-10">
                  Structured + problem solving based
                </td>
                <td className="py-5 flex justify-center">
                  <img src={Check} alt="" />
                </td>
                <td className="text-center text-[#b2b2b2]">
                  <i className="bx bx-x text-2xl sm:text-3xl"></i>
                </td>
                <td className="text-center text-[#b2b2b2]">
                  <i className="bx bx-check text-2xl sm:text-3xl"></i>
                </td>
              </tr>
              <tr className="even:bg-[#141414]">
                <td className="p-4 pr-0 text-xs font-semibold text-[#e3e3e3] sm:text-sm md:text-base md:pl-10">
                  Fastest 1:1 doubt support
                </td>
                <td className="py-5 flex justify-center">
                  <img src={Check} alt="" />
                </td>
                <td className="text-center text-[#b2b2b2]">
                  <i className="bx bx-x text-2xl sm:text-3xl"></i>
                </td>
                <td className="text-center text-[#b2b2b2]">
                  <i className="bx bx-x text-2xl sm:text-3xl"></i>
                </td>
              </tr>
              <tr>
                <td className="p-4 pr-0 text-xs font-semibold text-[#e3e3e3] sm:text-sm md:text-base md:pl-10">
                  Integrated prep platform
                </td>
                <td className="py-5 flex justify-center">
                  <img src={Check} alt="" />
                </td>
                <td className="text-center text-[#b2b2b2]">
                  <i className="bx bx-x text-2xl sm:text-3xl"></i>
                </td>
                <td className="text-center text-[#b2b2b2]">
                  <i className="bx bx-x text-2xl sm:text-3xl"></i>
                </td>
              </tr>
              <tr className="even:bg-[#141414]">
                <td className="p-4 pr-0 text-xs font-semibold text-[#e3e3e3] sm:text-sm md:text-base md:pl-10">
                  Profiles highlighted on Naukr
                </td>
                <td className="py-5 flex justify-center">
                  <img src={Check} alt="" />
                </td>
                <td className="text-center text-[#b2b2b2]">
                  <i className="bx bx-x text-2xl sm:text-3xl"></i>
                </td>
                <td className="text-center text-[#b2b2b2]">
                  <i className="bx bx-x text-2xl sm:text-3xl"></i>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            ref={ref}
            className="mt-16 py-10 px-5 flex flex-col gap-10 md:px-10"
          >
            <div>
              <div className="w-full flex flex-wrap justify-between items-center gap-2">
                <img src={LogoWhite} alt="" />
                <div className="w-full flex items-center justify-between gap-2 sm:max-w-fit">
                  <h3 className="text-sm font-medium text-transparent bg-[linear-gradient(112deg,_#fa00ff_-3.21%,_#ff8a00_97.8%)] bg-clip-text">
                    Your dream role, faster and with confidence!
                  </h3>
                  <i className="bx bxs-zap text-transparent bg-yellow-500 bg-clip-text"></i>
                </div>
              </div>
              <div className="w-full h-1 relative mt-3 bg-[#2d2d2d] rounded-3xl">
                <div
                  className={`w-full h-1 absolute top-0 left-0 bg-[linear-gradient(112deg,_#fa00ff_-3.21%,_#ff8a00_97.8%)] rounded-3xl ${
                    inView ? "animated-coding-ninjas" : ""
                  }`}
                ></div>
              </div>
            </div>

            <div>
              <div className="w-full flex flex-wrap justify-between items-center gap-2">
                <h2 className="text-xl font-medium text-white">Others</h2>
                <h3 className="w-full text-sm font-medium text-gray-400 sm:max-w-fit">
                  Average role, under-confident
                </h3>
              </div>
              <div className="w-full h-1 relative mt-3 bg-[#2d2d2d] rounded-3xl">
                <div
                  className={`w-[75%] h-1 absolute top-0 left-0 bg-[#999999] rounded-3xl ${
                    inView ? "animated-others" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <button className="px-6 py-3 flex items-center justify-center bg-orange-500 text-white font-bold text-2xl rounded-lg hover:bg-orange-400 mt-16">
          Explore offerings
          <span className="ml-2">
            <img className="h-6 invert" src="/icons/upper.png" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Page2;
