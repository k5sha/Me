"use client";

import { Progress } from "@heroui/progress";

const skills = [
  { name: "Go", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "React/Next.js", level: 80 },
  { name: "Docker/Kubernetes", level: 75 },
  { name: "AWS/GCP", level: 70 },
  { name: "PostgreSQL", level: 85 },
];

export const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-gray-500">{skill.level}%</span>
          </div>
          <Progress
            aria-label={`${skill.name} proficiency is ${skill.level}%`}
            className="max-w-full"
            color="success"
            size="sm"
            value={skill.level}
          />
        </div>
      ))}
    </div>
  );
};
