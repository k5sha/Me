import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { GithubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Avatar
          isBordered
          className="w-32 h-32 text-large md:m-4"
          color="success"
          src="https://avatars.githubusercontent.com/u/65705493?v=4"
        />
        <div className="md:max-w-2xl">
          <h1 className="text-3xl font-bold py-6">
            Software Engineer, DevOps Enthusiast, IT Student, and Coding Fan
          </h1>
          <p className="md:max-w-xl text-gray-400">
            I’m Yurii Yevtushenko, a Golang backend developer with strong
            front-end skills, currently studying IT at the{" "}
            <Link className="font-bold text-gray-400" href="https://kpi.ua/">
              {" "}
              Igor Sikorsky Kyiv Polytechnic Institute
            </Link>
            .<br />I enjoy building personal projects, developing custom
            infrastructure, and writing articles to help others. My goal is to
            evolve into a full-stack developer or infrastructure architect,
            using my expertise to create comprehensive solutions
          </p>
          <div className="flex flex-row justify-center md:justify-start pt-4 gap-4">
            <div className="flex items-center space-x-4">
              <Link
                isExternal
                aria-label="LinkedIn"
                href={siteConfig.links.medium}
              >
                <MediumIcon
                  className="text-default-500"
                  size={42}
                  viewBox={"0 0 72 72"}
                />
              </Link>
              <Link
                isExternal
                aria-label="LinkedIn"
                href={siteConfig.links.linkedin}
              >
                <LinkedInIcon
                  className="text-default-500"
                  size={24}
                  viewBox={"0 0 16 16"}
                />
              </Link>
              <Link
                isExternal
                aria-label="Github"
                href={siteConfig.links.github}
              >
                <GithubIcon className="text-default-500" size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="left-0 pt-52">
        <Projects />
      </div>
    </section>
  );
}
