export interface CourseBenefit {
  icon: string;
  text: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  benefits: CourseBenefit[];
  imageUrl: string;
  whatsappMessage: string;
}

export const courses: Course[] = [
  {
    id: "curso-iniciante",
    name: "Curso Iniciante de Extensão de Cílios",
    description:
      "Aprenda do zero as principais técnicas de extensão de cílios. Ideal para quem deseja iniciar na profissão com segurança e excelência.",
    benefits: [
      { icon: "✨", text: "Técnicas fio a fio e volume russo" },
      { icon: "📋", text: "Anatomia e segurança ocular" },
      { icon: "🎯", text: "Prática em modelos reais" },
      { icon: "📜", text: "Certificado de conclusão" },
    ],
    imageUrl: "/images/curso-iniciante.jpg",
    whatsappMessage:
      "Olá Jeniffer! Tenho interesse no Curso Iniciante de Extensão de Cílios. Gostaria de saber mais informações.",
  },
  {
    id: "curso-avancado",
    name: "Curso Avançado de Volume Russo",
    description:
      "Aperfeiçoe suas técnicas e domine o volume russo com precisão. Para profissionais que já atuam na área e desejam se especializar.",
    benefits: [
      { icon: "🌟", text: "Técnicas avançadas de volume russo" },
      { icon: "📐", text: "Mapas de fios e simetria" },
      { icon: "💡", text: "Correções e manutenção" },
      { icon: "🎓", text: "Certificação avançada" },
    ],
    imageUrl: "/images/curso-avancado.jpg",
    whatsappMessage:
      "Olá Jeniffer! Tenho interesse no Curso Avançado de Volume Russo. Gostaria de saber mais informações.",
  },
  {
    id: "curso-completo",
    name: "Curso Completo de Formação",
    description:
      "Formação completa do zero ao avançado. Saia preparada para atender e cobrar como uma profissional de alto nível.",
    benefits: [
      { icon: "📚", text: "Módulos teórico e prático completos" },
      { icon: "👩‍🏫", text: "Acompanhamento individual" },
      { icon: "💼", text: "Gestão de negócios e precificação" },
      { icon: "🆘", text: "Suporte pós-curso" },
    ],
    imageUrl: "/images/curso-completo.jpg",
    whatsappMessage:
      "Olá Jeniffer! Tenho interesse no Curso Completo de Formação. Gostaria de saber mais informações.",
  },
];

export const newCourse: Course = {
  id: "novo-curso",
  name: "Novo Curso: Mega Volume e Efeitos Especiais",
  description:
    "O curso mais aguardado do ano está chegando! Aprenda as técnicas mais modernas de mega volume, efeitos especiais e designs personalizados que estão dominando o mercado.",
  benefits: [
    { icon: "🔥", text: "Mega Volume 3D a 6D" },
    { icon: "🎨", text: "Efeitos especiais (wet, diamante, leque)" },
    { icon: "📊", text: "Designs personalizados por formato de olho" },
    { icon: "🏆", text: "Certificação internacional" },
  ],
  imageUrl: "/images/novo-curso.jpg",
  whatsappMessage:
    "Olá Jeniffer! Tenho interesse no Novo Curso de Mega Volume e Efeitos Especiais. Quero garantir minha vaga!",
};
