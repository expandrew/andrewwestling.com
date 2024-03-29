import { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { GoatCounter } from "@components/GoatCounter";
import "./print.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | andrewwestling.com",
    default: "andrewwestling.com",
  },
  description: "Andrew M Westling is a software engineer in New York City.",
  icons: {
    icon: "/assets/favicon/favicon-32x32.png",
    shortcut: "/assets/favicon/favicon.ico",
    apple: "/assets/favicon/apple-touch-icon.png",
  },
  manifest: "/assets/favicon/site.webmanifest",
};

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Suspense>
        <GoatCounter />
      </Suspense>
      <body className="bg-background dark:bg-background-dark text-text dark:text-text-dark">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <div className="max-w-container mx-auto w-full px-4">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
