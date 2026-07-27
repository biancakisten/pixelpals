import './Footer.css';

const serviceLinks = [
  { label: 'Web Development' },
  { label: 'Shopify Development' },
  { label: 'UI/UX Design' },
  { label: 'Automation' },
];

const aiLinks = [
  { label: 'Resume Assistant', href: '/resume-assistant' },
  { label: 'Website Audit' },
  { label: 'SEO Assistant' },
  { label: 'Content Generator' },
];

const socialLinks = [
  'GitHub',
  'LinkedIn',
  'Instagram',
  'X',
];

function FooterColumn({ title, links }) {
  return (
    <nav className="site-footer__column" aria-label={title}>
      <h3>{title}</h3>

      <ul>
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a href={link.href}>{link.label}</a>
            ) : (
              <span>{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" data-node-id="15:335">
      <div className="site-footer__container">
        <div className="site-footer__content">
          <div className="site-footer__brand">
            <a className="site-footer__logo" href="/" aria-label="Pixel Pals home">
              Pixel Pals
            </a>

            <p className="site-footer__tagline">
              <span>Modern websites.</span>
              <span>AI-powered software.</span>
              <span>Real business growth.</span>
            </p>

            <p className="site-footer__detail">
              Location: South Africa · Serving clients globally
            </p>

            <p className="site-footer__detail">
              Email:{' '}
              <a href="mailto:bianca.kisten@pixelpals.co.za">
                bianca.kisten@pixelpals.co.za
              </a>
            </p>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="AI Solutions" links={aiLinks} />

          <div className="site-footer__column">
            <h3>Social</h3>

            <ul>
              {socialLinks.map((link) => (
                <li key={link}>
                  <span>{link}</span>
                </li>
              ))}

              <li>
                <span>Clutch (coming soon)</span>
              </li>

              <li>
                <span>GoodFirms (coming soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Pixel Pals. All rights reserved.</p>

          <p className="site-footer__legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="/terms">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
