import Footer from '../../components/Footer';
import './terms.css';

export const metadata = {
  title: 'Website Terms of Use | Pixel Pals',
  description:
    'Read the terms that apply when you visit and use the Pixel Pals website.',
};

export default function TermsPage() {
  return (
    <div className="terms-page">
      <main>
        <header className="terms-page__hero">
          <div className="terms-page__hero-inner">
            <p className="terms-page__eyebrow">Legal</p>
            <h1>Website Terms of Use</h1>
            <p className="terms-page__updated">
              Last updated: 27 July 2026
            </p>
            <p className="terms-page__introduction">
              These Terms of Use explain the rules that apply when you visit
              pixelpals.co.za. Please read them before using the website.
            </p>
          </div>
        </header>

        <article className="terms-page__content">
          <section aria-labelledby="terms-about">
            <h2 id="terms-about">1. About these terms</h2>
            <p>
              These terms govern your access to and use of pixelpals.co.za.
              By browsing or otherwise using the website, you agree to follow
              these terms. If you do not agree with them, please do not use the
              website.
            </p>
            <p>
              The website is currently an informational business website. It
              allows visitors to learn about Pixel Pals and contact us about
              possible services.
            </p>
          </section>

          <section aria-labelledby="terms-pixel-pals">
            <h2 id="terms-pixel-pals">2. About Pixel Pals</h2>
            <p>
              Pixel Pals is a South African business providing web
              development, website maintenance, UI/UX design, e-commerce
              development, digital solutions and related services.
            </p>
          </section>

          <section aria-labelledby="terms-permitted">
            <h2 id="terms-permitted">3. Permitted use</h2>
            <p>
              You may browse the website and contact Pixel Pals for legitimate
              personal or business enquiries. You must use the website
              responsibly, lawfully and in a way that does not interfere with
              anyone else’s use of it.
            </p>
          </section>

          <section aria-labelledby="terms-prohibited">
            <h2 id="terms-prohibited">4. Prohibited conduct</h2>
            <p>When using the website, you must not:</p>
            <ul>
              <li>damage, disrupt or interfere with the website;</li>
              <li>
                attempt to gain unauthorised access to the website, its
                systems, accounts or data;
              </li>
              <li>introduce viruses, malware or other malicious code;</li>
              <li>use the website for an unlawful purpose;</li>
              <li>misrepresent your identity or authority;</li>
              <li>
                copy or republish protected website content without
                permission; or
              </li>
              <li>
                scrape or automatically collect website content without our
                prior written permission.
              </li>
            </ul>
          </section>

          <section aria-labelledby="terms-intellectual-property">
            <h2 id="terms-intellectual-property">
              5. Intellectual property
            </h2>
            <p>
              Pixel Pals owns, or has permission to use, the branding, logo,
              text, graphics, website design and original content displayed on
              the website. These materials are protected by applicable
              intellectual-property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, republish or
              commercially use protected website material without prior written
              permission from Pixel Pals or the relevant rights holder. Normal
              personal browsing and reasonable sharing of links to public
              website pages are permitted.
            </p>
          </section>

          <section aria-labelledby="terms-third-party-materials">
            <h2 id="terms-third-party-materials">
              6. Portfolio and third-party materials
            </h2>
            <p>
              Client names, trademarks, logos, screenshots and other
              third-party materials remain the property of their respective
              owners. Their appearance on the website does not transfer
              ownership to Pixel Pals or to any visitor, and does not imply
              endorsement unless this is explicitly stated.
            </p>
          </section>

          <section aria-labelledby="terms-not-offer">
            <h2 id="terms-not-offer">
              7. Website information is not a binding offer
            </h2>
            <p>
              Service descriptions, project examples, estimated timelines and
              other information on the website are general information only.
              They do not automatically create a contract, quotation,
              guarantee, professional relationship or obligation for Pixel
              Pals to provide services.
            </p>
          </section>

          <section aria-labelledby="terms-projects">
            <h2 id="terms-projects">8. Quotes and client projects</h2>
            <p>
              Any paid project will be governed by a separate quotation,
              proposal or service agreement accepted by the relevant parties.
              That document may address the project scope, pricing, payment
              terms, timelines, revisions, ownership, responsibilities and
              cancellation terms.
            </p>
            <p>
              If a separate written agreement conflicts with these website
              terms in relation to a project, the separate agreement will apply
              to that project.
            </p>
          </section>

          <section aria-labelledby="terms-results">
            <h2 id="terms-results">9. No guaranteed results</h2>
            <p>
              Pixel Pals does not guarantee specific sales, revenue, website
              traffic, search rankings, business growth or other commercial
              results. Outcomes depend on many factors outside our control,
              including your business, market, content, decisions and ongoing
              use of any delivered work.
            </p>
          </section>

          <section aria-labelledby="terms-accuracy">
            <h2 id="terms-accuracy">
              10. Website accuracy and availability
            </h2>
            <p>
              We aim to keep the website useful and accurate, but information
              may become outdated or contain errors. Pixel Pals may update,
              remove or change website content without notice.
            </p>
            <p>
              We cannot guarantee that the website will always be available,
              uninterrupted, secure, complete or error-free. Maintenance,
              technical problems and circumstances outside our reasonable
              control may temporarily affect access.
            </p>
          </section>

          <section aria-labelledby="terms-external-links">
            <h2 id="terms-external-links">11. External links</h2>
            <p>
              The website may contain links to third-party websites or
              services. Pixel Pals does not control and is not responsible for
              their content, security, availability, products, terms or privacy
              practices. You use external websites at your own discretion and
              should review their applicable terms and policies.
            </p>
          </section>

          <section aria-labelledby="terms-liability">
            <h2 id="terms-liability">12. Limitation of liability</h2>
            <p>
              To the extent permitted by applicable law, Pixel Pals will not be
              liable for indirect or consequential loss resulting solely from
              reliance on general website information, use of an external link,
              or temporary website unavailability.
            </p>
            <p>
              Nothing in these terms excludes or limits liability, remedies or
              consumer rights that cannot lawfully be excluded or limited under
              South African law, including rights protected by the Consumer
              Protection Act 68 of 2008.
            </p>
          </section>

          <section aria-labelledby="terms-privacy">
            <h2 id="terms-privacy">13. Privacy</h2>
            <p>
              Pixel Pals handles personal information in accordance with our{' '}
              <a href="/privacy-policy">Privacy Policy</a> and applicable South
              African privacy law, including the Protection of Personal
              Information Act 4 of 2013 (POPIA).
            </p>
          </section>

          <section
            className="terms-page__future"
            aria-labelledby="terms-future"
          >
            <h2 id="terms-future">14. Future services</h2>
            <p>
              Pixel Pals may introduce digital or AI-powered tools, user
              accounts, document uploads, subscriptions or online payments in
              the future. These features are not currently offered through this
              informational website.
            </p>
            <p>
              We will update these terms, or introduce appropriate additional
              terms, before those services launch.
            </p>
          </section>

          <section aria-labelledby="terms-changes">
            <h2 id="terms-changes">15. Changes to these terms</h2>
            <p>
              Pixel Pals may update these terms when the website, our services
              or applicable legal requirements change. The “Last updated” date
              at the top of this page will show when the latest changes were
              made. Your continued use of the website after updated terms are
              published means that the updated terms apply to future use.
            </p>
          </section>

          <section aria-labelledby="terms-law">
            <h2 id="terms-law">16. Governing law</h2>
            <p>
              These terms are governed by the laws of the Republic of South
              Africa. Any dispute relating to these terms or the website will
              be handled by a court or other forum with jurisdiction under
              applicable South African law.
            </p>
          </section>

          <section className="terms-page__contact" aria-labelledby="terms-contact">
            <h2 id="terms-contact">17. Contact</h2>
            <p>
              If you have questions about these terms, please contact Pixel
              Pals using the official contact details published on
              pixelpals.co.za.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
