"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./CatalogModal.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const pdfContainerRef = useRef<HTMLDivElement | null>(null);

  // Keep observer lightweight and deterministic.
  useEffect(() => {
    const el = pdfContainerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const next = el.getBoundingClientRect().width;
      if (Number.isFinite(next) && next > 0) setContainerWidth(next);
    };

    updateWidth();

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const next = entry.contentRect.width;
      if (Number.isFinite(next) && next > 0) setContainerWidth(next);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, handleKeyDown]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const pages = useMemo(() => {
    if (!numPages) return [];
    return Array.from(new Array(numPages), (_, i) => i + 1);
  }, [numPages]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={title}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose} type="button">
            ✕
          </button>
        </div>

        <div className={styles.pdfContainer} ref={pdfContainerRef}>
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Carregando PDF..."
          >
            {pages.map((pageNumber) => (
              <Page
                key={`page_${pageNumber}`}
                pageNumber={pageNumber}
                width={containerWidth || undefined}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className={styles.pdfPage}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

