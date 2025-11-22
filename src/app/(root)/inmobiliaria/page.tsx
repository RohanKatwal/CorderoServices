import Contact from "@/components/shared/contact/Contact";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import Stats from "@/components/shared/Stats";

export const metadata = {
  title: "Inmobiliaria",
  icons: {
    icon: "/images/inmo-logo.ico",
  },
};

const inmobiliaria = () => {
  return (
    <>
      <Navbar pageName="inmobiliaria" />
      <HeroSection pageName="inmobiliaria" />
      <Stats pageName="inmobiliaria" />
      <Contact />
    </>
  );
};

export default inmobiliaria;
