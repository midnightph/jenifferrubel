"use client";

import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>{profile.name}</div>
        <div className={styles.subtitle}>{profile.title}</div>

        <div className={styles.links}>
          <a
            href={profile.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            WhatsApp
          </a>
          <a href="#hero" className={styles.link}>
            Início
          </a>
          <a href="#cursos" className={styles.link}>
            Cursos
          </a>
        </div>

        <div className={styles.divider} />

        <p className={styles.copyright}>
          © {year} {profile.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
