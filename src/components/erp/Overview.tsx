const OverviewSection = () => {
  return (
    <section id="overview" className="bg-[#ffffff0d] py-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="section-divider mb-6" />
            <h1 className="mb-6">What We Do</h1>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p className="text-lg">
                CorderoServices partners with organizations to strengthen their
                ERP ecosystems, translating complex business requirements into
                practical, well executed technical solutions.
              </p>
              <p>
                We operate at the intersection of business operations and
                technology implementation, ensuring that your ERP investment
                delivers measurable value. Our consultants work alongside your
                teams to bridge the gap between what your business needs and how
                your systems can effectively support those goals.
              </p>
              <p>
                Whether you're optimizing an existing implementation, managing
                system transitions, or seeking ongoing operational support, we
                bring structured methodology and hands-on experience to every
                engagement.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-cream rounded-2xl p-8 lg:p-12 shadow-soft">
              <div className="space-y-9">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      Understand
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Assess current state and business requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-50  flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      Align
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Bridge business needs with technical capabilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      Deliver
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Execute with structure, governance, and measurable
                      outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
