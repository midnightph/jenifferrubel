"use client";

import { profile } from "@/data/profile";
import styles from "./WhatsAppFloat.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${profile.phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Fale com Jeniffer pelo WhatsApp"
    >
      <FaWhatsapp />
      <span className={styles.tooltip}>Fale com Jeniffer</span>
    </a>
  );
}
