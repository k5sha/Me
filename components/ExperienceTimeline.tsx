"use client";

import { Chip } from "@heroui/chip";

const experiences = [
  {
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2022 - Present",
    description: "Built web applications for clients using modern technologies",
    tags: ["React", "Node.js", "MongoDB", "Go", "Microservices", "Postgresql"],
  },
  {
    title: "IT Student",
    company: "Igor Sikorsky KPI",
    period: "2024 - Present",
    description: "Specializing in software engineering and cloud technologies",
    tags: ["Algorithms", "Networking", "Databases"],
  },
];

export const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 h-full w-0.5 bg-primary-200 dark:bg-primary-800" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-12">
            {/* Timeline dot */}
            <div className="absolute left-0 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <div className="flex items-center gap-4">
                <p className="font-medium text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <Chip key={tag} size="sm" variant="flat">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
