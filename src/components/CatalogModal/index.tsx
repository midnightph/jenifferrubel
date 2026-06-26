"use client";

import React, { useEffect, useCallback } from "react";
import styles from "./CatalogModal.module.css";

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export default function CatalogModal({
  isOpen,
  onClose,
  pdfUrl,
  title = "Catálogo",
}: CatalogModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={title}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar catálogo"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className={styles.pdfContainer}>
          <iframe
            className={styles.pdfFrame}
            src={`${pdfUrl}#toolbar=1&navpanes=1`}
            title={title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
