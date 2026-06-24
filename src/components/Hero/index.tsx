"use client";

import { profile } from "@/data/profile";
import styles from "./Hero.module.css";
import { FaBook, FaCalendarAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
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
          <a href="#agenda" className="btn btn-primary">
            <FaCalendarAlt className={styles.buttonIconCalendar} />
            Agendar Atendimento
          </a>

          <a
            href={`https://wa.me/${profile.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <FaWhatsapp className={styles.buttonIcon} />
            WhatsApp
          </a>

          <a href="#cursos" className="btn btn-secondary">
            <FaBook className={styles.buttonIcon} />
            Conhecer Cursos
          </a>
        </div>
      </div>
    </section>
  );
}
