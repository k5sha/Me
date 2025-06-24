"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  tags: { name: string; icon?: React.ReactNode }[];
  isComingSoon?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  link,
  imageSrc,
  tags,
  isComingSoon = false,
}: ProjectCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="flex gap-3">
        <Image
          alt={`${title} logo`}
          className="object-contain"
          height={40}
          radius="sm"
          src={imageSrc}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">{title}</p>
          <Link
            isExternal
            className="text-small text-gray-500 dark:text-gray-400"
            href={link}
          >
            {link.startsWith("http") ? new URL(link).hostname : link}
          </Link>
        </div>
      </CardHeader>

      <Divider />

      <CardBody>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Chip
              key={tag.name}
              color="success"
              size="sm"
              startContent={tag.icon}
              variant="flat"
            >
              {tag.name}
            </Chip>
          ))}
        </div>
      </CardBody>

      <Divider />

      <CardFooter>
        {isComingSoon ? (
          <p className="text-gray-500 italic">Coming soon</p>
        ) : (
          <Link isExternal showAnchorIcon color="success" href={link}>
            View Project
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};
