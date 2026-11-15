import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import NextThemeProvider from "@/providers/NextThemeProvider";
import Footer from "@/components/ui/Footer";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Doc Appoint",
  description: "Book trusted doctors near you",
  icons: {
    icon: "../../public/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </NextThemeProvider>
      </body>
    </html>
  );
}
