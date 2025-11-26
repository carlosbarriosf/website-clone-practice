import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black pb-16">
      <div className="max-w-7xl mx-auto  px-12 ">
        <div className="flex justify-between border-t pt-8 border-zinc-600">
          <div className="text-zinc-300 flex gap-4 text-xs items-center">
            <p>© 2025 Carlos Barrios — Learning Project.</p>
            <button className="cursor-pointer hover:text-zinc-100 transition-all">
              Privacy Policy
            </button>
            <button className="cursor-pointer hover:text-zinc-100 transition-all">
              Terms of Use
            </button>
          </div>
          <div className="text-zinc-400 flex items-center gap-6">
            <FaXTwitter
              size={18}
              className="hover:text-zinc-200 transition-all cursor-pointer"
            />
            <FaLinkedin
              size={18}
              className="hover:text-zinc-200 transition-all cursor-pointer"
            />
            <FaFacebook
              size={18}
              className="hover:text-zinc-200 transition-all cursor-pointer"
            />
          </div>
        </div>
        <div className="text-xs text-zinc-400 mt-4">
          <p className="max-w-[80ch] mb-4">
            This website is a non-commercial clone created to practice frontend
            development skills. All brand names, trademarks, and logos
            referenced belong to their respective owners.
          </p>
          <p>
            This project has no association with the original product or
            company.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
