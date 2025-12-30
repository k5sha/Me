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
  FiUserCheck,
  FiArrowRight,
  FiVideo,
  FiRadio,
  FiBook,
} from "react-icons/fi";
import { SiMedium } from "react-icons/si";
import { FaAws, FaReact } from "react-icons/fa";
import { SiGo, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";
import { Skills } from "@/components/Skills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { MediumArticles } from "@/components/Articles";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Me Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div className="flex-1 space-y-6">
          <Chip
            color="primary"
            startContent={
              <FiUserCheck aria-hidden="true" className="text-lg ps-1" />
            }
            variant="flat"
          >
            Available for work
          </Chip>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I&#39;m Yurii Yevtushenko
            <span className="text-primary-500">.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <FiCode aria-hidden="true" className="text-primary-500" />
            Full-stack Developer & DevOps Enthusiast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            I build scalable web applications and robust infrastructure.
            Currently studying IT at Igor Sikorsky Kyiv Polytechnic Institute.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              aria-label="Contact me via email"
              as={Link}
              color="primary"
              endContent={<FiMail aria-hidden="true" size={18} />}
              href="#contact"
              variant="solid"
            >
              Contact Me
            </Button>
            <Button
              aria-label="View projects section"
              as={Link}
              endContent={<FiExternalLink aria-hidden="true" size={16} />}
              href="#projects"
              variant="bordered"
            >
              View Projects
            </Button>
          </div>
        </div>

        <Avatar
          isBordered
          alt="Yurii Yevtushenko's profile photo"
          className="w-48 h-48 md:w-64 md:h-64 text-large"
          color="primary"
          src="https://avatars.githubusercontent.com/u/65705493?v=4"
        />
      </section>

      {/* Skills Section */}
      <section className="mb-24" id="skills">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <FiAward aria-hidden="true" className="text-primary-500" />
          My{" "}
          <span className="text-primary-500" color="primary">
            Skills
          </span>
        </h2>
        <Skills />
      </section>

      {/* Projects Section */}
      <section className="mb-24" id="projects">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FiCode aria-hidden="true" className="text-primary-500" />
            Featured <span className="text-primary-500">Projects</span>
          </h2>
        </div>

        {/* Project 1 - WebRoom */}
        <div className="mb-32">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 p-2 rounded-lg bg-indigo-500 flex items-center justify-center">
                    <FiRadio className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">WebRoom</h3>
                  <Chip color="success">In progress</Chip>
                </div>
                <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Streamlined Team Collaboration Platform
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Create focused workspaces for your team with one-click
                  simplicity. Designed for productivity without the complexity.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { title: "Real-time Chat", desc: "Instant communication" },
                    {
                      title: "Task Management",
                      desc: "Visual progress tracking",
                    },
                    { title: "Markdown Notes", desc: "Collaborative editing" },
                    { title: "Pomodoro Timer", desc: "Built-in productivity" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div aria-hidden="true" className="text-primary-500 mt-1">
                        <FiArrowRight />
                      </div>
                      <div>
                        <h5 className="font-medium">{item.title}</h5>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    aria-label="View WebRoom live demo"
                    as={Link}
                    color="primary"
                    endContent={<FiVideo aria-hidden="true" size={16} />}
                    href="https://webroom.k5sha.xyz/demo"
                    variant="solid"
                  >
                    Live Demo
                  </Button>
                  <Button
                    aria-label="Visit WebRoom website"
                    as={Link}
                    endContent={<FiExternalLink aria-hidden="true" size={16} />}
                    href="https://webroom.k5sha.xyz/"
                    variant="bordered"
                  >
                    View site
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                <Image
                  alt="WebRoom interface screenshot"
                  className="rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700"
                  src="./projects/webroom.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project: ZipZip */}
        <div className="mb-32">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 p-2 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002-2h14a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">ZipZip</h3>
                  <Chip color="success">Live</Chip>
                </div>
                <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Secure Online Archiver & Extractor
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  A high-performance online tool for managing ZIP, RAR, and 7z
                  archives. Built with WebAssembly for 100% client-side
                  processing, ensuring that no files are ever uploaded to a
                  server.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "Privacy First",
                      desc: "No file uploads to server",
                    },
                    { title: "Format Support", desc: "ZIP, RAR, 7z & more" },
                    { title: "Client-side", desc: "Fast WASM processing" },
                    { title: "Cross-platform", desc: "Mobile & Desktop ready" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div aria-hidden="true" className="text-primary-500 mt-1">
                        <FiArrowRight />
                      </div>
                      <div>
                        <h5 className="font-medium">{item.title}</h5>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Astro", "WebAssembly", "Tailwind CSS", "TypeScript"].map(
                    (tech, index) => (
                      <Chip key={index} variant="flat">
                        {tech}
                      </Chip>
                    )
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    aria-label="View ZipZip live demo"
                    as={Link}
                    color="primary"
                    endContent={<FiVideo aria-hidden="true" size={16} />}
                    href="https://zipzip.online/"
                    variant="solid"
                  >
                    Live Demo
                  </Button>
                  <Button
                    aria-label="Visit ZipZip website"
                    as={Link}
                    endContent={<FiExternalLink aria-hidden="true" size={16} />}
                    href="https://zipzip.online/"
                    variant="bordered"
                  >
                    View site
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                <Image
                  alt="ZipZip online archiver screenshot"
                  className="rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700 object-cover"
                  src="https://www.zipzip.online/og-image.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 - Ticketo */}
        <div className="mb-32">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                    <SiGo aria-hidden="true" className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Ticketo</h3>
                  <Chip color="warning">First project</Chip>
                </div>
                <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Modern Event Ticketing Platform
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Complete solution for event organizers with seat selection,
                  payment processing, and admin dashboard.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { icon: <SiGo className="text-blue-500" />, name: "Go" },
                    {
                      icon: <FaReact className="text-blue-400" />,
                      name: "React",
                    },
                    {
                      icon: <SiPostgresql className="text-blue-600" />,
                      name: "PostgreSQL",
                    },
                    { icon: <FaAws className="text-amber-600" />, name: "AWS" },
                  ].map((tech, index) => (
                    <Chip
                      key={index}
                      aria-label={`Built with ${tech.name}`}
                      startContent={tech.icon}
                      variant="flat"
                    >
                      {tech.name}
                    </Chip>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    aria-label="View Ticketo project"
                    as={Link}
                    color="primary"
                    endContent={<FiExternalLink aria-hidden="true" size={16} />}
                    href={siteConfig.links.ticketo}
                    variant="solid"
                  >
                    View Project
                  </Button>
                  <Button
                    aria-label="View Ticketo source code"
                    as={Link}
                    endContent={<FiGithub aria-hidden="true" size={16} />}
                    href="#"
                    variant="bordered"
                  >
                    Source Code
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                <Image
                  alt="Ticketo interface screenshot"
                  className="rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700"
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 - Noti.u Chrome Extension */}
        <div className="mb-32">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center">
                    <IoIosNotifications aria-hidden="true" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Noti.u</h3>
                  <Chip color="success">Published</Chip>
                </div>
                <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Highlight-Based Reminders Chrome Extension
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Lightweight Chrome extension that lets you save highlighted
                  text on any webpage and receive random reminder notifications
                  about it later.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "Text Highlighting",
                      desc: "Save any selected text",
                    },
                    { title: "Random Reminders", desc: "24-72 hour intervals" },
                    { title: "Visual Markers", desc: "See saved highlights" },
                    {
                      title: "Simple Management",
                      desc: "View/delete reminders",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div aria-hidden="true" className="text-primary-500 mt-1">
                        <FiArrowRight />
                      </div>
                      <div>
                        <h5 className="font-medium">{item.title}</h5>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Chrome API",
                    "Manifest V3",
                    "Notifications",
                    "Zero Dependencies",
                  ].map((tech, index) => (
                    <Chip
                      key={index}
                      aria-label={`Technology: ${tech}`}
                      variant="flat"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    aria-label="View Noti.u on Chrome Web Store"
                    as={Link}
                    color="primary"
                    endContent={<FiExternalLink aria-hidden="true" size={16} />}
                    href={siteConfig.links.noti_u}
                    variant="solid"
                  >
                    Chrome Web Store
                  </Button>
                  <Button
                    aria-label="View Noti.u source code"
                    as={Link}
                    endContent={<FiGithub aria-hidden="true" size={16} />}
                    href="https://github.com/k5sha/Noti.u"
                    variant="bordered"
                  >
                    Source Code
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                <div className="relative w-full max-w-md">
                  {/* Mock browser window */}
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t-lg p-2 flex items-center">
                    <div className="flex space-x-2">
                      {["red", "yellow", "green"].map((color) => (
                        <div
                          key={color}
                          aria-hidden="true"
                          className={`w-3 h-3 rounded-full bg-${color}-500`}
                        />
                      ))}
                    </div>
                    <div className="flex-1 mx-4 bg-white dark:bg-gray-600 rounded px-3 py-1 text-sm truncate">
                      example.com/article
                    </div>
                  </div>
                  {/* Browser content */}
                  <div className="bg-white dark:bg-gray-600 p-6 rounded-b-lg border border-t-0 border-gray-300 dark:border-gray-700">
                    <p className="mb-4">
                      This is some example text on a webpage.{" "}
                      <span className="bg-yellow-200 dark:bg-yellow-800 px-1">
                        This highlighted text would be saved by Noti.u
                      </span>{" "}
                      and you&apos;d get a reminder about it later.
                    </p>
                    <div
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
                    >
                      <svg
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 - Portfolio */}
        <div className="mb-32">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                    <SiNextdotjs
                      aria-hidden="true"
                      className="text-white text-xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Portfolio</h3>
                </div>
                <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Modern Developer Portfolio
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  My personal portfolio showcasing my skills, projects and
                  experience. Built with modern technologies and responsive
                  design.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { icon: <SiNextdotjs />, name: "Next.js" },
                    {
                      icon: <span className="text-cyan-500">T</span>,
                      name: "Tailwind",
                    },
                    {
                      icon: <span className="text-primary-500">H</span>,
                      name: "HeroUI",
                    },
                  ].map((tech, index) => (
                    <Chip
                      key={index}
                      aria-label={`Built with ${tech.name}`}
                      startContent={tech.icon}
                      variant="flat"
                    >
                      {tech.name}
                    </Chip>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    aria-label="View live portfolio"
                    as={Link}
                    color="primary"
                    endContent={<FiExternalLink aria-hidden="true" size={16} />}
                    href="/"
                    variant="solid"
                  >
                    Live Site
                  </Button>
                  <Button
                    aria-label="View portfolio source code"
                    as={Link}
                    endContent={<FiGithub aria-hidden="true" size={16} />}
                    href="https://github.com/k5sha/Me"
                    variant="bordered"
                  >
                    View Code
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
                <Image
                  alt="Portfolio website screenshot"
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="mb-24" id="articles">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <FiBook aria-hidden="true" className="text-primary-500" />
          Recent <span className="text-primary-500">Articles</span>
        </h2>
        <MediumArticles />
      </section>

      {/* Experience Section */}
      <section className="mb-24" id="experience">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <FiBriefcase aria-hidden="true" className="text-primary-500" />
          Work <span className="text-primary-500">Experience</span>
        </h2>
        <ExperienceTimeline />
      </section>

      {/* Contact Section */}
      <section className="mb-12" id="contact">
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Let&#39;s work together!</h2>
          <p className="text-lg mb-6 max-w-2xl">
            Interested in collaborating or have questions? Feel free to reach
            out.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              aria-label="Contact me via email"
              as={Link}
              color="primary"
              endContent={<FiMail aria-hidden="true" size={20} />}
              href={`mailto:${siteConfig.links.email}`}
              size="lg"
              variant="solid"
            >
              Email Me
            </Button>

            <div className="flex items-center gap-4">
              <Tooltip content="GitHub profile">
                <Link
                  isExternal
                  aria-label="GitHub profile (opens in new tab)"
                  href={siteConfig.links.github}
                >
                  <FiGithub
                    aria-hidden="true"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 text-2xl"
                  />
                </Link>
              </Tooltip>

              <Tooltip content="LinkedIn profile">
                <Link
                  isExternal
                  aria-label="LinkedIn profile (opens in new tab)"
                  href={siteConfig.links.linkedin}
                >
                  <FiLinkedin
                    aria-hidden="true"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 text-2xl"
                  />
                </Link>
              </Tooltip>

              <Tooltip content="Medium articles">
                <Link
                  isExternal
                  aria-label="Medium articles (opens in new tab)"
                  href={siteConfig.links.medium}
                >
                  <SiMedium
                    aria-hidden="true"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-500 text-2xl"
                  />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
