import { useState } from 'react';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const navLinks = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className={styles.header}>
        <nav className={`${styles.nav} container`} aria-label="Main navigation">
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="Manage – go to homepage">
            <img src="/images/logo.svg" alt="Manage" width="146" height="24" />
          </a>

          {/* Desktop links */}
          <ul className={styles.desktopLinks} role="list">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className={styles.link}>{link}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <Button variant="orange">Get Started</Button>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <img
              src={open ? '/images/icon-close.svg' : '/images/icon-hamburger.svg'}
              alt=""
              aria-hidden="true"
              width="24"
              height="18"
            />
          </button>

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
            aria-hidden={!open}
          >
            <ul role="list">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.mobileLink} onClick={() => setOpen(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
