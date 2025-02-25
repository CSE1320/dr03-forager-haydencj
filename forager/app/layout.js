import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar'

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose the weights you need
});

export const metadata = {
  title: "Forager",
  description: "A CSE3340 Interaction Design Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
