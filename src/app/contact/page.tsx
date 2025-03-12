import GetInTouch from "@/components/shared-components/getInTouch";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Imaxeam.com",
  alternates: {
    canonical: "https://imaxeam.com/contact",
  },
  description:
    "Contact us today to learn more about our services and how we can help you elevate your asset management with Maximo.",
};
const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <GetInTouch />
    </div>
  );
};

export default Contact;
