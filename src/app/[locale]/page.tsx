"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import GetInTouch from "@/components/shared-components/getInTouch";
import HeroSection from "@/containers/home-page/hero-section";
import InfiniteScroll from "@/containers/home-page/hero-section/infinite-scroll";
import Infos from "@/containers/home-page/infos";
import TrustSection from "@/containers/home-page/trust-section";
import OurLocations from "@/components/shared-components/getInTouch/outLocations";
import { CookieConsent } from "@/components/shared-components/cookies/cookie-consent";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const infosRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [scrollTrigger, setScrollTrigger] = useState(false);
  const [variant, setVariant] = useState<"banner" | "modal" | "compact">(
    "modal"
  );

  useEffect(() => {
    const scrollToSection = () => {
      if (
        searchParams.get("scrollTo")?.startsWith("products") &&
        infosRef.current
      ) {
        const offset = window.innerWidth < 768 ? 350 : 650; // Different offsets for mobile & desktop
        const elementPosition =
          infosRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition + offset, behavior: "smooth" });
      }

      //contact
      if (
        searchParams.get("scrollTo")?.startsWith("contact") &&
        contactRef.current
      ) {
        const elementPosition =
          contactRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    };

    // Delay scroll to allow rendering
    setTimeout(scrollToSection, 100);

    // Force re-run when path/searchParams update
  }, [pathname, searchParams, scrollTrigger]);

  return (
    <div className="flex flex-col mb-20 w-full min-h-screen mt-24">
      <HeroSection />
      <InfiniteScroll />
      <div ref={infosRef}>
        <Infos />
      </div>
      <TrustSection />

      <div ref={contactRef}>
        <GetInTouch />
      </div>
      <OurLocations />
      <CookieConsent
        variant={variant}
        onAccept={() => console.log("Cookies accepted")}
        onDecline={() => console.log("Cookies declined")}
        onManage={() => console.log("Manage cookies")}
        privacyPolicyUrl="#"
      />
    </div>
  );
}
