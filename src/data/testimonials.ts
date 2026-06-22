export interface Testimonial {
  id: string;
  name: string;
  photoUrl: string;
  rating: number;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Camila Oliveira",
    photoUrl: "/images/testimonial-1.jpg",
    rating: 5,
    comment:
      "O curso da Jeniffer mudou minha vida profissional! Aprendi técnicas que nunca vi em nenhum outro lugar. Super recomendo!",
  },
  {
    id: "2",
    name: "Juliana Santos",
    photoUrl: "/images/testimonial-2.jpg",
    rating: 5,
    comment:
      "A Jeniffer é uma profissional incrível! O atendimento é impecável e o resultado dos meus cílios ficou simplesmente perfeito.",
  },
  {
    id: "3",
    name: "Mariana Costa",
    photoUrl: "/images/testimonial-3.jpg",
    rating: 5,
    comment:
      "Fiz o curso completo e saí preparada para atender no dia seguinte. O suporte pós-curso faz toda a diferença. Jeniffer é uma referência!",
  },
  {
    id: "4",
    name: "Amanda Silva",
    photoUrl: "/images/testimonial-4.jpg",
    rating: 4,
    comment:
      "Atendimento excelente! Meus cílios ficaram lindos e a Jeniffer foi muito cuidadosa em cada etapa. Virei cliente fiel!",
  },
];
