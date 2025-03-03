import React from "react";
import Image from "next/image";

const images = [
  "/rcjyGrey-1.png",
  "/sorfert-grey.png",
  "/scGrey.png",
  "/timkensteel.png",
  "/ucsdh.png",
  "/motGrey.png",
  "/bates-grey.png",
  "/gaia-grey.png",
].filter(Boolean);

const InfiniteScroll = () => {
  return (
    <div className="overflow-hidden w-full  rounded-2xl py-5">
      <div className="relative flex whitespace-nowrap">
        {/* Ensure seamless looping by duplicating images multiple times */}
        <div className="scrolling flex min-w-max animate-scroll gap-10">
          {[...images, ...images, ...images].map((src, index) => (
            <div key={index} className="h-20 w-auto relative flex-shrink-0">
              <Image
                src={src}
                alt={`Image ${index}`}
                width={100}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
