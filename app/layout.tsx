@'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BriefKompas.nl",
  description: "Slimme briefgenerator voor bezwaar en WOO-verzoeken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
'@ | Set-Content -Encoding utf8 app/layout.tsx