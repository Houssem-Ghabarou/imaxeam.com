import HeroSection from "@/components/products/HeroSection";
import MaxvsFeatures from "@/components/products/MaxvsFeatures";
import ProductHighlight from "@/components/products/ProductHighlight";
import GetInTouch from "@/components/shared-components/getInTouch";
import OurLocations from "@/components/shared-components/getInTouch/outLocations";
import InfiniteScroll from "@/containers/home-page/hero-section/infinite-scroll";
import React from "react";

const wordsToHighlight = ["MAXIMO", "PROVEN", "ADD-ONS", "SOLUTIONS"];
const data = [
  {
    title: "Proven",
    description: `MAXVS has been on the market since 2012. It is
trusted by numerous companies that have been
using it since day one and continue to expand usage
of it. It has a diverse client reach in the industries,
from Automotive, Banking, Chemicals & Petroleum,
Energy & Utilities, to Healthcare industries.`,
    underline: true,
  },
  {
    title: "What to expect",
    description: `By using MAXVS, you will ensure an Improved work
order assignment and management as well as a
labor resource assigning and forecasting. It
guarantees data integrity through the use of Maximo
business objects' rules and validation. MAXVS
acknowledges the importance of assuring data
security. It provides you with a controlled
environment through the use of Maximo security
settings ensuring that your data is safe & secure.
MAXVS provides you with an easy-to-learn and
easy-to-use visual interface. It dramatically lowers
the learning curve for the Maximo user.`,
    underline: true,
  },
  {
    title: "Functional Details",
    description:
      "MAXVS allows you to quickly create assignments in Maximo® or assign workgroups to work orders. Use Drag and Drop to quickly change the planned dates of your work orders. It enables fast and efficient work order status changes and work order planned labor requirements modification. MAXVS offers you the ability to create new work orders directly by specifying Maximo Asset, Location, Job Plans, etc.",
    underline: false,
  },
  {
    title: "Maintains Security and Business Rules",
    description: `Maintains Security and Business Rules
MAXVS completely uses the Maximo® Business
Objects to write to Maximo®. You can rest assured
that your custom workflow and business rules are
enforced, and that the Maximo® data integrity is
always maintained.`,
    underline: false,
  },
];
const Maxvs = () => {
  return (
    <div className="min-h-screen flex flex-col py-30  ">
      <HeroSection
        textColor="#195A70"
        wordsToHighlight={wordsToHighlight}
        title="Visual Scheduler"
        titlePart2="Calendar For Maximo"
        subtitle="PROVEN MAXIMO ADD-ONS SOLUTIONS"
        image="/maxvsbg.svg"
        logo="/maxvs.png"
        minusbottom="-mb-10"
        linearGradient="linear-gradient(113.64deg, rgba(36, 163, 204, 0.2) 22.31%, rgba(36, 163, 204, 0.2) 55.51%, rgba(36, 163, 204, 0.2) 107.22%)"
      />

      <InfiniteScroll />
      <ProductHighlight
        defaultGridCols={1}
        mdGridRows={2}
        mdGridCols={2}
        data={data}
        underlineColor="#017A9B"
        bgColor="linear-gradient(135deg, #195A70 0%, #24A3CC 100%)"
        image="/maxvshighlight.svg"
        title="MAXLS : A MAXIMO Calendar Schedular"
      />
      <MaxvsFeatures />
      <GetInTouch />
      <OurLocations />
    </div>
  );
};

export default Maxvs;
