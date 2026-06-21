import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://asadullah-i.vercel.app"),
  title: {
    default: "Asadullah I. — Web Developer & Growth Marketer",
    template: "%s — Asadullah I.",
  },
  description:
    "Asadullah I. builds fast, conversion-ready websites and runs the automation, ads, and content systems that grow them — n8n workflows, Meta Ads, organic social, and AI-assisted UGC.",
  keywords: [
    "Asadullah",
    "Web Developer",
    "n8n automation",
    "Meta Ads",
    "Shopify developer",
    "Digital Marketing",
    "UGC ads",
  ],
  authors: [{ name: "Asadullah I." }],
  openGraph: {
    title: "Asadullah I. — Web Developer & Growth Marketer",
    description:
      "Websites, automations, and growth systems built to convert — by Asadullah I.",
    url: "https://asadullah-i.vercel.app",
    siteName: "Asadullah I.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asadullah I. — Web Developer & Growth Marketer",
    description:
      "Websites, automations, and growth systems built to convert — by Asadullah I.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-surface-base focus:text-text-inverse focus:px-6 focus:py-3 focus:rounded-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
