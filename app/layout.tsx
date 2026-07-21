import type { Metadata } from "next";
import { Archivo_Black, Jost } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.hannahbeauty.co.nz"),
  title: {
    default: "Hannah Beauty Blog — PMU Guides & Academy Insights",
    template: "%s | Hannah Beauty Blog",
  },
  description:
    "Permanent makeup guides, education and academy insights from Hannah Beauty, Mt Eden, Auckland. Nano hairstroke brows, lip blush, eyeliner, lash lift and SMP.",
  openGraph: {
    siteName: "Hannah Beauty Blog",
    type: "website",
    locale: "en_NZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-background font-body text-ink antialiased">
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
