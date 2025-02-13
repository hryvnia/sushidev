import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Philosopher } from "next/font/google";
import "./globals.css";
import "./main.sass";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic"],
  weight: ["400"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["cyrillic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SushiDev",
  description: "Місце твоєї мрії",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${roboto.variable} ${philosopher.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
