import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Todo App",
  description: "This is a todo app created bu next sjs ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-xl m-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
