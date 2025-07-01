import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
  // fallback: ["system-ui", "sans-serif"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mba Chibueze | Frontend Developer & UI/UX Enthusiast",
  description: "Welcome to the portfolio of Mba Chibueze — a frontend developer crafting responsive, user-friendly web experiences using Next.js, Tailwind CSS, and modern web technologies.",
  keywords: ["Frontend Developer", "Next.js Portfolio", "Tailwind CSS", "React Developer", "UI/UX Design", "JavaScript Developer", "Web Development"],
  authors: [{ name: "Mba Chibueze", url: "https://chibueze.vercel.app" }],
  creator: "Mba Chibueze",
  metadataBase: new URL("https://chibueze.vercel.app"), 
  openGraph: {
    title: "Mba Chibueze | Frontend Developer",
    description: "Explore clean and responsive web projects built with Next.js and Tailwind CSS.",
    url: "https://chibueze.vercel.app",
    siteName: "ObaTech",
    images: [
      {
        url: "https://chibueze.vercel.app/landscape2.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "ObaTech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mba Chibueze | Frontend Developer",
    description: "Check out the personal portfolio of Your Name, showcasing modern and responsive web apps.",
    creator: "@mba_chibuezez", // Optional
    images: ["/landscape2.jpg"], // Replace with your actual OG image
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
