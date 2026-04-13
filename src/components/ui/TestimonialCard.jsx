import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ image, name, quote }) {
  return (
    <article className={styles.card}>
      <img className={styles.avatar} src={image} alt={`Photo of ${name}`} />
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.quote}>{quote}</p>
    </article>
  );
}
