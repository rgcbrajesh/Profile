import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Brijesh Rajput | Full Stack Web & Mobile Developer",
    template: "%s | Brijesh Rajput"
  },
  description: "Product-focused Full Stack Developer with 2.5+ years of experience building scalable web & mobile applications, automated deployment workflows, and cloud infrastructure.",
  keywords: [
    "Brijesh Rajput", "Full Stack Developer", "React Developer", "React Native Developer",
    "AWS", "Web Development", "Mobile App Development", "Automation Systems",
    "DevOps", "Next.js", "TypeScript"
  ],
  authors: [{ name: "Brijesh Rajput" }],
  creator: "Brijesh Rajput",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brijeshrajput.dev",
    title: "Brijesh Rajput | Full Stack Web & Mobile Developer",
    description: "Product-focused Full Stack Developer specializing in React, React Native, AWS cloud, and automation systems.",
    siteName: "Brijesh Rajput Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brijesh Rajput | Full Stack Web & Mobile Developer",
    description: "Product-focused Full Stack Developer specializing in React, React Native, AWS cloud, and automation systems.",
    creator: "@brijeshrajput"
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0F172A] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}

