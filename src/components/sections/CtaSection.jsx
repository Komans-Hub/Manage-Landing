import Button from '../ui/Button';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={`${styles.inner} container`}>
        <h2 id="cta-heading" className={styles.heading}>
          Simplify how your team works today.
        </h2>
        <Button variant="white">Get Started</Button>
      </div>
    </section>
  );
}
