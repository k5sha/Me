import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";

import { ThemeSwitch } from "./ThemeSwitch";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">Yurii Yevtushenko</p>
            <span className="font-medium px-2 text-gray-500 hidden sm:inline">
              Golang backend developer
            </span>
          </NextLink>
        </NavbarBrand>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-4 ml-8">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className="hover:text-primary-500 transition-colors"
                color="foreground"
                href={item.href}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
          >
            <IoLogoLinkedin
              className="text-default-500 hover:text-primary-500 transition-colors"
              size={28}
            />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <IoLogoGithub
              className="text-default-500 hover:text-primary-500 transition-colors"
              size={26}
            />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100 hover:bg-primary-50"
            href={siteConfig.links.sponsor}
            startContent={<GoHeartFill className="text-danger" size={22} />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                className="w-full hover:text-primary-500"
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="mt-4">
            <Button
              isExternal
              as={Link}
              className="w-full"
              href={siteConfig.links.sponsor}
              startContent={<GoHeartFill className="text-danger" size={22} />}
              variant="flat"
            >
              Sponsor
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
