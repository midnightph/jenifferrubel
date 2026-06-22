export interface Service {
  id: string;
  name: string;
}

export const services: Service[] = [
  { id: "alongamento", name: "Alongamento de Cílios" },
  { id: "volume-russo", name: "Volume Russo" },
  { id: "mega-volume", name: "Mega Volume" },
  { id: "manutencao", name: "Manutenção" },
  { id: "curso-iniciante", name: "Curso Iniciante" },
  { id: "curso-avancado", name: "Curso Avançado" },
  { id: "curso-completo", name: "Curso Completo" },
];
