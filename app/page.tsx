import Image from "next/image";
import TopCarousel from "./components/TopCarousel";
import MainShortcuts from "./components/MainShortcuts";
import FeaturedCategories from "./components/FeaturedCategories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <TopCarousel />
      <MainShortcuts />
      <FeaturedCategories />
    </main>
  );
}
