"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import DynamicButton from "../Buttons/dynamicButton";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

const Header = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goTo = (path: string) => {
    router.push(path);
    setIsAsideOpen(false);
  };

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const handleProductsClick = () => {
    const newSearch = new URLSearchParams(window.location.search);
    newSearch.set("scrollTo", `products-${Date.now()}`);
    router.push(`/?${newSearch.toString()}`, { scroll: false });
    setIsAsideOpen(false);
  };

  const handleContactClick = () => {
    const newSearch = new URLSearchParams(window.location.search);
    newSearch.set("scrollTo", `contact-${Date.now()}`);
    router.push(`/?${newSearch.toString()}`, { scroll: false });
    setIsAsideOpen(false);
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
      <nav
        style={{
          background: `linear-gradient(113.64deg, rgba(170, 170, 170, 0.1) 22.31%, rgba(252, 119, 50, 0.04) 55.51%, rgba(170, 170, 170, 0.1) 107.22%)`,
          backdropFilter: "blur(10px)", // Add blur effect
          WebkitBackdropFilter: "blur(10px)", // For Safari support
        }}
        className={` fixed z-50 top-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-6 xl:px-8 py-2 xl:py-3 w-[92%] lg:w-[88%] 2xl:w-[80%] mx-auto rounded-[50px] shadow-md mt-5 transition-transform duration-500 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <img
          onClick={() => goTo("/")}
          src={"/imaxeamlogo2.svg"}
          alt="Imaxeam logo and IBM logo"
          className="cursor-pointer  w-[150] "
        />

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex">
          <ul className="flex gap-4 justify-center items-center">
            <li
              className={`li-custom-nav ${
                pathname === "/"
                  ? "underline underline-offset-8 decoration-orange-100 decoration-[2px] mt-1 text-orange-100"
                  : ""
              }`}
              onClick={() => goTo("/")}
            >
              Home
            </li>
            <li className="relative group">
              <span
                className={`flex gap-2 li-custom-nav ${
                  pathname.includes("products")
                    ? "underline underline-offset-8 decoration-orange-100 decoration-[2px] mt-1 text-orange-100"
                    : ""
                }`}
              >
                <div> Services</div>
                <img src="/selector.svg" alt="arrow down" width={10} />
              </span>
              {/* Wrap the dropdown in a div to maintain hover */}
              <div className="absolute hidden group-hover:block hover:block">
                <ul className="bg-white-100 shadow-md rounded-md mt-2">
                  <li
                    className={`li-custom-nav px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/products/maxls"
                        ? "underline underline-offset-8 decoration-orange-100 decoration-[2px] mt-1 text-orange-100"
                        : ""
                    }`}
                    onClick={() => goTo("/products/maxls")}
                  >
                    MAXLS
                  </li>
                  <li
                    className={`li-custom-nav px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/products/maxvs"
                        ? "underline underline-offset-8 decoration-orange-100 decoration-[2px] mt-1 text-orange-100"
                        : ""
                    }`}
                    onClick={() => goTo("/products/maxvs")}
                  >
                    MAXVS
                  </li>
                  <li
                    className={`li-custom-nav px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/products/maxapps"
                        ? "underline underline-offset-8 decoration-orange-100 decoration-[2px] mt-1 text-orange-100"
                        : ""
                    }`}
                    onClick={() => goTo("/products/maxapps")}
                  >
                    MAXAPPS
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`li-custom-nav ${
                pathname === "/projects"
                  ? "underline underline-offset-8 decoration-orange-100 decoration-[2px] mt-1 text-orange-100"
                  : ""
              }`}
              onClick={() => goTo("/projects")}
            >
              Projects
            </li>
            <li
              className={`li-custom-nav ${
                pathname === "/about-us"
                  ? "underline underline-offset-8 decoration-orange-100 decoration-[2px] mt-1 text-orange-100"
                  : ""
              }`}
              onClick={() => goTo("/about-us")}
            >
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
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <button className="xl:hidden cursor-pointer">
          <FiMenu color="#f26822" size={30} onClick={toggleAside} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isAsideOpen && (
        <aside className="fixed top-0 right-0 w-[75%] h-screen bg-[#1A1A1D] z-50 flex flex-col items-end pt-20 px-8 transition-transform duration-300 transform translate-x-0">
          <button
            className="absolute top-4 right-4 text-orange-100 cursor-pointer text-2xl"
            onClick={toggleAside}
          >
            <TfiClose size={30} />
          </button>
          <ul className="flex flex-col gap-8  w-full text-right">
            <li
              className={`li-custom-nav text-white-100 ${
                pathname === "/" ? "underline font-bold" : ""
              }`}
              onClick={() => goTo("/")}
            >
              Home
            </li>

            <li
              className={`li-custom-nav text-white-100 ${
                pathname === "/projects" ? "underline font-bold" : ""
              }`}
              onClick={() => goTo("/projects")}
            >
              Projects
            </li>
            <li
              className={`li-custom-nav text-white-100 ${
                pathname === "/about-us" ? "underline font-bold" : ""
              }`}
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
              className={`li-custom-nav text-white-100 ${
                pathname === "/login" ? "underline font-bold" : ""
              }`}
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
