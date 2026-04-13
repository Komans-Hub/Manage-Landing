import FeatureItem from '../ui/FeatureItem';
import { features } from '../../data/data';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  return (
    <section className={styles.section} aria-labelledby="features-heading">
      <div className={`${styles.inner} container`}>

        <div className={styles.intro}>
          <h2 id="features-heading" className={styles.heading}>
            What's different about Manage?
          </h2>
          <p className={styles.body}>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <ul className={styles.list} role="list">
          {features.map((f, i) => (
            <li key={f.id} className={`anim-fade-up delay-${Math.min(i + 1, 4)}`}>
              <FeatureItem
                number={f.number}
                title={f.title}
                description={f.description}
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
