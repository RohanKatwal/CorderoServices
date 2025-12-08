import Image from "next/image";
import Link from "next/link";

const Company = () => {
  return (
    <section className="companies" id="empresas">
      <div className="companies-content container">
        <div className="heading">
          <h1 className="section-title">
            Nuestras <span className="highlight">Empresas</span>
          </h1>
          <p className="section-subtitle">
            Descubre nuestra familia de empresas, cada una ofreciendo excelencia
            en sus respectivos campos.
          </p>
        </div>

        <div className="companies-grid">
          <div className="company-card">
            <div className="company-logo">
              <Image
                src="/images/offtarq-logo.svg"
                width={173}
                height={143}
                alt="offtarq logo"
              />
            </div>
            <h2>OFFTARQ</h2>
            <p>
              Servicios profesionales de arquitectura y construcción que ofrecen
              soluciones innovadoras para proyectos modernos.
            </p>
            <Link
              href="https://www.medicionescuenca.com/"
              className="btn-primary"
            >
              Aprende Más..
            </Link>
          </div>

          <div className="company-card">
            <div className="company-logo">
              <Image
                src="/images/inmo-logo.svg"
                width={213}
                height={143}
                alt="inmobiliaria logo"
              />
            </div>
            <h2>IC Real Estate</h2>
            <p>
              Servicios inmobiliarios premium que te conectan con tus
              propiedades soñadas y coordinamos las oportunidades de inversión.
            </p>
            <Link
              href="https://corderoservices.vercel.app/inmobiliaria"
              className="btn-primary"
            >
              Aprende Más..
            </Link>
          </div>

          <div className="company-card coming-soon">
            <div className="company-logo">
              <svg
                width="108"
                height="107"
                viewBox="0 0 108 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10C0 4.47715 4.47715 0 10 0H98C103.523 0 108 4.47715 108 10V97C108 102.523 103.523 107 98 107H10C4.47715 107 0 102.523 0 97V10Z"
                  fill="white"
                  fillOpacity="0.1"
                />
                <path
                  d="M37.9584 53.5H70.0417"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M54 37.4583V69.5416"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2>Próximamente</h2>
            <p>
              Estamos constantemente ampliando nuestro portafolio para ofrecerte
              más soluciones y servicios innovadores.
            </p>
            <Link href="#" className="btn-white">
              Mantente Atento..
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
