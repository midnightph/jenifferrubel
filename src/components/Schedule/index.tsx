"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import dynamic from "next/dynamic";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

const CatalogModal = dynamic(
  () => import("@/components/CatalogModal"),
  { ssr: false }
);
import styles from "./Schedule.module.css";

export default function Schedule() {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [openCatalog, setOpenCatalog] = useState(false);
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [mensagem, setMensagem] = useState("");

  const generateTimeOptions = () => {
    const options: string[] = [];
    for (let h = 8; h <= 18; h++) {
      const hour = h.toString().padStart(2, "0");
      options.push(`${hour}:00`);
    }
    return options;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome || !servico || !data || !horario) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const message = [
      `*Olá, sou ${nome} e gostaria de agendar um horário.*`,
      `Tenho prefêrencia nos seguintes:`,
      "",
      `*Serviço:* ${servico}`,
      `*Data:* ${data}`,
      `*Horário:* ${horario}`,
      mensagem ? `*Observação:* ${mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${profile.phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="agenda" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <h2>Agende Seu Horário</h2>
          <p>Preencha o formulário e entrarei em contato</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              className={styles.input}
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="servico">
              Serviço
            </label>
            <select
              id="servico"
              className={styles.select}
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              required
            >
              <option value="">Selecione um serviço</option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              className={styles.catalogBtn}
              onClick={() => setOpenCatalog(true)}
            >
              Ver Catálogo de Procedimentos
            </button>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="mensagem">
              Observação (opcional)
            </label>
            <textarea
              id="mensagem"
              className={styles.textarea}
              placeholder="Alguma observação?"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Solicitar Agendamento via WhatsApp
          </button>
        </form>

        <CatalogModal
          isOpen={openCatalog}
          onClose={() => setOpenCatalog(false)}
          pdfUrl="/procedimentos.pdf"
          title="Catálogo de Procedimentos"
        />
      </div>
    </section>
  );
}
