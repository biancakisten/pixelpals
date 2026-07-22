import './Footer.css';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Web Development', href: '/services#web-development' },
  { label: 'Shopify Development', href: '/services#shopify' },
  { label: 'UI/UX Design', href: '/services#ui-ux' },
  { label: 'Automation', href: '/services#automation' },
];

const aiLinks = [
  { label: 'Resume Assistant', href: '/ai-platform#resume-assistant' },
  { label: 'Website Audit', href: '/ai-platform#website-audit' },
  { label: 'SEO Assistant', href: '/ai-platform#seo-assistant' },
  { label: 'Content Generator', href: '/ai-platform#content-generator' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/biancakisten' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'X', href: '#' },
];

function FooterColumn({ title, links }) {
  return (
    <nav className="site-footer__column" aria-label={title}>
      <h3>{title}</h3>

      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
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
            <p className="site-footer__logo">Pixel Pals</p>

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
              <a href="mailto:hello@pixelpals.studio">
                hello@pixelpals.studio
              </a>
            </p>
          </div>

          <FooterColumn title="Navigation" links={navigationLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="AI Solutions" links={aiLinks} />

          <div className="site-footer__column">
            <h3>Social</h3>

            <ul>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noreferrer'
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
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
