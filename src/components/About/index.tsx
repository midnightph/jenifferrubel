"use client";

import { profile } from "@/data/profile";
import styles from "./About.module.css";

export default function About() {
  const stats = [
    { number: profile.experience, label: "Anos de Experiência" },
    { number: profile.clientsAttended, label: "Clientes Atendidas" },
    { number: profile.studentsGraduated, label: "Alunas Formadas" },
  ];

  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <h2>Sobre Mim</h2>
          <p>Conheça minha história</p>
          <div className="section-divider" />
        </div>

        <div className={styles.content}>
          <div className={styles.photoWrapper}>
            <div className={styles.photoPlaceholder}>JR</div>
          </div>

          <div className={styles.textContent}>
            <p className={styles.text}>{profile.aboutText}</p>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}