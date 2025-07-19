import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Full-Stack Developer Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full-Stack Developer",
    "Portfolio",
    "Web Development",
    "React",
    "Next.js",
    "DevOps",
    siteConfig.name,
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Professional Portfolio`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full-Stack Developer`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link href="/logo.png" rel="icon" sizes="196x196" type="image/png" />
        <link href="/favicon.ico" rel="shortcut icon" />

        {/* Apple Touch Icons */}
        <link href="/apple-icon.png" rel="apple-touch-icon" />

        {/* PWA */}
        <link href="/site.webmanifest" rel="manifest" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta
          content="black-translucent"
          name="apple-mobile-web-app-status-bar-style"
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title={`${siteConfig.name} Portfolio`}
              >
                <span className="text-default-600">
                  © {new Date().getFullYear()} {siteConfig.name} | Portfolio
                </span>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
