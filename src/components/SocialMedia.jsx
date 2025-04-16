// components/SocialMedia.jsx

import React from "react";

const socialIcons = [
  {
    id: 1,
    icon: "/telegram.png",
    alt: "Telegram",
   
  },
  {
    id: 2,
    icon: "/linkeling.png",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/saul-arroyo/", // cambia por el tuyo
  },
  {
    id: 3,
    icon: "/driblle.png",
    alt: "Dribbble",
    link: "https://dribbble.com/SaulArroyo", // cambia por el tuyo
  },
  {
    id: 4,
    icon: "/github-icon-2.png",
    alt: "GitHub",
    link: "https://github.com/saularroyo97", 
    
  },
];

const SocialMedia = ({ className = "" }) => {
  return (
    <div
    className={`w-full max-w-[824px] bg-[#1b1b1c] rounded-[28px] px-4 py-2 flex items-center justify-center ${className}`}
  >
    <div className="flex flex-wrap gap-4 justify-center">
      {socialIcons.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="w-20 h-[50px] bg-[#1e1e1e] rounded-[25px] border border-solid border-[#2b2924] flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-l from-[#131313]/10 to-[#ffb800]/10 hover:outline hover:outline-1 hover:outline-offset-[-1px] hover:outline-[#ffb800]"
          >
            <img
              className="w-auto h-auto max-w-[26px] max-h-[26px]"
              alt={social.alt}
              src={social.icon}
            />
          </button>
        </a>
      ))}
    </div>
  </div>
  );
};

export default SocialMedia;
