import InmobiliariaClient from "./InmobiliariaClient";

export const metadata = {
  title: "Inmo Codero",
  icons: {
    icon: "/images/inmo-logo.ico",
  },
};

const InmobiliariaPage = () => {
  return (
    <InmobiliariaClient />
  );
}
 
export default InmobiliariaPage;