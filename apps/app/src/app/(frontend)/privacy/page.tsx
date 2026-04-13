import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Faith In Motion collects, uses, and protects your personal information.",
};

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "how-we-share", label: "How We Share Information" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-[#0f2247] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-4">
          <p className="text-[#FCDB38] text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[#CAD9F5]/80 text-sm">
            Last updated: April 13, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
        {/* Sticky TOC */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              On this page
            </p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-sm text-gray-500 hover:text-[#1B6AE3] py-1 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Body */}
        <article className="prose prose-gray prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0f2247] prose-h2:leading-[calc(40/30*0.7)] prose-a:text-[#1B6AE3] prose-a:hover:underline">
          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              Faith In Motion ("we," "us," or "our") is a collaborative of faith
              communities across Riverside County dedicated to supporting
              children in foster care and prospective foster and adoptive
              families. We operate this website (the "Site") in partnership with
              Riverside County Department of Public Social Services (DPSS).
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and
              protect information about you when you visit our Site or interact
              with us. By using the Site, you agree to the practices described
              here.
            </p>
          </section>

          <section id="information-we-collect">
            <h2>Information We Collect</h2>
            <h3>Information you provide directly</h3>
            <ul>
              <li>
                <strong>Contact forms:</strong> name, email address, phone
                number, and message content when you reach out to us.
              </li>
              <li>
                <strong>Event registrations:</strong> name, email, and any
                additional details required to register for workshops, info
                sessions, or community events.
              </li>
              <li>
                <strong>Volunteer or partner inquiries:</strong> organization
                name, role, and contact details when faith communities or
                individuals express interest in partnering with us.
              </li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li>
                <strong>Usage data:</strong> pages visited, time spent,
                referring URL, browser type, and device type — collected via
                standard web server logs and analytics.
              </li>
              <li>
                <strong>Cookies:</strong> small files stored in your browser to
                remember preferences and improve your experience. See{" "}
                <a href="#cookies">Cookies & Tracking</a> below.
              </li>
            </ul>
          </section>

          <section id="how-we-use">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide support.</li>
              <li>
                Send you information about events, resources, and updates
                relevant to foster care and adoption in Riverside County — only
                when you have requested it or opted in.
              </li>
              <li>
                Process and manage event registrations and volunteer
                coordination.
              </li>
              <li>Improve the Site's content, usability, and performance.</li>
              <li>
                Comply with legal obligations and protect the safety of children
                and families we serve.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal information or use
              it for targeted advertising.
            </p>
          </section>

          <section id="how-we-share">
            <h2>How We Share Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may
              share information in limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> trusted vendors who help us
                operate the Site (e.g., hosting, email delivery, analytics)
                under strict data-processing agreements.
              </li>
              <li>
                <strong>County partners:</strong> Riverside County DPSS and
                affiliated agencies, when necessary to connect you with foster
                care or adoption services you have requested.
              </li>
              <li>
                <strong>Legal requirements:</strong> if required by law, court
                order, or to protect the rights, property, or safety of Faith In
                Motion, our partners, or the public.
              </li>
            </ul>
          </section>

          <section id="data-retention">
            <h2>Data Retention</h2>
            <p>
              We retain personal information only as long as necessary to
              fulfill the purposes described in this policy, or as required by
              law. Contact form submissions are retained for up to 2 years.
              Event registration data is retained for 1 year after the event.
              You may request deletion at any time (see{" "}
              <a href="#your-rights">Your Rights</a>).
            </p>
          </section>

          <section id="your-rights">
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have rights under applicable
              privacy law, including California residents' rights under the
              California Consumer Privacy Act (CCPA) and California Privacy
              Rights Act (CPRA):
            </p>
            <ul>
              <li>
                <strong>Access:</strong> request a copy of the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> request correction of inaccurate
                information.
              </li>
              <li>
                <strong>Deletion:</strong> request deletion of your personal
                information, subject to legal retention obligations.
              </li>
              <li>
                <strong>Opt-out:</strong> opt out of any communications from us
                at any time by clicking "unsubscribe" in any email or contacting
                us directly.
              </li>
              <li>
                <strong>Non-discrimination:</strong> we will not discriminate
                against you for exercising any of these rights.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:faithinmotion@fosterall.org">
                faithinmotion@fosterall.org
              </a>
              .
            </p>
          </section>

          <section id="childrens-privacy">
            <h2>Children's Privacy</h2>
            <p>
              Our Site is not directed to children under the age of 13, and we
              do not knowingly collect personal information from children. If
              you believe a child has provided us with personal information,
              please contact us immediately so we can remove it. We take the
              privacy and safety of children seriously given our mission area.
            </p>
          </section>

          <section id="cookies">
            <h2>Cookies & Tracking</h2>
            <p>
              We use essential cookies necessary for the Site to function and
              optional analytics cookies (such as aggregate page-view
              statistics) that help us understand how visitors use the Site. We
              do not use advertising or cross-site tracking cookies.
            </p>
            <p>
              You can configure your browser to refuse cookies or alert you when
              cookies are being sent. Disabling cookies may affect certain
              features of the Site.
            </p>
          </section>

          <section id="third-party-links">
            <h2>Third-Party Links</h2>
            <p>
              Our Site may contain links to external websites, including
              Riverside County DPSS and partner organizations. We are not
              responsible for the privacy practices of those sites and encourage
              you to review their policies independently.
            </p>
          </section>

          <section id="changes">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will revise the "Last updated" date at the top of this page. We
              encourage you to review this policy periodically. Continued use of
              the Site after changes are posted constitutes your acceptance of
              the updated policy.
            </p>
          </section>

          <section id="contact">
            <h2>Contact Us</h2>
            <p>
              If you have questions, concerns, or requests related to this
              Privacy Policy, please contact us:
            </p>
            <address className="not-italic not-prose space-y-2 text-base text-gray-700">
              <p>
                <strong className="text-gray-900">Faith In Motion</strong>
              </p>
              <p>3752 Elizabeth St, Ste D2, Riverside, CA 92506</p>
              <p>
                <a
                  href="mailto:faithinmotion@fosterall.org"
                  className="text-[#1B6AE3] hover:underline"
                >
                  faithinmotion@fosterall.org
                </a>
              </p>
              <p>
                <a
                  href="tel:9512285553"
                  className="text-[#1B6AE3] hover:underline"
                >
                  (951) 228-5553
                </a>
              </p>
            </address>
          </section>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 text-sm">
          <Link
            href="/terms"
            className="text-[#1B6AE3] hover:underline font-medium"
          >
            View Terms of Service →
          </Link>
          <Link
            href="/contact"
            className="text-[#1B6AE3] hover:underline font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
