import HeroSection from "@/containers/home-page/hero-section";
import InfiniteScroll from "@/containers/home-page/hero-section/infinite-scroll";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-5">
      <HeroSection />
      <InfiniteScroll />
    </div>
  );
}
