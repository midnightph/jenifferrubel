"use client";

import { courses } from "@/data/courses";
import { profile } from "@/data/profile";
import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <section id="cursos" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <h2>Cursos Presenciais</h2>
          <p>Forme-se com quem entende do assunto</p>
          <div className="section-divider" />
        </div>

        <div className={styles.grid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div className={styles.placeholder}>
                  {course.name.charAt(0)}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{course.name}</h3>
                <p className={styles.cardDesc}>{course.description}</p>

                <div className={styles.benefits}>
                  {course.benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefit}>
                      <span className={styles.benefitIcon}>{benefit.icon}</span>
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${profile.phone}?text=${encodeURIComponent(course.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Quero Saber Mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}