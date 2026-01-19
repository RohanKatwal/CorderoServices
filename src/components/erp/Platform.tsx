const platforms = [
  {
    image: "/images/ellucian.svg",
    name: "Ellucian Banner",
    category: "Higher Education",
    description:
      "Comprehensive experience supporting Banner implementations for higher education institutions, including student information systems and financial management.",
  },
  {
    image: "/images/ifs.png",
    name: "IFS",
    category: "Enterprise Asset Management",
    description:
      "Hands-on expertise with IFS applications, particularly in asset-intensive industries requiring integrated enterprise resource planning, IALs, Lobbies.",
  },
  {
    image: "/images/people-soft.png",
    name: "PeopleSoft",
    category: "Enterprise Suite",
    description:
      "Deep familiarity with PeopleSoft environments across HR, finance, campus solutions modules, and PeopleTools.",
  },
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-12 bg-[#ffffff0d] ">
      <div className="container">
        <div>
          <div className="section-divider mb-6" />
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            ERP Platform <span className="highlight">Experience</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
            Our consultants bring direct, hands-on experience with leading
            enterprise platforms—not theoretical knowledge, but practical
            expertise gained from real implementations.
          </p>

          <div className="flex flex-wrap gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#ffffff1a] hover:bg-[#ffffff2a] flex-1"
              >
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="h-10 contain mb-6"
                />
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-teal transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <span className="font-body text-sm text-teal font-medium">
                      {platform.category}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
