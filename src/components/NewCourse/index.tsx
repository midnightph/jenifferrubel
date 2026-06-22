"use client";

import { newCourse } from "@/data/courses";
import { profile } from "@/data/profile";
import styles from "./NewCourse.module.css";

export default function NewCourse() {
  return (
    <section id="novo-curso" className={styles.section}>
      <div className={`section-header ${styles.sectionHeader}`}>
        <h2>Novo Curso</h2>
        <p>Lançamento Exclusivo</p>
        <div className={`section-divider ${styles.sectionDivider}`} />
      </div>

      <div className={styles.banner}>
        <div className={styles.badge}>🔥 NOVO</div>
        <h3 className={styles.title}>{newCourse.name}</h3>
        <p className={styles.desc}>{newCourse.description}</p>

        <div className={styles.benefits}>
          {newCourse.benefits.map((benefit, index) => (
            <div key={index} className={styles.benefit}>
              <span className={styles.benefitIcon}>{benefit.icon}</span>
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <a
            href={`https://wa.me/${profile.phone}?text=${encodeURIComponent(newCourse.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Quero Garantir Minha Vaga
          </a>
          <a
            href={`https://wa.me/${profile.phone}?text=${encodeURIComponent(newCourse.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
}