import './SiteHeader.css';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand-menu">
          <a className="site-header__brand" href="https://pixelpals.co.za">
            PIXEL-PALS
          </a>

          <nav className="site-header__dropdown" aria-label="Pixel Pals products">
            <a href="/resume-assistant">Resume Assistant</a>
          </nav>
        </div>

        <a
          className="site-header__contact"
          href="mailto:bianca.kisten@pixelpals.co.za"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}
