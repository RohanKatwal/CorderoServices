import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const CameraIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
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

const sections = [
  {
    icon: DatabaseIcon,
    title: "Information Collection",
    content:
      "We do not collect or transmit personal user data to external servers. Any information used by the app remains locally on the user's device and is only used to support app functionality.",
  },
  {
    icon: ShieldIcon,
    title: "Use of Information",
    content:
      "All data entered by the user is used solely for in-app purposes such as tracking, preferences, or display. We do not sell, share, or disclose user data to third parties.",
  },
  {
    icon: CameraIcon,
    title: "Camera & Security Access",
    content:
      "If camera or security-related visuals exist, they are used only for user experience purposes. No images, videos, or biometric data are stored or shared.",
  },
  {
    icon: DatabaseIcon,
    title: "Data Storage",
    content:
      "All data stays on the user's device unless otherwise stated. No cloud storage or external databases are used.",
  },
  {
    icon: UsersIcon,
    title: "Children's Privacy",
    content:
      "This app is not intended for children under the age of 13, and we do not knowingly collect data from children.",
  },
  {
    icon: RefreshIcon,
    title: "Updates",
    content:
      "This Privacy Policy may be updated from time to time. Changes will be reflected on this page.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Header pageName="corderoservices" />
      <Navbar pageName="corderoservices" />

      {/* Hero Section */}
      <section className="pt-16 md:pt-24">
        <div className="container text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <ShieldIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4">
            Privacy <span className="highlight">Policy</span>
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container">
          <div className="bg-[#ffffff1a] rounded-xl  p-8 shadow-sm">
            <p className="text-body leading-relaxed text-lg">
              This Privacy Policy explains how{" "}
              <span className="font-semibold">CS Money / PHIN</span> ("we",
              "our", or "us") handles information within the application.
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
                    <h3 className="font-semibold  mb-3">
                      {section.title}
                    </h3>
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

export default PrivacyPolicy;
