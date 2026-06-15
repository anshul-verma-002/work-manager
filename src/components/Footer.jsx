"use client";

import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return <div className="flex md:flex-row gap-5 md:gap-0 flex-col justify-between bg-neutral-800 md:px-4 md:py-4 rounded-md px-5 py-4 m-2 ">
    <div className="flex flex-col gap-3 ">
      <div className="text-white text-md font-semibold border-b-3 border-b-red-400  pb-1 inline-20">Company</div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-light text-sm">About us</p>
        <p  className="text-white font-light text-sm">Our services</p>
        <p  className="text-white font-light text-sm">Privacy policy</p>
        <p  className="text-white font-light text-sm">Affiliate program</p>
      </div>
    </div>

    <div>
      <div className="flex flex-col gap-3">
      <div className="text-white text-md font-semibold border-b-3 border-b-red-400 pb-1 w-20">Get help</div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-light text-sm">FAQ's</p>
        <p  className="text-white font-light text-sm">Shipping</p>
        <p  className="text-white font-light text-sm">Returns </p>
        <p  className="text-white font-light text-sm">Order status</p>
      </div>
    </div>
    </div>

    <div>
      <div className="flex flex-col gap-3">
      <div className="text-white text-md font-semibold border-b-3 border-b-red-400  pb-1 w-20">Other</div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-light text-sm">Watch</p>
        <p  className="text-white font-light text-sm">Blog </p>
        <p  className="text-white font-light text-sm">Shows</p>
      </div>
    </div>
    </div>
    <div className="flex flex-col gap-3">
     <div className="text-white text-md font-semibold border-b-3 border-b-red-400  pb-1 w-20">Follow Us</div>
      <div className="flex flex-row gap-1">
        <FaFacebook  size={30} className="bg-white rounded-full p-1" />
        <BsInstagram size={30} className="bg-white rounded-full p-1"/>
        <BsTwitter size={30} className="bg-white rounded-full p-1"/>
        <LiaLinkedin size={30} className="bg-white rounded-full p-1" />
      </div>
    </div>
  </div>;
};

export default Footer;
