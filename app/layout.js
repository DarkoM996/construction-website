import { Cormorant_Garamond } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font--cormorant--garamond",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "CamYork Construction",
  description: "Hotel construction amplified",
};

// Putting Navbar component above the body part will be probably needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <main className="w-screen h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
