import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const somarSans = localFont({
  src: [
    {
      path: "../../public/fonts/SomarSans-Regular.ttf",
    },
  ],
  variable: "--font-somar-sans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${somarSans.variable}`}
      >
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
