"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import imaxeamlogoandibm from "../../../../public/imaxeam-logo-and-ibm.png";
import DynamicButton from "../Buttons/dynamicButton";
import Link from "next/link";

const Header = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const goTo = (path: string) => {
    router.push(path);
    setIsAsideOpen(false);
  };

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  // Dynamically update search params to force re-trigger
  const handleProductsClick = () => {
    const newSearch = new URLSearchParams(window.location.search);
    newSearch.set("scrollTo", `products-${Date.now()}`); // Add timestamp to force change
    router.push(`/?${newSearch.toString()}`, { scroll: false });

    setIsAsideOpen(false); // Close sidebar on mobile
  };
  // Dynamically update search params to force re-trigger
  const handleContactClick = () => {
    const newSearch = new URLSearchParams(window.location.search);
    newSearch.set("scrollTo", `contact-${Date.now()}`); // Add timestamp to force change
    router.push(`/?${newSearch.toString()}`, { scroll: false });

    setIsAsideOpen(false); // Close sidebar on mobile
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsAsideOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          onClick={() => goTo("/")}
          src={imaxeamlogoandibm}
          alt="Imaxeam logo and IBM logo"
          className="w-[200px] md:w-[350px] lg:w-[350px] xl:w-[35%] cursor-pointer"
        />

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex">
          <ul className="flex gap-4 justify-center items-center">
            <li className="li-custom-nav" onClick={() => goTo("/")}>
              Home
            </li>
            <li className="li-custom-nav" onClick={handleProductsClick}>
              Products & Services
            </li>
            <li className="li-custom-nav" onClick={() => goTo("/projects")}>
              Projects
            </li>
            <li className="li-custom-nav" onClick={() => goTo("/about-us")}>
              About Us
            </li>
            <li onClick={handleContactClick}>
              <DynamicButton
                fontSize="text-base"
                text="Contact"
                textColor="text-white-100"
                onClick={() => {}}
                animationClassName="button-custom-nav"
              />
            </li>
            <li onClick={() => goTo("/login")}>
              <DynamicButton
                fontSize="text-base"
                text="Login"
                textColor="text-orange-100"
                bgColor="bg-white-100"
                underlineColor="#f26822"
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
          <ul className="flex flex-col gap-8  w-full text-right">
            <li
              className="li-custom-nav text-white-100"
              onClick={() => goTo("/")}
            >
              Home
            </li>
            <li
              className="li-custom-nav text-white-100"
              onClick={handleProductsClick}
            >
              Products & Services
            </li>
            <li
              className="li-custom-nav text-white-100"
              onClick={() => goTo("/projects")}
            >
              Projects
            </li>
            <li
              className="li-custom-nav text-white-100"
              onClick={() => goTo("/about-us")}
            >
              About Us
            </li>
            <li
              className="li-custom-nav text-white-100"
              onClick={handleContactClick}
            >
              Contact
            </li>
            <li
              className="li-custom-nav text-white-100"
              onClick={() => goTo("/login")}
            >
              Login
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Header;
