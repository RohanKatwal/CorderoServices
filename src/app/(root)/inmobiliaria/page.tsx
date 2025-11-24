import InmobiliariaClient from "./InmobiliariaClient";

export const metadata = {
  title: "Inmobiliaria",
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