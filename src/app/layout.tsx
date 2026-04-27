import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VOLANDO VALENCIA | Modo avión activado",
  description: "La fiesta de Valencia que despega cada noche. Consigue tu boarding pass y prepárate para despegar. Destino: Desconexión.",
  keywords: ["Volando Valencia", "fiesta Valencia", "eventos Valencia", "discoteca Valencia", "noche Valencia"],
  openGraph: {
    title: "VOLANDO VALENCIA | Modo avión activado",
    description: "Consigue tu boarding pass para el próximo vuelo. Destino: Desconexión.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
