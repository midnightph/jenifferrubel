"use client";

import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const renderStars = (rating: number) => {
    const filled = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return filled + empty;
  };

  return (
    <section id="depoimentos" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <h2>Depoimentos</h2>
          <p>O que dizem sobre meu trabalho</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.header}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.stars}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <div className={styles.comment}>{testimonial.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}