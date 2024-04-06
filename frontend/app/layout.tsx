import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";

const roboto = Roboto({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Blog Application",
  description: "A demo blog application",
  creator: "Rishabh Jha",
  category: "Blogging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
