import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Forager",
  description: "A CSE3340 Interaction Design Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
