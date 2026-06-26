export interface Service {
  id: string;
  name: string;
}

export const services: Service[] = [
  { id: "volume-delicado", name: "Volume Delicado" },
  { id: "volume-glam", name: "Volume Glam" },
  { id: "volume-luxo", name: "Volume Luxo" },
  { id: "efeito-rimel", name: "Efeito Rímel" },
  { id: "efeito-kim-kardashian", name: "Efeito Kim Kardashian" },
  { id: "efeito-fox-eyes", name: "Efeito Fox Eyes" },
  { id: "efeito-drama", name: "Efeito Drama" },
  { id: "designer-sobrancelha", name: "Designer de Sobrancelha" },
  {
    id: "designer-sobrancelha-henna",
    name: "Designer de Sobrancelha com Henna",
  },
];