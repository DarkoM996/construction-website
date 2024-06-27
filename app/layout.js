import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font--bodoni--moda",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "CamYork Construction",
  description: "Hotel construction amplified",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>{children}</body>
    </html>
  );
}
