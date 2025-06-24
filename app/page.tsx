"use client";

import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { Tooltip } from "@heroui/tooltip";

import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiExternalLink,
  FiAward,
  FiCode,
  FiBriefcase,
  FiUserCheck
} from "react-icons/fi";
import { SiMedium } from "react-icons/si";
import { FaAws, FaDocker, FaReact, FaNodeJs } from "react-icons/fa";
import { SiGo, SiNextdotjs, SiPostgresql, SiKubernetes } from "react-icons/si";

import { siteConfig } from "@/config/site";
import { Skills } from "@/components/Skills";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Me Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div className="flex-1 space-y-6">
          <Chip 
            color="success" 
            variant="flat"
            startContent={<FiUserCheck className="text-lg" />}
          >
            Available for work
          </Chip>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm Yurii Yevtushenko
            <span className="text-success-500">.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <FiCode className="text-success-500" />
            Full-stack Developer & DevOps Enthusiast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            I build scalable web applications and robust infrastructure.
            Currently studying IT at Igor Sikorsky Kyiv Polytechnic Institute.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              as={Link}
              color="success"
              endContent={<FiMail size={18} />}
              href="#contact"
              variant="solid"
            >
              Contact Me
            </Button>
            <Button 
              as={Link} 
              href="#projects" 
              variant="bordered"
              endContent={<FiExternalLink size={16} />}
            >
              View Projects
            </Button>
          </div>
        </div>

        <Avatar
          isBordered
          className="w-48 h-48 md:w-64 md:h-64 text-large"
          color="success"
          src="https://avatars.githubusercontent.com/u/65705493?v=4"
        />
      </section>

      {/* Skills Section */}
      <section className="mb-24" id="skills">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <FiAward className="text-success-500" />
          My <span className="text-success-500">Skills</span>
        </h2>
        <Skills />
      </section>

      {/* Projects Section */}
      <section className="mb-24" id="projects">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FiCode className="text-success-500" />
            Featured <span className="text-success-500">Projects</span>
          </h2>
          <div className="flex items-center gap-1 invisible  md:visible">
            <Link 
              color="success" 
              href="/projects" 
              underline="hover"
            >
              View All
            </Link>
            <FiExternalLink size={16} className="text-success-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            description="Event ticketing platform with seat selection and admin panel"
            imageSrc="/projects/ticketo.png"
            link={siteConfig.links.ticketo}
            tags={[
              { name: "Go", icon: <SiGo className="text-blue-500" /> },
              { name: "React", icon: <FaReact className="text-blue-400" /> },
              { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> }
            ]}
            title="Ticketo"
          />

          <ProjectCard
            description="My personal portfolio website"
            imageSrc="/favicon.ico"
            link="/"
            tags={[
              { name: "Next.js", icon: <SiNextdotjs /> },
              { name: "Tailwind", icon: <span className="text-cyan-500">T</span> },
              { name: "HeroUI", icon: <span className="text-success-500">H</span> }
            ]}
            title="Portfolio"
          />

          <ProjectCard
            isComingSoon
            description="New project in development"
            imageSrc="/projects/coming-soon.png"
            link="#"
            tags={[
              { name: "Go", icon: <SiGo className="text-blue-500" /> },
              { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
              { name: "AWS", icon: <FaAws className="text-amber-600" /> }
            ]}
            title="Coming Soon"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-24" id="experience">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <FiBriefcase className="text-success-500" />
          Work <span className="text-success-500">Experience</span>
        </h2>
        <ExperienceTimeline />
      </section>

      {/* Contact Section */}
      <section className="mb-12" id="contact">
        <div className="bg-success-50 dark:bg-success-900/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Let's work together!</h2>
          <p className="text-lg mb-6 max-w-2xl">
            Interested in collaborating or have questions? Feel free to reach out.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              as={Link}
              color="success"
              endContent={<FiMail size={20} />}
              href={`mailto:${siteConfig.links.email}`}
              size="lg"
              variant="solid"
            >
              Email Me
            </Button>

            <div className="flex items-center gap-4">
              <Tooltip content="GitHub">
                <Link isExternal href={siteConfig.links.github}>
                  <FiGithub className="text-gray-700 dark:text-gray-300 hover:text-success-500 text-2xl" />
                </Link>
              </Tooltip>

              <Tooltip content="LinkedIn">
                <Link isExternal href={siteConfig.links.linkedin}>
                  <FiLinkedin className="text-gray-700 dark:text-gray-300 hover:text-success-500 text-2xl" />
                </Link>
              </Tooltip>

              <Tooltip content="Medium">
                <Link isExternal href={siteConfig.links.medium}>
                  <SiMedium className="text-gray-700 dark:text-gray-300 hover:text-success-500 text-2xl" />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}