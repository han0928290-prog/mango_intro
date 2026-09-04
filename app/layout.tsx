import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "台灣好水果｜寶島四季鮮果地圖",
  description:
    "探索台灣豐饒物產，從芒果、鳳梨到蓮霧、釋迦，帶你認識台灣四季當令水果與產地故事。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="relative flex min-h-screen flex-1 flex-col overflow-x-hidden bg-ink text-cream">
          <Background />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
