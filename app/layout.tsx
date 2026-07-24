import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stilvo — Tu estilo. Gente real. Un solo lugar.",
  description: "La red social donde personas reales comparten sus outfits y la IA te ayuda a encontrar tu estilo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}