'use client';

import { useEffect, useRef, useState } from 'react';
import './SiteHeader.css';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function closeMenu(event) {
      if (
        event.key === 'Escape' ||
        (event.type === 'mousedown' && !menuRef.current?.contains(event.target))
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('keydown', closeMenu);
    document.addEventListener('mousedown', closeMenu);

    return () => {
      document.removeEventListener('keydown', closeMenu);
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand-menu" ref={menuRef}>
          <button
            className="site-header__brand"
            type="button"
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            PIXEL-PALS
            <span
              className={`site-header__brand-arrow ${
                menuOpen ? 'site-header__brand-arrow--open' : ''
              }`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {menuOpen && (
            <nav className="site-header__dropdown" aria-label="Pixel Pals products">
              <a href="/resume-assistant" role="menuitem">
                Resume Assistant
              </a>
            </nav>
          )}
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
