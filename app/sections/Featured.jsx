import React from "react";
import SvgBackground from "../components/SvgBackground";
import { HiArrowTrendingDown } from "react-icons/hi2";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoIosStats } from "react-icons/io";
import { GoFlame } from "react-icons/go";
import { PiTimer } from "react-icons/pi";
import { LuTriangleAlert } from "react-icons/lu";
import { FaCopyright } from "react-icons/fa6";
import { FaSlack } from "react-icons/fa";
import { SiXero } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { SiZoho } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { SiBankofamerica } from "react-icons/si";
import { SiQbittorrent } from "react-icons/si";
import { PiSquareLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { SiChase } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { SiNubank } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import { LuFileChartColumn } from "react-icons/lu";
import { ImCoinEuro } from "react-icons/im";
import { RiArrowUpFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { HiOutlineSupport } from "react-icons/hi";
import SvgCircleBackground from "../components/SvgCircleBackground";
import Image from "next/image";

const Apps = [
  {
    icon: <FaSlack />,
    position: "start",
  },
  {
    icon: <SiXero />,
    position: "end",
  },
  {
    icon: <FaAmazon />,
    position: "start",
  },
  {
    icon: <SiZoho />,
    position: "end",
  },
  {
    icon: <FaFacebook />,
    position: "start",
  },
  {
    icon: <SiNubank />,
    position: "start",
  },
  {
    icon: <SiBankofamerica />,
    position: "end",
  },
  {
    icon: <SiQbittorrent />,
    position: "start",
  },
  {
    icon: <PiSquareLogoFill />,
    position: "end",
  },
  {
    icon: <FaInstagram />,
    position: "start",
  },
  {
    icon: <SiChase />,
    position: "start",
  },
  {
    icon: <FaShopify />,
    position: "end",
  },
  {
    icon: <FaStripe />,
    position: "start",
  },
  {
    icon: <FaTwitter />,
    position: "end",
  },
  {
    icon: <RiFileExcel2Fill />,
    position: "start",
  },
];

const Featured = () => {
  return (
    <section className="pt-48 bg-black" id="featured">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-2 gap-y-32 text-white max-w-7xl mx-auto px-12">
        <div>
          <h2 className="text-5xl font-semibold tracking-tighter text-transparent bg-linear-to-br from-white to-zinc-400 bg-clip-text pb-2">
            Who said finance has to <br /> feel complicated?
          </h2>
        </div>
        <div>
          <p className="text-zinc-500 text-lg tracking-wide">
            Cobaltito gives you a seamless way to understand your financial
            health at a glance. Track cash flow, make informed decisions faster,
            and bring structure to your day — all with tools designed for modern
            business owners.{" "}
            <span className="text-gray-300 font-semibold">
              Leave bureaucracy and ancient software behind.
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-semibold tracking-tighter text-transparent bg-linear-to-br from-white to-zinc-500 bg-clip-text pb-2">
            Everything you need, <br /> nothing unnecessary
          </h2>

          <p className="text-zinc-500 text-lg mt-6 tracking-wide max-w-[60ch]">
            Stay on top of your finances with an integrated toolkit that adapts
            to your workflow. Enjoy a{" "}
            <span className="text-gray-300 font-semibold">
              smooth, intuitive experience
            </span>{" "}
            that helps you stay productive without drowning in details.
          </p>
        </div>
      </div>
      {/* Cards grid */}
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-6 max-w-7xl mx-auto px-4 lg:px-12 mt-12">
        {/* 1st card*/}
        <div className="h-[480px] col-span-6 md:col-span-3 lg:col-span-5 xl:col-span-4 rounded-2xl border border-gray-400/30 bg-zinc-800/50 grid grid-rows-3">
          <div className="row-span-2 relative">
            <SvgBackground width={30} height={70} id={"card"} />
            <div className="absolute z-20 top-8 right-6 w-[230px] py-3 px-4 h-[300px] border border-zinc-400/25 bg-zinc-900 rounded-lg text-zinc-500 overflow-hidden mask-[linear-gradient(to_bottom,white_0%,white_75%,transparent_100%)] pointer-events-none">
              <h3 className="text-xs mb-2">Today</h3>
              {/* Today stats */}
              <div className="grid grid-cols-8 text-[9px] gap-2 bg-zinc-800 pt-1 pb-3 px-2 rounded-md">
                <div className="col-span-3 flex flex-col gap-2 border-r border-zinc-700">
                  <div className="flex items-center gap-1">
                    Revenue
                    <HiArrowTrendingDown size={12} className="text-red-400" />
                  </div>
                  <div className="text-xs text-zinc-300">
                    $540.<span className="text-[8px]">57</span>
                  </div>
                </div>
                <div className="col-span-2 flex flex-col gap-2 border-r border-zinc-700">
                  <div className="flex gap-1 items-center">
                    Sales
                    <HiArrowTrendingUp size={12} className="text-green-700" />
                  </div>
                  <div className="text-xs text-zinc-300">16</div>
                </div>
                <div className="col-span-3 flex flex-col gap-2">
                  <div>Goal</div>
                  <div className="text-xs text-zinc-300 flex items-center gap-2">
                    66%
                    <IoIosStats size={14} className="text-blue-400" />
                  </div>
                </div>
              </div>
              <h3 className="text-xs my-2">Insights</h3>
              {/* Insights stats */}
              <div className="flex gap-2 w-full">
                <div className="bg-zinc-800 rounded-md text-[9px] flex-1 shrink-0  p-2">
                  <div className="flex gap-1">
                    <GoFlame size={12} />
                    Cash Burn
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-300 mt-4 pl-2">
                    <p>
                      $12,007.<span className="text-[8px]">92</span>
                    </p>
                    <HiArrowTrendingUp size={16} className="text-red-400" />
                  </div>
                </div>
                <div className="bg-zinc-800 rounded-md text-[9px] flex-1 shrink-0 p-2">
                  <div className="flex items-center gap-1">
                    <PiTimer size={12} />
                    Cash buffer
                  </div>
                  <div className="text-xs mt-4 flex items-center gap-1 text-zinc-300 pl-2">
                    26 days
                    <LuTriangleAlert size={16} className="text-red-400" />
                  </div>
                </div>
              </div>
              {/* Time Period selector */}
              <div className="mt-3 flex rounded-md bg-zinc-800 text-[9px] justify-around px-2 py-0.5">
                <div>7d</div>
                <div className="bg-zinc-700 text-zinc-300 px-2 rounded-sm">
                  14d
                </div>
                <div>30d</div>
                <div>90d</div>
                <div>MTD</div>
                <div>YTD</div>
              </div>
              {/* Total revenue and expenses */}
              <div className="flex gap-2 w-full mt-2">
                <div className="bg-zinc-800 rounded-md text-[9px] flex-1 shrink-0  p-2">
                  <div className="flex gap-1">Revenue</div>
                  <div className="flex items-center gap-1 text-xs text-zinc-400">
                    <p>
                      $9,381.<span className="text-[8px]">87</span>
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-800 rounded-md text-[9px] flex-1 shrink-0 p-2">
                  <div className="flex items-center gap-1">Expenses</div>
                  <div
                    className="text-xs 
                  flex items-center gap-1 text-zinc-400"
                  >
                    <p>
                      $6824.<span className="text-[8px]">58</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 px-8">
            <h3 className="text-gray-200 text-lg font-semibold">
              Insights at your fingertips
            </h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-wide">
              All your key numbers organized in an instant. Get quick insights,
              spot trends, and plan ahead with confidence — all from one clean
              dashboard.
            </p>
          </div>
        </div>

        <div className="h-[480px] col-span-6 md:col-span-3 lg:col-span-7 xl:col-span-4 rounded-2xl border border-gray-400/30 bg-zinc-800/50 grid grid-rows-3">
          <div className="row-span-2 relative overflow-hidden mask-[linear-gradient(to_bottom,white_0%,white_80%,transparent_100%)]">
            <SvgCircleBackground />
            <Image
              src="/newmockup.png"
              width={150}
              height={200}
              alt="Phone mockup"
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 z"
            />
          </div>
          <div className="py-4 px-8">
            <h3 className="text-gray-200 text-lg font-semibold">
              Manage in real time
            </h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-wide">
              Stay connected wherever you go. Our mobile app keeps you fully
              synced so you can check balances, track activity, and manage
              everything directly from your phone.
            </p>
          </div>
        </div>

        <div className="h-[480px] col-span-6 md:col-span-3 lg:col-span-5 xl:col-span-4 order-3  md:order-4 xl:order-3  rounded-2xl border border-gray-400/30 bg-zinc-800/50 grid grid-rows-3">
          <div className="row-span-2 relative mask-[linear-gradient(to_bottom,transparent_0%,white_40%,white_50%,transparent_100%)] overflow-hidden">
            <div className="absolute right-0 top-1 p-3 text-zinc-500">
              <div className="bg-zinc-900 rounded-md w-[300px] h-[132px] border border-zinc-400/15 mb-4 py-2 px-1">
                <p className="text-sm px-2 py-1 flex items-center gap-2">
                  <FaCopyright size={12} /> Cobaltito &bull; 2h ago
                </p>
                <div className="text-xs pl-7 flex flex-col gap-0.5">
                  <p>💳 Carlos is requesting a new card</p>
                  <p>Card type: Virtual</p>
                  <p>Spend limit: $500 monthly</p>
                  <div className="flex gap-2 text-zinc-200 mt-1">
                    <button className="px-2 py-1 bg-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer rounded-sm">
                      Approve
                    </button>
                    <button className="px-2 py-1 bg-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer rounded-sm">
                      Decline
                    </button>
                    <button className="px-2 py-1 bg-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer rounded-sm">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900 rounded-md w-[300px] h-20 border border-zinc-400/15 mb-4 py-2 px-1">
                <p className="text-sm px-2 py-1 flex items-center gap-2">
                  <FaCopyright size={12} /> Cobaltito &bull; 52m ago
                </p>
                <div className="text-xs pl-7 flex flex-col gap-0.5">
                  <p>📈 Revenue increase alert</p>
                  <p>27% increase in the last 7 days</p>
                </div>
              </div>
              <div className="bg-zinc-900 rounded-md w-[300px] h-[120px] border border-zinc-400/15 py-2 px-1">
                <p className="text-sm px-2 py-1 flex items-center gap-2">
                  <FaCopyright size={12} /> Cobaltito &bull; Just now
                </p>
              </div>
            </div>
          </div>
          <div className="py-4 px-8">
            <h3 className="text-gray-200 text-lg font-semibold">
              Important business alerts
            </h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-wide">
              Choose the updates that matter and get them instantly — via email,
              mobile, or Slack. Review, approve, or take action in just one tap.
            </p>
          </div>
        </div>

        <div className="h-[480px] order-4 md:order-5 xl:order-4 col-span-full xl:col-span-7 rounded-2xl border border-gray-400/30 bg-zinc-800/50 grid grid-rows-3">
          <div className="row-span-2">
            <div className="grid grid-cols-5 justify-items-center h-full mask-radial-at-center mask-radial-from-10% mask-radial-to-transparent">
              {Apps.map((logo, i) => (
                <div
                  key={i}
                  className={`text-3xl text-zinc-600 w-16 h-16 bg-black rounded-full flex items-center justify-center border border-zinc-200/20 ${
                    logo.position == "start" ? "self-start" : "self-end"
                  } hover:scale-[1.1] transition-all duration-300 cursor-pointer`}
                >
                  {logo.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="py-4 px-8">
            <h3 className="text-gray-200 text-lg font-semibold">
              Connect all your apps
            </h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-wide max-w-[60ch]">
              Sync your favorite tools effortlessly. Link your accounting
              platforms, revenue systems, and banking apps to keep everything
              organized in one place.
            </p>
          </div>
        </div>

        <div className="h-[480px] order-5 md:order-3 xl:order-5 col-span-full md:col-span-3 lg:col-span-7 xl:col-span-5 rounded-2xl border border-gray-400/30 bg-zinc-800/50 grid grid-rows-3">
          <div className="row-span-2 relative overflow-hidden">
            <div className="absolute z-10 w-[250px] h-[220px] bg-zinc-900/85 top-5 left-20 border border-zinc-400/20 rounded-lg px-2 py-1 text-zinc-400 text-xs">
              <div className="border-b border-zinc-700 px-2 py-2">
                What would you like to do?
              </div>
              <div className="my-2">
                <h3 className="text-[9px] text-zinc-600 mb-1">
                  Frequently used
                </h3>
                <div className="flex flex-col">
                  <div className="w-full flex justify-between p-1 rounded-md">
                    <div className="flex items-center gap-1">
                      <CiCreditCard1 size={16} />
                      <p>View active Cards</p>
                    </div>
                    <div>
                      <div className="bg-gray-700 py-[0.5px] px-1 rounded-xs text-zinc-300">
                        C
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between bg-zinc-700/60 p-1 rounded-md text-zinc-300">
                    <div className="flex items-center gap-1">
                      <LuFileChartColumn size={16} />
                      <p>View all summary reports</p>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-700 py-[0.5px] px-px rounded-xs text-zinc-300 flex items-center">
                        <RiArrowUpFill size={14} />
                      </div>
                      <div className="bg-gray-700 py-[0.5px] px-1 rounded-xs text-zinc-300">
                        R
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between p-1 rounded-md">
                    <div className="flex items-center gap-1">
                      <ImCoinEuro size={16} />
                      <p>Manage Expenses</p>
                    </div>
                    <div className="bg-gray-700 py-[0.5px] px-1 rounded-xs text-zinc-300">
                      E
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="text-[9px] text-zinc-600 mb-1">
                  Settings & Help
                </h3>
                <div className="flex flex-col">
                  <div className="w-full flex justify-between p-1 rounded-md">
                    <div className="flex items-center gap-1">
                      <GoGear size={16} />
                      <p>Manage settings</p>
                    </div>
                    <div className="flex gap-1">
                      <div className="bg-gray-700 py-[0.5px] px-px rounded-xs text-zinc-300 flex items-center">
                        <RiArrowUpFill size={14} />
                      </div>
                      <div className="bg-gray-700 py-[0.5px] px-1 rounded-xs text-zinc-300">
                        S
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between p-1 rounded-md">
                    <div className="flex items-center gap-1">
                      <HiOutlineSupport size={16} />
                      <p>Contact support</p>
                    </div>
                    <div>
                      <div className="bg-gray-700 py-[0.5px] px-1 rounded-xs text-zinc-300">
                        H
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/keyboard-bg.png"
              alt="Keyboard"
              className="absolute w-[600px] h-[180px] left-[60px] top-[100px] rounded-xl"
            />
          </div>
          <div className="py-4 px-8">
            <h3 className="text-gray-200 text-lg font-semibold">
              You’re in control
            </h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-wide">
              Fast navigation. Smart shortcuts. Dark mode. Everything is built
              for speed, comfort, and focus — just how modern software should
              be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
