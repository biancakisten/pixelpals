import './SiteHeader.css';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/">
          PIXEL-PALS.
        </a>

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
