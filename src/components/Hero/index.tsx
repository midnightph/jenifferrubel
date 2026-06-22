"use client";

import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  const scheduleMessage = `Olá Jeniffer! Gostaria de agendar um atendimento.`;
  const coursesMessage = `Olá Jeniffer! Tenho interesse em conhecer seus cursos.`;

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.photoWrapper}>
        <div className={styles.photoPlaceholder}>JR</div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
        <p className={styles.description}>{profile.description}</p>

        <div className={styles.buttons}>
          <a
            href={`https://wa.me/${profile.phone}?text=${encodeURIComponent(scheduleMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span className={styles.buttonIcon}>📅</span>
            Agendar Atendimento
          </a>

          <a
            href={`https://wa.me/${profile.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <span className={styles.buttonIcon}>💬</span>
            WhatsApp
          </a>

          <a
            href={`https://wa.me/${profile.phone}?text=${encodeURIComponent(coursesMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span className={styles.buttonIcon}>📚</span>
            Conhecer Cursos
          </a>

          <a
            href={profile.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span className={styles.buttonIcon}>📸</span>
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
