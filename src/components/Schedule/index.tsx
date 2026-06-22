"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import styles from "./Schedule.module.css";

export default function Schedule() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
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

    const message = [
      `*Agendamento - ${profile.name}*`,
      "",
      `*Nome:* ${nome}`,
      `*Telefone:* ${telefone}`,
      `*Serviço:* ${servico}`,
      `*Data:* ${data}`,
      `*Horário:* ${horario}`,
      mensagem ? `*Mensagem:* ${mensagem}` : "",
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
            <label className={styles.label} htmlFor="telefone">
              Telefone
            </label>
            <input
              id="telefone"
              className={styles.input}
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
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
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="data">
              Data
            </label>
            <input
              id="data"
              className={styles.input}
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="horario">
              Horário
            </label>
            <select
              id="horario"
              className={styles.select}
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              required
            >
              <option value="">Selecione um horário</option>
              {generateTimeOptions().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="mensagem">
              Mensagem (opcional)
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
      </div>
    </section>
  );
}