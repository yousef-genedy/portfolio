import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yousef Genedy | Backend Engineer",
    template: "%s | Yousef Genedy",
  },
  description:
    "Backend engineer portfolio focused on scalable systems, APIs, and distributed architectures.",
  openGraph: {
    title: "Yousef Genedy | Backend Engineer",
    description:
      "Backend engineer portfolio focused on scalable systems, APIs, and distributed architectures.",
    url: siteUrl,
    siteName: "Yousef Genedy Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yousef Genedy | Backend Engineer",
    description:
      "Backend engineer portfolio focused on scalable systems, APIs, and distributed architectures.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-50 text-zinc-900">{children}</body>
    </html>
  );
}
