import { useState } from 'react';
import { footerNav, socialLinks } from '../../data/data';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please insert your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please insert a valid email');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>

        {/* ── Logo + Socials ── */}
        <div className={styles.brand}>
          <a href="/" aria-label="Manage – go to homepage">
            <img
              src="./images/logo.svg"
              alt="Manage"
              className={styles.logo}
              width="146"
              height="24"
            />
          </a>

          <nav className={styles.social} aria-label="Social media links">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={`Visit us on ${s.name}`}
                className={styles.socialLink}
              >
                <img src={s.icon} alt="" aria-hidden="true" width="20" height="20" />
              </a>
            ))}
          </nav>
        </div>

        {/* ── Nav columns ── */}
        <nav className={styles.navGrid} aria-label="Footer navigation">
          {footerNav.map((col, ci) => (
            <ul key={ci} role="list">
              {col.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* ── Newsletter ── */}
        <div className={styles.newsletterArea}>
          <form
            className={styles.newsletter}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Newsletter sign up"
          >
            <div className={styles.inputRow}>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                placeholder="Updates in your inbox…"
                aria-label="Email address"
                aria-describedby={error ? 'email-error' : undefined}
                aria-invalid={!!error}
              />
              <button type="submit" className={styles.go} aria-label="Subscribe">
                Go
              </button>
            </div>
            {error && (
              <p id="email-error" className={styles.error} role="alert">
                {error}
              </p>
            )}
            {submitted && (
              <p className={styles.success} role="status">
                Thanks for subscribing! 🎉
              </p>
            )}
          </form>

          <p className={styles.copy}>Copyright 2020. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}
