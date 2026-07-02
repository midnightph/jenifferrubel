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
    name: "Curso Iniciante de Cílios – Do Zero ao Luxo",
    description:
      "Quer iniciar na área da extensão de cílios e aprender tudo o que realmente importa para realizar atendimentos com segurança e qualidade? Neste curso completo você aprenderá desde a anatomia dos fios até técnicas de atendimento e fidelização de clientes. Além disso, receberá materiais para conseguir realizar suas primeiras modelos com mais segurança e confiança.",
    benefits: [
      { icon: "🧬", text: "Anatomia dos fios" },
      { icon: "🧪", text: "Biossegurança" },
      { icon: "🗺️", text: "Mapeamentos" },
      { icon: "🔍", text: "Isolamento correto" },
      { icon: "✋", text: "Aplicação na prática" },
      { icon: "💎", text: "Retenção e durabilidade" },
      { icon: "🔄", text: "Manutenção" },
      { icon: "🧹", text: "Remoção química e mecânica" },
      { icon: "🤝", text: "Atendimento e fidelização de clientes" },
      { icon: "📅", text: "Curso com duração de 2 dias: 1º dia aula teórica, 2º dia aula prática" },
      { icon: "💬", text: "Acompanhamento exclusivo via WhatsApp por 3 meses" },
      { icon: "📆", text: "Retorno após 15 dias para realizar a manutenção da sua modelo e tirar dúvidas" },
    ],
    imageUrl: "/images/curso-iniciante.jpeg",
    whatsappMessage:
      "Olá Jeniffer! Tenho interesse no Curso Iniciante de Cílios – Do Zero ao Luxo. Gostaria de saber mais informações.",
  },
  {
    id: "curso-avancado",
    name: "Curso Avançado de Retenção",
    description:
      "Domine a Retenção e Entregue Extensões que Duram. Aprenda os segredos do pH dos cílios, técnica de acoplagem correta e tudo sobre adesivos. Um dia intensivo com mentoramento personalizado para eliminar os erros que comprometem seus resultados e conquistar clientes que voltam.",
    benefits: [
      { icon: "🎯", text: "Conteúdo totalmente personalizado para Retenção" },
      { icon: "📅", text: "Curso com duração de 1 dia, com conteúdo direcionado" },
      { icon: "💡", text: "Aperfeiçoe suas técnicas e corrija erros" },
      { icon: "💖", text: "Acompanhamento durante um mês" },
    ],
    imageUrl: "",
    whatsappMessage:
      "Olá Jeniffer! Tenho interesse no Curso Avançado de Retenção. Gostaria de saber mais informações.",
  },
  {
    id: "curso-completo",
    name: "Curso Presencial Avançado Tendências",
    description:
      "Aperfeiçoe suas técnicas e domine as Têndencias com precisão. Para profissionais que já atuam na área e desejam se especializar.",
    benefits: [
      { icon: "📚", text: "Conteúdo totalmente personalizado para Tendências" },
      { icon: "👩‍🏫", text: "Curso com duração de 1 dia, com conteúdo direcionado" },
      { icon: "💼", text: "Aperfeiçoe suas técnicas e corrija erros" },
      { icon: "🆘", text: "Acompanhamento durante um mês" },
    ],
    imageUrl: "",
    whatsappMessage:
      "Olá Jeniffer! Tenho interesse no Curso Presencial Avançado Têndencias. Gostaria de saber mais informações.",
  },
];

export const newCourse: Course = {
  id: "novo-curso",
  name: "Fox sem Segredo - Entra já na Lista De Espera",
  description:
    "O curso online mais aguardado do ano está chegando! Aprenda as técnicas mais modernas do Fox sem Segredo, efeitos especiais e designs personalizados que estão dominando o mercado.",
  benefits: [
    { icon: "🔥", text: "Entre antes de todos na lista de espera" },
    { icon: "🎨", text: "Aprenda 3 formas de trabalhar com o efeito Fox" },
    { icon: "📊", text: "Designs personalizados por formato de olho" },
    { icon: "🏆", text: "Curso de 1 ano" },
  ],
  imageUrl: "/images/curso-fox-segredo.jpeg",
  whatsappMessage:
    "Olá Jeniffer! Tenho interesse no Novo Curso de Mega Volume e Efeitos Especiais. Quero garantir minha vaga!",
};
