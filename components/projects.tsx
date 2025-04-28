"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";

export const Projects = () => {
  return (
    <div>
      <h1 className="text-xl font-bold pb-4 text-center">My projects</h1>
      <div className=" grid grid-cols-3 gap-8">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="/projects/ticketo.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Ticketo</p>
              <Link
                className="text-small text-default-500"
                href={"https://" + siteConfig.links.ticketo}
              >
                {siteConfig.links.ticketo}
              </Link>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Ticketo is a simple ticket-selling platform for browsing events,
              selecting seats, and managing tickets with an intuitive admin
              panel.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="/ticketo">
              Read more about here.
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="/projects/portfolio.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Portfolio</p>
              <Link
                className="text-small text-default-500"
                href="/"
              >
                k5sha.run.place
              </Link>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              Check out my portfolio—explore how I build it step by step and the projects I’ve crafted along the way
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="/portfolio">
              Read more about here.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
