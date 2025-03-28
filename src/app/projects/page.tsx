import ProjectsSection from "@/components/projects/projects";
import TrustUsProjects from "@/components/projects/trustus";
import GetInTouch from "@/components/shared-components/getInTouch";
import OurLocations from "@/components/shared-components/getInTouch/outLocations";
import InfiniteScroll from "@/containers/home-page/hero-section/infinite-scroll";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - Imaxeam.com",
  alternates: {
    canonical: "https://imaxeam.com/projects",
  },
  description:
    "They Trust us Experience unparalleled reliability with our dedicated services and innovative solutions, designed to elevate your asset management with Maximo.",
};
const Projects = () => {
  return (
    <div className="min-h-scree flex flex-col gap-10 n mb-20 ">
      <TrustUsProjects />
      {/* <TrustSection /> */}
      <InfiniteScroll />
      <ProjectsSection />
      <GetInTouch />
      <OurLocations />
    </div>
  );
};

export default Projects;
