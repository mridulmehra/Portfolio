import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mridul Mehra | Portfolio",
  authors: [
    { name: "Mridul Mehra", url: "https://github.com/mridulmehra" },
    { name: "Mridul", url: "https://github.com/mridulmehra" },
  ],
  icons: [
    {
      url: "/photo.jpeg",
      href: "/photo.jpeg",
    },
  ],
  description: "Mridul's personal portfolio website",
  openGraph: {
    title: "Mridul Mehra | Portfolio",
    description: "Mridul's personal portfolio website",
    images: [
      {
        url: "/photo",
        alt: "Mridul Mehra | Portfolio",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-zinc-900", montserrat.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container lg:px-28 pt-24">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
