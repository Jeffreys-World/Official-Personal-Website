import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jeffrey De La Cruz — Software Engineering & AI Automation",
  description:
    "I build systems that remove friction. Software engineering and AI-driven automation for real business problems — customer service, supply chain, accounting, HR, and marketing.",
  openGraph: {
    title: "Jeffrey De La Cruz — Software Engineering & AI Automation",
    description:
      "I build systems that remove friction. Software engineering and AI-driven automation for real business problems.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <div className="bg-layer" aria-hidden="true">
            <div className="bg-blob" />
            <div className="bg-blob bg-blob--second" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
