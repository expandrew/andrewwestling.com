import { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GoatCounter } from "./components/GoatCounter";
import "./print.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | andrewwestling.com",
    default: "andrewwestling.com",
  },
};

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <GoatCounter />
      <body className="bg-background dark:bg-background-dark text-text dark:text-text-dark">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <div className="max-w-container mx-auto w-full px-4">
              <div className="mb-5">{children}</div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
