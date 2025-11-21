import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import WhatsappBtn from "@/components/shared/WhatsappBtn";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
      <WhatsappBtn />
    </main>
  );
};

export default layout;
