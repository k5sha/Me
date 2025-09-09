import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-3">
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
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://github.com/k5sha/Me"
        title={`Github Repository for ${siteConfig.name}`}
      >
        <span className="font-medium underline">
          Build {siteConfig.buildID}
        </span>
      </Link>
    </footer>
  );
};
