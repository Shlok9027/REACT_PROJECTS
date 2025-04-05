import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={140}></img>

      <p className="flex-1 border-1pl-4 text-sm txt-gray-500 max-sm:hidden">
        Copyright @Doddle_Developer_24 || All right reserved.
      </p>

      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} alt="" width={40}></img>
        <img src={assets.twitter_icon} alt="" width={40}></img>
        <img src={assets.instagram_icon} alt="" width={40}></img>
      </div>
    </div>
  );
};

export default Footer;