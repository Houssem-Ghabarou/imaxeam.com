import Infos from "@/containers/home-page/infos";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Imaxeam.com",
  alternates: {
    canonical: "https://imaxeam.com/products",
  },
  description:
    "Our products are designed to elevate your asset management with Maximo. Experience unparalleled reliability with our dedicated services and innovative solutions.",
};
const Products = () => {
  return (
    <div className="min-h-screen pt-50">
      <Infos />
    </div>
  );
};

export default Products;
