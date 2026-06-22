"use client";

import { socialLinks } from "@/data/socialLinks";
import styles from "./SocialLinks.module.css";

const iconMap: Record<string, string> = {
  instagram: "📸",
  whatsapp: "💬",
  tiktok: "🎵",
};

const iconStyleMap: Record<string, string> = {
  instagram: styles.iconInstagram,
  whatsapp: styles.iconWhatsapp,
  tiktok: styles.iconTiktok,
};

export default function SocialLinks() {
  return (
    <section className={styles.section} id="redes-sociais">
      <div className="container">
        <div className="section-header">
          <h2>Redes Sociais</h2>
          <p>Acompanhe meu trabalho e fique por dentro das novidades</p>
          <div className="section-divider" />
        </div>

        <div className={styles.links}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <div className={`${styles.iconWrapper} ${iconStyleMap[link.icon]}`}>
                {iconMap[link.icon]}
              </div>
              <div className={styles.linkInfo}>
                <div className={styles.linkName}>{link.name}</div>
                <div className={styles.linkLabel}>{link.label}</div>
              </div>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
