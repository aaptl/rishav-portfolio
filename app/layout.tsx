import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import MotionProvider from "@/components/motion/MotionProvider";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import "./globals.css";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rishav Singh",
  jobTitle: "Product & Systems Designer",
  email: `mailto:${CONTACT_EMAIL}`,
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  knowsAbout: [
    "AI Product Design",
    "Product Strategy",
    "Enterprise UX",
    "Design Systems",
    "Information Architecture",
    "No-Code Development",
  ],
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Product & Systems Designer`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Independent product & systems designer turning complexity into clarity across AI products, SaaS platforms, and every system in between.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>
          <SmoothScrollProvider />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
