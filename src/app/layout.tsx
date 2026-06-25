import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Jeniffer Rubel | Especialista em Extensão de Cílios",
  description:
    "Transformando olhares e formando profissionais. Especialista em extensão de cílios e formação profissional. Agende seu atendimento ou inscreva-se nos cursos.",
  keywords: [
    "extensão de cílios",
    "curso de cílios",
    "volume russo",
    "mega volume",
    "Jeniffer Rubel",
    "formação profissional",
    "beleza",
  ],
  openGraph: {
    title: "Jeniffer Rubel | Especialista em Extensão de Cílios",
    description:
      "Transformando olhares e formando profissionais há mais de 5 anos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
