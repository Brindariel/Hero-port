//import Navigationbar from "./Componenets/Navigationbar";
import HeroSection from "./Componenets/HeroSection";
import Footer from './Componenets/Footer';
import About from "./Componenets/About";
import ContactForm from "./Componenets/ContactForm";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
 
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection/>
      </div>
        <About/>
      {/* <ContactForm/> */}
      {/* <br></br>
      <Footer/> */}
    </main>
  );
}
