const capabilities = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "ERP Service Delivery & Operations",
    description:
      "End-to-end operational support for ERP environments, including system maintenance, issue resolution, and continuous service improvement.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
    title: "Validation & Compliance",
    description:
      "Software validation processes and compliance-aware implementations that align with regulatory requirements and organizational governance standards.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Stakeholder Liaison",
    description:
      "Acting as the critical bridge between business stakeholders and technical teams, translating requirements, managing expectations, and ensuring alignment.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M7 16h8" />
        <path d="M7 11h12" />
        <path d="M7 6h3" />
      </svg>
    ),
    title: "System Optimization",
    description:
      "Enhancing ERP efficiency through optimized workflows, targeted customizations, KPI reporting frameworks, and well-structured data models.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
      </svg>
    ),
    title: "User Lifecycle Management",
    description:
      "Comprehensive access management including role assignments, segregation of duties, and structured onboarding/offboarding procedures.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    ),
    title: "Cross-Team Coordination",
    description:
      "Orchestrating collaboration across data preparation, business intelligence (Qlik), and process automation (NovaCura) initiatives.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
    title: "Process Improvement & Governance",
    description:
      "Backlog prioritization, ticket management, documentation practices, and SOX controls support to maintain operational excellence.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
    title: "Training & Enablement",
    description:
      "End-user guidance, hands-on training sessions, and best-practice adoption programs that build lasting internal capability.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="container py-12">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="section-divider mb-6" />
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
          Core ERP <span className="highlight">Capabilities</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          We deliver practical ERP expertise across the full spectrum of
          enterprise system management from strategic planning to hands-on
          execution.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="bg-[#ffffff1a] hover:bg-[#ffffff2a] rounded-xl p-6 card-hover group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-teal/10 transition-colors duration-300">
              <div className="w-6 h-6 text-primary group-hover:text-teal transition-colors duration-300">
                {capability.icon}
              </div>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">
              {capability.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {capability.description}
            </p>
          </div>
        ))}
      </div>

      {/* Additional LCS mention */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-teal"
            >
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              LCS Development & Lifecycle Support
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl">
              Beyond day-to-day operations, we provide structured support for
              lifecycle services (LCS) development—helping organizations plan,
              execute, and sustain their ERP evolution over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
