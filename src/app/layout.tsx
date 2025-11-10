import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HairBooking - Plataforma SaaS para Salões de Beleza",
  description: "Transforme seu salão com nossa plataforma completa de agendamentos, gestão de clientes e planos personalizados.",
  keywords: "salão de beleza, agendamento, cortes de cabelo, barbearia, SaaS",
  openGraph: {
    title: "HairBooking - Plataforma SaaS para Salões de Beleza",
    description: "Transforme seu salão com nossa plataforma completa de agendamentos, gestão de clientes e planos personalizados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
