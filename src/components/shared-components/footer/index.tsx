import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-black-100 p-10 flex justify-center items-center">
      <div className="text-white text-md flex gap-2 ">
        Copyright © iMaxeam {currentYear}{" "}
        <span className="hidden xl:inline">|</span>{" "}
        <img
          className="hidden xl:inline"
          src={"/imaxeam-and-ibm-footer.png"}
          alt="Imaxeam Logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
