import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

export type SiteConfig = typeof siteConfig;

// Configs for Google Search and etc
export const siteConfig = {
  url: "https://k5sha.xyz",
  name: "Yurii Yevtushenko",
  description:
    "👋 Hey there! I'm Yurii a full-stack developer specializing in modern web technologies",
  keywords: [
    "Full-Stack Developer",
    "Portfolio",
    "Web Development",
    "React",
    "Next.js",
    "DevOps",
    "Yurii Yevtushenko",
    "My portfolio",
    "Юрій Євтушенко",
    "Розробка",
    "Бекенд"
  ],
  buildID: process.env.NEXT_PUBLIC_BUILD_VERSION || "Unknown",
  links: {
    github: "https://github.com/k5sha",
    linkedin: "https://www.linkedin.com/in/yurii-yevtushenko-730a502a5",
    medium: "https://www.medium.com/@k5sha",
    sponsor: "https://patreon.com/k5sha",
    ticketo: "https://tikceto.k5sha.xyz/",
    email: "yurii.yevtushenko@gmail.com",
    noti_u:
      "https://chromewebstore.google.com/detail/notiu/dfbjgkobnicdengobbigledhcjnhlopg?utm_source=item-share-cb",
  },
};

export const openGraph: OpenGraph = {
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
};

export const twitter: Twitter = {
  card: "summary_large_image",
  title: `${siteConfig.name} | Full-Stack Developer`,
  description: siteConfig.description,
  images: [`${siteConfig.url}/og-image.jpg`],
  creator: "@yourtwitterhandle",
};

export const robots: Robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};
