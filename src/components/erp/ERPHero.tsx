import Link from "next/link";

const ERPHero = () => {
  return (
    <section className="container hero">
      <div className="hero-content">
        <div className="hero-text">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-8 h-px bg-white" />
            <span className="font-body text-sm font-medium text-white uppercase tracking-wider">
              Enterprise Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-1.5 mb-6" style={{ animationDelay: "0.2s" }}>
            ERP <span className="highlight">Consulting</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Strategic ERP service delivery, system optimization, and
            business-technology alignment for enterprises ready to maximize
            their platform investments.
          </p>

          {/* CTAs */}
          <div
            className="hero-buttons flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href={"/erp-consulting#contact"} className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link
              href={"/erp-consulting#capabilities"}
              className="btn-secondary"
            >
              View Capabilities
            </Link>
          </div>
        </div>
        <div className="hero-image"></div>
      </div>
    </section>
  );
};

export default ERPHero;
