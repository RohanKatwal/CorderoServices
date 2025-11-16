import Company from "@/components/shared/Company";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import Stats from "@/components/shared/Stats";
import WhatsappBtn from "@/components/shared/WhatsappBtn";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <Stats />
      <Company />
      <Contact />
      <Footer />
      <WhatsappBtn />
    </>
  );
}
 
export default Home;