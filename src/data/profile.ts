export interface Profile {
  name: string;
  title: string;
  description: string;
  photoUrl: string;
  experience: string;
  clientsAttended: string;
  studentsGraduated: string;
  aboutText: string;
  aboutPhotoUrl?: string;
  phone: string;
  whatsappLink: string;
  instagramLink: string;
  tiktokLink?: string;
}

export const profile: Profile = {
  name: "Jeniffer Rubel",
  title: "Especialista em Extensão de Cílios",
  description: "Transformando olhares e formando profissionais há mais de 5 anos. Especialista em extensão de cílios e formação profissional.",
  photoUrl: "/images/jeniffer-hero.jpg",
  experience: "5+ anos",
  clientsAttended: "500+",
  studentsGraduated: "200+",
  aboutText:
    "Comecei minha jornada na área de extensão de cílios movida pela paixão de realçar a beleza natural de cada pessoa. Ao longo dos anos, me especializei nas principais técnicas do mercado e descobri que minha verdadeira vocação vai além de transformar olhares — é compartilhar conhecimento.\n\nHoje, me dedico a formar novas profissionais com excelência, ensinando técnicas avançadas e os segredos de um atendimento de alta qualidade. Cada aluna formada é a realização de um sonho que também foi meu: construir uma carreira de sucesso na beleza.",
  phone: "5511999999999",
  whatsappLink: "https://wa.me/5511999999999",
  instagramLink: "https://instagram.com/jenifferrubel",
  tiktokLink: "https://tiktok.com/@jenifferrubel",
};
