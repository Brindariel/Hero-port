//import Navigationbar from "./Componenets/Navigationbar";
import HeroSection from "./Componenets/HeroSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f2f2]">
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection/>
      </div>
    </main>
  );
}
