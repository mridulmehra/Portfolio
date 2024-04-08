import React from "react";
import {
  ExternalLink,
  GanttChart,
  GithubIcon,
  Key,
  Link2Icon,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { projectData } from "./project-content";

type ProjectCardProps = projectData;

const ProjectCard = ({
  title,
  header,
  description,
  tags,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="md:max-w-screen-xl md:mx-auto rounded-none bg-transparent border-none shadow-none grid grid-cols-9">
      <div className="w-full h-full bg-red-400 col-span-3">
        {/* <Image /> */}
      </div>

      <div className="col-span-6">
        <CardHeader className="flex">
          <CardTitle className="flex items-center justify-between">
            <div className="flex text-xl md:text-2xl items-center">
              <GanttChart className="mr-2" /> {title}
            </div>

            <div className="flex gap-2">
              <Link
                href={link.github}
                className="hover:text-blue-500 transition-all"
              >
                <GithubIcon className="h-6 w-6 hover:text-green-700" />
              </Link>

              {link.live && (
                <Link
                  href={link.live}
                  className="hover:text-blue-500 transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              )}
            </div>
          </CardTitle>

          <CardDescription className="">{header}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-neutral-500 font-medium md:text-lg">
            {description}
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag, index) => (
              <div
                className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
