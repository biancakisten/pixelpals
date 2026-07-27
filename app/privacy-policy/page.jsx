import Footer from '../../components/Footer';
import './privacy-policy.css';

export const metadata = {
  title: 'Privacy Policy | Pixel Pals',
  description:
    'Learn how Pixel Pals handles personal information when you visit our website or contact us.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
      <main>
        <header className="privacy-page__hero">
          <div className="privacy-page__hero-inner">
            <p className="privacy-page__eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p className="privacy-page__updated">
              Last updated: 27 July 2026
            </p>
            <p className="privacy-page__introduction">
              Pixel Pals respects your privacy and is committed to handling
              personal information responsibly and in accordance with the
              Protection of Personal Information Act 4 of 2013 (POPIA) and
              other applicable South African law.
            </p>
          </div>
        </header>

        <article className="privacy-page__content">
          <section aria-labelledby="privacy-about">
            <h2 id="privacy-about">1. About this policy</h2>
            <p>
              This Privacy Policy explains how Pixel Pals, a South African
              sole-proprietor business (“Pixel Pals”, “we”, “us” or “our”),
              handles personal information when you visit pixelpals.co.za,
              contact us, or communicate with us about our services.
            </p>
            <p>
              The current website is primarily an informational business
              website. Features such as AI tools, user accounts, document
              uploads, online payments, newsletters and advanced analytics are
              still being developed and are not covered as active features in
              this version of the policy.
            </p>
          </section>

          <section aria-labelledby="privacy-information">
            <h2 id="privacy-information">
              2. Personal information we may collect
            </h2>
            <p>Depending on how you interact with us, we may process:</p>
            <ul>
              <li>
                Enquiry and contact information that you voluntarily provide,
                such as your name, email address, telephone number, company
                name and the content of your message.
              </li>
              <li>
                Business and project information you provide when asking about
                a website, e-commerce, UI/UX, maintenance, AI, automation or
                related digital service.
              </li>
              <li>
                Basic technical information processed automatically when the
                website is delivered, which may include your IP address,
                browser and device type, referring page, access time and server
                or security logs.
              </li>
            </ul>
            <p>
              Please do not send special or highly sensitive personal
              information unless it is necessary and we have agreed on an
              appropriate way to receive it.
            </p>
          </section>

          <section aria-labelledby="privacy-collection">
            <h2 id="privacy-collection">3. How we collect information</h2>
            <p>We may collect personal information:</p>
            <ul>
              <li>directly from you when you email, call or contact us;</li>
              <li>
                during discussions about a possible or existing business
                relationship; and
              </li>
              <li>
                automatically through the limited technical operation, hosting
                and security of the website.
              </li>
            </ul>
          </section>

          <section aria-labelledby="privacy-use">
            <h2 id="privacy-use">4. Why we use personal information</h2>
            <p>We may use personal information to:</p>
            <ul>
              <li>respond to enquiries and communicate with you;</li>
              <li>
                understand your needs and prepare proposals, quotations or
                project discussions;
              </li>
              <li>
                provide, administer and improve our services and business
                relationships;
              </li>
              <li>operate, maintain, troubleshoot and secure the website;</li>
              <li>keep appropriate business, tax and legal records; and</li>
              <li>
                comply with legal obligations or protect legitimate rights and
                interests.
              </li>
            </ul>
            <p>
              We process personal information only where permitted by law,
              including where you have consented, where processing is necessary
              to take steps at your request or perform an agreement, where the
              law requires it, or where a legitimate interest justifies it and
              your rights do not override that interest.
            </p>
          </section>

          <section aria-labelledby="privacy-cookies">
            <h2 id="privacy-cookies">5. Cookies and similar technologies</h2>
            <p>
              The current website may use cookies or similar technologies that
              are necessary for basic functionality, security or reliable
              delivery. Pixel Pals does not currently describe the website as
              using advertising cookies or advanced behavioural tracking.
            </p>
            <p>
              If non-essential analytics, advertising or identifying cookies
              are introduced, we will update this policy and, where required,
              provide an appropriate cookie choice before those technologies
              are used.
            </p>
          </section>

          <section aria-labelledby="privacy-sharing">
            <h2 id="privacy-sharing">6. Sharing personal information</h2>
            <p>
              We do not sell personal information. We may share limited
              information with trusted service providers that support our
              business, such as website hosting, domain, email, IT, security,
              professional or cloud service providers. They may process
              information only for an authorised purpose and must protect it
              appropriately.
            </p>
            <p>
              We may also disclose information where required by law, to
              respond to lawful requests, to establish or defend legal rights,
              or to prevent fraud, abuse or security threats.
            </p>
          </section>

          <section aria-labelledby="privacy-international">
            <h2 id="privacy-international">
              7. Processing outside South Africa
            </h2>
            <p>
              Some service providers may process or store information outside
              South Africa. Where personal information is transferred
              internationally, Pixel Pals will take reasonable steps to ensure
              that the transfer is permitted under POPIA and that appropriate
              safeguards apply.
            </p>
          </section>

          <section aria-labelledby="privacy-security">
            <h2 id="privacy-security">8. Information security</h2>
            <p>
              We use reasonable technical and organisational safeguards
              appropriate to the nature of the information and the risks
              involved. No website, email system or internet transmission is
              completely secure, and we cannot promise absolute security.
            </p>
            <p>
              If we have reasonable grounds to believe that personal
              information has been accessed or acquired by an unauthorised
              person, we will respond in accordance with POPIA, including
              notifying affected people and the Information Regulator where
              required.
            </p>
          </section>

          <section aria-labelledby="privacy-retention">
            <h2 id="privacy-retention">9. How long we keep information</h2>
            <p>
              We keep personal information only for as long as reasonably
              necessary for the purpose for which it was collected, to maintain
              appropriate business records, to resolve disputes, or to meet
              legal, tax or contractual requirements. When information is no
              longer required, we will delete, destroy or de-identify it where
              reasonably practicable.
            </p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights">10. Your rights under POPIA</h2>
            <p>Subject to applicable law, you may ask us to:</p>
            <ul>
              <li>
                confirm whether we hold personal information about you;
              </li>
              <li>provide access to your personal information;</li>
              <li>
                correct or update inaccurate or incomplete information;
              </li>
              <li>
                delete or destroy information that we are no longer authorised
                to retain;
              </li>
              <li>object to certain processing of your information; or</li>
              <li>
                withdraw consent where consent is the basis for processing.
              </li>
            </ul>
            <p>
              We may need to verify your identity before acting on a request.
              Some rights may be limited where the law requires or permits us
              to retain or withhold information.
            </p>
          </section>

          <section aria-labelledby="privacy-children">
            <h2 id="privacy-children">11. Children’s information</h2>
            <p>
              The current website and Pixel Pals’ business services are not
              directed at children, and we do not knowingly seek to collect
              children’s personal information through the website. If you
              believe a child has provided personal information to us without
              the required permission, please contact us so that we can assess
              and address the matter.
            </p>
          </section>

          <section aria-labelledby="privacy-links">
            <h2 id="privacy-links">12. Links to other websites</h2>
            <p>
              The website may link to third-party websites or services. Pixel
              Pals does not control their privacy or security practices. You
              should read the privacy policy of any external site you visit.
            </p>
          </section>

          <section
            className="privacy-page__future"
            aria-labelledby="privacy-future"
          >
            <h2 id="privacy-future">13. Future AI and digital services</h2>
            <p>
              Pixel Pals may introduce additional digital or AI-powered
              services in the future. Before those services begin collecting or
              processing additional categories of personal information, we will
              update this Privacy Policy and provide any additional notices or
              choices required by law.
            </p>
          </section>

          <section aria-labelledby="privacy-changes">
            <h2 id="privacy-changes">14. Changes to this policy</h2>
            <p>
              We may update this policy when our website, services, service
              providers or legal obligations change. The latest version will be
              published on pixelpals.co.za with a revised effective date.
              Material changes will be highlighted where reasonably
              appropriate.
            </p>
          </section>

          <section aria-labelledby="privacy-contact">
            <h2 id="privacy-contact">15. Contact Pixel Pals</h2>
            <p>
              For privacy questions or to exercise your rights, contact Pixel
              Pals using the email address or other contact details published
              on pixelpals.co.za. Please use the subject line “Privacy Request”
              and explain what you need.
            </p>
            <p>
              Email:{' '}
              <a href="mailto:bianca.kisten@pixelpals.co.za?subject=Privacy%20Request">
                bianca.kisten@pixelpals.co.za
              </a>
            </p>
          </section>

          <section aria-labelledby="privacy-complaints">
            <h2 id="privacy-complaints">16. Complaints</h2>
            <p>
              If you believe that Pixel Pals has not handled your personal
              information properly, please contact us first so that we can try
              to resolve the issue. You may also lodge a complaint with the
              Information Regulator (South Africa) through its official
              complaints process at{' '}
              <a href="https://inforegulator.org.za/complaints/">
                inforegulator.org.za/complaints/
              </a>
              .
            </p>
          </section>

          <section
            className="privacy-page__references"
            aria-labelledby="privacy-references"
          >
            <h2 id="privacy-references">Official references</h2>
            <ul>
              <li>Protection of Personal Information Act 4 of 2013 (POPIA)</li>
              <li>
                Information Regulator (South Africa),{' '}
                <a href="https://inforegulator.org.za/">
                  inforegulator.org.za
                </a>
              </li>
              <li>
                Information Regulator complaints process,{' '}
                <a href="https://inforegulator.org.za/complaints/">
                  inforegulator.org.za/complaints/
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
