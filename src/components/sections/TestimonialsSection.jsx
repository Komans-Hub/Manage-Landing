import { useRef, useState } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import Button from '../ui/Button';
import { testimonials } from '../../data/data';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const scrollTo = (i) => {
    setActive(i);
    const card = trackRef.current?.children[i];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  /* Keep dot in sync when user manually swipes */
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActive(closest);
  };

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className={styles.heading}>
        What they've said
      </h2>

      <div className={styles.sliderWrapper}>
        <div
          className={styles.track}
          ref={trackRef}
          onScroll={handleScroll}
          role="list"
          aria-label="Customer testimonials"
        >
          {testimonials.map((t) => (
            <div key={t.id} role="listitem">
              <TestimonialCard image={t.image} name={t.name} quote={t.quote} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={i === active}
            aria-label={`Show testimonial from ${t.name}`}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>

      <div className={styles.cta}>
        <Button variant="orange">Get Started</Button>
      </div>
    </section>
  );
}
