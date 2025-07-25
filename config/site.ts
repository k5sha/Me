export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  url: "https://k5sha.xyz",
  name: "Yurii Yevtushenko",
  description:
    "👋 Hey there! I'm Yurii a full-stack developer specializing in modern web technologies",
  buildID: process.env.NEXT_PUBLIC_BUILD_VERSION || "Error",
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
