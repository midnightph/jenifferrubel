"use client";

import { profile } from "@/data/profile";
import styles from "./Hero.module.css";
import { FaBook, FaCalendarAlt, FaWhatsapp, FaStar } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.photoWrapper}>
        <div className={styles.photoPlaceholder}>
          <img src={profile.photoUrl} />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
        <p className={styles.description}>{profile.description}</p>

        <div className={styles.buttons}>
          {/* 1 — Primary CTA: Novo Curso (gold accent) */}
          <button
            onClick={() => scrollTo("novo-curso")}
            className={`${styles.heroButton} ${styles.primaryButton}`}
          >
            <FaStar className={styles.heroIcon} />
            Lista de Espera - Fox em Segredo
          </button>

          <a
            href="#cursos"
            className={`${styles.heroButton} ${styles.secondaryButton}`}
          >
            <FaBook className={styles.heroIcon} />
            Conhecer Cursos
          </a>

          {/* 2 — Schedule: Agendar Atendimento (rose/pink accent) */}
          <a
            href="#agenda"
            className={`${styles.heroButton} ${styles.scheduleButton}`}
          >
            <FaCalendarAlt className={styles.heroIcon} />
            Agendar Atendimento
          </a>

          {/* 3 — WhatsApp (green accent) */}
          <a
            href={`https://wa.me/${profile.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.heroButton} ${styles.whatsappButton}`}
          >
            <FaWhatsapp className={styles.heroIcon} />
            WhatsApp
          </a>

          {/* 4 — Secondary: Conhecer Cursos (neutral) */}
        </div>
      </div>
    </section>
  );
}
