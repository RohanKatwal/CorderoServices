import CapabilitiesSection from "@/components/erp/Capability";
import ERPHero from "@/components/erp/ERPHero";
import OverviewSection from "@/components/erp/Overview";
import PlatformsSection from "@/components/erp/Platform";
import Contact from "@/components/shared/contact/Contact";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const ERPPage = () => {
  return (
    <>
      <Header pageName="corderoservices" />
      <Navbar pageName="corderoservices" />
      <ERPHero />
      <OverviewSection />
      <CapabilitiesSection />
      <PlatformsSection />
      <Footer pageName="erp" />
    </>
  );
};

export default ERPPage;
