"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import imaxeamlogoandibm from "../../../../public/imaxeam-logo-and-ibm.png";
import DynamicButton from "../Buttons/dynamicButton";

const Header = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let scrollTimeout: NodeJS.Timeout | null = null;

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsAsideOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) {
        if (scrollTimeout !== null) {
          clearTimeout(scrollTimeout);
        }
      }

      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // User is scrolling down
        setIsVisible(false);
      } else {
        // User is scrolling up
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);

      // Add slight delay before hiding
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        if (scrollTimeout !== null) {
          clearTimeout(scrollTimeout);
        }
      }
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed z-50 top-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-6 xl:px-8 py-2 xl:py-5 bg-white-100 w-[92%] lg:w-[80%] mx-auto rounded-[50px] shadow-md mt-8 transition-transform duration-500 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <Image
          src={imaxeamlogoandibm}
          alt="Imaxeam logo and IBM logo"
          className="w-[200px] md:w-[350px] lg:w-[350px] xl:w-[35%]"
        />
        {/* Desktop Nav Links */}
        <div className="hidden xl:flex">
          <ul className="flex gap-4 justify-center items-center">
            <li className="li-custom-nav">Home</li>
            <li className="li-custom-nav">Products & Services</li>
            <li className="li-custom-nav">Projects</li>
            <li className="li-custom-nav">About Us</li>
            <li>
              <DynamicButton
                fontSize="text-base"
                text="Contact"
                textColor="text-white-100"
                onClick={() => {}}
                animationClassName="button-custom-nav"
              />
            </li>
            <li>
              <DynamicButton
                fontSize="text-base"
                text="Login"
                textColor="text-orange-100"
                bgColor="bg-white-100"
                onClick={() => {}}
                animationClassName="li-custom-nav"
              />
            </li>
          </ul>
        </div>
        {/* Mobile Menu Icon */}
        <div className="xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleAside}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isAsideOpen && (
        <aside className="fixed top-0 right-0 w-[75%] h-screen bg-[#1A1A1D] z-50 flex flex-col items-end pt-20 px-8 transition-transform duration-300 transform translate-x-0">
          <button
            className="absolute top-4 right-4 text-orange-100 cursor-pointer text-2xl"
            onClick={toggleAside}
          >
            ✕
          </button>
          <ul className="flex flex-col gap-8 mt-8 w-full text-right">
            <li className="li-custom-nav text-white-100">Home</li>
            <li className="li-custom-nav text-white-100">
              Products & Services
            </li>
            <li className="li-custom-nav text-white-100">Projects</li>
            <li className="li-custom-nav text-white-100">About Us</li>
            <li className="li-custom-nav text-white-100">Contact</li>
            <li className="li-custom-nav text-white-100">Login</li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Header;
