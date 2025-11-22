import Company from "@/components/shared/Company";
import Contact from "@/components/shared/contact/Contact";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import Stats from "@/components/shared/Stats";

// app/corderoservices/page.tsx
export const metadata = {
  title: "Cordero Services",
  icons: {
    icon: "/images/favicon.ico",
  },
};

const Home = () => {
  return (
    <>
      <Navbar pageName="corderoservices" />
      <HeroSection pageName="corderoservices" />
      <Stats pageName="corderoservices" />
      <Company />
      <Contact />
    </>
  );
};

export default Home;
