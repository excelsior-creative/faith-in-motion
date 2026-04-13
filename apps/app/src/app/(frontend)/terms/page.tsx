import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the Faith In Motion website.",
};

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Description of Services" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "disclaimers", label: "Disclaimer of Warranties" },
  { id: "limitation", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "privacy", label: "Privacy" },
  { id: "changes", label: "Changes to Terms" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact Us" },
];

// test 2
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-[#0f2247] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-4">
          <p className="text-[#FCDB38] text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Terms of Service
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
          <section id="acceptance">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using the Faith In Motion website located at{" "}
              <a href="https://faithinmotion.org">faithinmotion.org</a> (the
              "Site"), you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree to these Terms, please do not use
              the Site.
            </p>
            <p>
              Faith In Motion is a nonprofit collaborative of faith communities
              working in partnership with Riverside County Department of Public
              Social Services (DPSS) to support children in foster care and
              prospective foster and adoptive families. Use of this Site is
              subject to all applicable federal, state, and local laws.
            </p>
          </section>

          <section id="services">
            <h2>Description of Services</h2>
            <p>The Site provides:</p>
            <ul>
              <li>
                Informational resources about foster care, adoption, and family
                support services in Riverside County.
              </li>
              <li>
                Event listings, registration forms, and community programming
                details.
              </li>
              <li>
                Contact and inquiry forms to connect with Faith In Motion staff
                and partner agencies.
              </li>
              <li>
                Resources for faith communities interested in becoming certified
                Faith Partners.
              </li>
            </ul>
            <p>
              The Site is provided for informational purposes only and does not
              constitute legal, financial, or professional social services
              advice. For case-specific guidance, please contact Riverside
              County DPSS directly.
            </p>
          </section>

          <section id="acceptable-use">
            <h2>Acceptable Use</h2>
            <p>
              You agree to use the Site only for lawful purposes. You may not:
            </p>
            <ul>
              <li>
                Use the Site in any way that violates applicable federal, state,
                or local law or regulation.
              </li>
              <li>
                Submit false, misleading, or fraudulent information through any
                form on the Site.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Site or
                its underlying infrastructure.
              </li>
              <li>
                Use automated tools (scrapers, bots, crawlers) to extract
                content from the Site without prior written permission.
              </li>
              <li>
                Transmit any unsolicited commercial communications (spam)
                through the Site's contact features.
              </li>
              <li>
                Impersonate any person or entity or misrepresent your
                affiliation with any person or entity.
              </li>
              <li>
                Engage in conduct that could damage, disable, or impair the
                functioning of the Site or servers.
              </li>
            </ul>
          </section>

          <section id="intellectual-property">
            <h2>Intellectual Property</h2>
            <p>
              All content on the Site — including text, images, logos, graphics,
              video, and software — is the property of Faith In Motion, its
              partners, or respective content owners and is protected by
              applicable intellectual property laws.
            </p>
            <p>
              You may view, download, and print content from the Site for
              personal, non-commercial use, provided you do not modify the
              content and retain all copyright and other proprietary notices.
              Any other use requires prior written permission from Faith In
              Motion.
            </p>
            <p>
              The Faith In Motion name, logo, and related marks are trademarks
              of Faith In Motion. Nothing on the Site grants any license to use
              our marks without prior written consent.
            </p>
          </section>

          <section id="disclaimers">
            <h2>Disclaimer of Warranties</h2>
            <p>
              THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE"
              WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
            <p>
              Faith In Motion does not warrant that the Site will be
              uninterrupted, error-free, or free of viruses or other harmful
              components. We do not warrant the accuracy, completeness, or
              timeliness of any information on the Site.
            </p>
            <p>
              Information about foster care and adoption programs is subject to
              change by Riverside County DPSS and participating agencies. Always
              verify current requirements and availability with the appropriate
              agency.
            </p>
          </section>

          <section id="limitation">
            <h2>Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, FAITH IN MOTION, ITS
              OFFICERS, DIRECTORS, EMPLOYEES, VOLUNTEERS, PARTNERS, AND AGENTS
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO
              YOUR USE OF OR INABILITY TO USE THE SITE, EVEN IF WE HAVE BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS
              ARISING OUT OF OR RELATED TO THESE TERMS OR THE SITE EXCEED ONE
              HUNDRED DOLLARS ($100).
            </p>
            <p>
              Some jurisdictions do not allow certain limitations of liability,
              so some of the above may not apply to you.
            </p>
          </section>

          <section id="indemnification">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Faith In Motion
              and its officers, directors, employees, volunteers, and partners
              from and against any claims, liabilities, damages, losses, and
              expenses (including reasonable attorneys' fees) arising out of or
              in any way connected with your access to or use of the Site, your
              violation of these Terms, or your violation of any third-party
              rights.
            </p>
          </section>

          <section id="third-party-links">
            <h2>Third-Party Links</h2>
            <p>
              The Site may contain links to external websites, including
              Riverside County DPSS, Foster Family Agencies, and other community
              resources. These links are provided for your convenience only.
              Faith In Motion has no control over and assumes no responsibility
              for the content, privacy policies, or practices of any third-party
              sites. We encourage you to read the terms and privacy policies of
              any external sites you visit.
            </p>
          </section>

          <section id="privacy">
            <h2>Privacy</h2>
            <p>
              Your use of the Site is also governed by our{" "}
              <Link href="/privacy">Privacy Policy</Link>, which is incorporated
              into these Terms by reference. Please review our Privacy Policy to
              understand our data practices.
            </p>
          </section>

          <section id="changes">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. When we
              make changes, we will update the "Last updated" date at the top of
              this page. Your continued use of the Site after any changes
              constitutes your acceptance of the revised Terms. We encourage you
              to review these Terms periodically.
            </p>
          </section>

          <section id="governing-law">
            <h2>Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of California, without regard to its conflict of
              law provisions. Any dispute arising from or relating to these
              Terms or the Site shall be subject to the exclusive jurisdiction
              of the state and federal courts located in Riverside County,
              California.
            </p>
          </section>

          <section id="contact">
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us:
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
            href="/privacy"
            className="text-[#1B6AE3] hover:underline font-medium"
          >
            View Privacy Policy →
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
