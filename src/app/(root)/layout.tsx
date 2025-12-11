import Header from "@/components/shared/Header";
import WhatsappBtn from "@/components/shared/WhatsappBtn";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
      <WhatsappBtn />
    </main>
  );
};

export default layout;
