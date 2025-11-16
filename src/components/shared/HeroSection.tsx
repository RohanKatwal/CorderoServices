import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero container" id="inicio">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Bienvenido a <br /> Cordero
            <span className="highlight"> Services </span>
          </h1>
          <p>
            Tu centro profesional unificado que conecta la excelencia a través
            de múltiples empresas. Reunimos innovación, calidad y confianza en
            una plataforma integral.
          </p>
          <div className="hero-buttons">
            <Link href="#company" className="btn-primary">
              Explora Nuestras Empresas
            </Link>

            <Link href="#contact" className="btn-secondary">
              Contáctanos
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/HeroImage.png" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
