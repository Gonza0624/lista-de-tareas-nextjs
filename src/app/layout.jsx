import Navbar from "@/components/navbar";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lista-de-tareas",
  description: "Lista de tareas desarrollada con nextjs-mysql-docker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
