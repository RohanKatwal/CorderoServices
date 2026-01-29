import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const FileTextIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const SmartphoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <line x1="12" x2="12.01" y1="18" y2="18" />
  </svg>
);

const AlertCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CopyrightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9.354a4 4 0 1 0 0 5.292" />
  </svg>
);

const ShieldOffIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2" />
    <path d="m2 2 20 20" />
    <path d="M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38" />
  </svg>
);

const RefreshIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const sections = [
  {
    icon: SmartphoneIcon,
    title: "App Usage",
    content:
      "The app is provided for personal and informational use only. Users are responsible for how they use the app and any data they enter.",
  },
  {
    icon: AlertCircleIcon,
    title: "No Professional Advice",
    content:
      "The app does not provide financial, legal, or professional advice. All content is for general informational purposes only.",
  },
  {
    icon: UserIcon,
    title: "User Responsibility",
    content:
      "Users are responsible for maintaining the security of their device and ensuring proper use of the app.",
  },
  {
    icon: CopyrightIcon,
    title: "Intellectual Property",
    content:
      "All branding, logos, and design elements belong to their respective owners and may not be reused without permission.",
  },
  {
    icon: ShieldOffIcon,
    title: "Limitation of Liability",
    content:
      "We are not responsible for any losses, damages, or issues arising from the use or inability to use the app.",
  },
  {
    icon: RefreshIcon,
    title: "Modifications",
    content:
      "We reserve the right to modify these Terms or the app at any time without prior notice.",
  },
];

const TermsAndCondition = () => {
  return (
    <>
      <Header pageName="corderoservices" />
      <Navbar pageName="corderoservices" />

      {/* Hero Section */}
      <section className="pt-16 md:pt-24">
        <div className="container text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <ShieldOffIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4">
            Terms <span className="highlight">and Conditions</span>
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container">
          <div className="bg-[#ffffff1a] rounded-xl p-8 shadow-sm">
            <p className="text-body leading-relaxed text-lg">
              By using{" "}
              <span className="font-semibold text-foreground">
                CS Money / PHIN
              </span>
              , you agree to the following Terms & Conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-8 pb-20">
        <div className="container">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <article
                key={index}
                className="group bg-[#ffffff1a] hover:bg-[#ffffff2a] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 transition-colors">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold  mb-3">{section.title}</h3>
                    <p className="text-body leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer pageName="corderoservices" />
    </>
  );
};

export default TermsAndCondition;
