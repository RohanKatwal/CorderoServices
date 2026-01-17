import Link from "next/link";
import Image from "next/image";
import { heroSectionContent } from "@/constants";

export interface pageName {
  pageName: "corderoservices" | "inmobiliaria";
}

const HeroSection = ({ pageName }: pageName) => {
  const data = heroSectionContent[pageName];
  return (
    <section className="hero container" id="inicio">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            {data.title}
            {pageName === "corderoservices" && (
              <>
                <br />
                Cordero
              </>
            )}
            {data.highlight && <span className="highlight"> Services </span>}
          </h1>
          <p>
            Tu centro profesional unificado que conecta la excelencia a través
            de múltiples empresas. Reunimos innovación, calidad y confianza en
            una plataforma integral.
          </p>
          {pageName === "inmobiliaria" && (
            <div className="license-info">
              <p>LICENCIA PROFESIONAL: No.ACBRP - 343</p>
            </div>
          )}
          <div className="hero-buttons">
            <Link href="#company" className="btn-primary">
              {data.btn1}
            </Link>

            <Link href="#contact" className="btn-secondary">
              {data.btn2}
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image src={data.img} width={402} height={510} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
