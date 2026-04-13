import Button from '../ui/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Decorative background blob */}
      <div className={styles.blob} aria-hidden="true">
        <img src="/images/bg-tablet-pattern.svg" alt="" />
      </div>

      <div className={`${styles.inner} container`}>
        {/* Illustration */}
        <div className={`${styles.illustration} anim-fade-in`}>
          <img
            src="/images/illustration-intro.svg"
            alt="Manage dashboard illustration"
          />
        </div>

        {/* Copy */}
        <div className={styles.copy}>
          <h1 id="hero-heading" className={`${styles.heading} anim-fade-up`}>
            Bring everyone together to build better products.
          </h1>
          <p className={`${styles.body} anim-fade-up delay-2`}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className={`anim-fade-up delay-3`}>
            <Button variant="orange">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
