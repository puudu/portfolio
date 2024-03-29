"use client";
import React from "react";
import Window from "./Window";
import Image from "next/image";
import RedirectButtom from "./RedirectButtom";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  description: string;
  screenshotUrl: string;
  techs: string[];
  gitHubUrl: string | null;
  deployUrl: string | null;
  playStoreUrl: string | null;
}

const ProjectItem = ({
  title,
  description,
  screenshotUrl,
  techs,
  gitHubUrl,
  deployUrl,
  playStoreUrl,
}: Props) => {
  return (
    <Window title={title}>
      <div className="p-2">
        <Image
          src={screenshotUrl}
          width={1000}
          height={0}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-125 rounded-sm"
        />
        <ul className="grid grid-cols-5 gap-2 mt-2">
          {techs.map((tech) => (
            <li
              key={techs.indexOf(tech)}
              className="bg-custom-brown-4 text-custom-brown-1 rounded-md text-center text-lg"
            >
              {tech}
            </li>
          ))}
        </ul>
        <p className="text-lg">{description}</p>
        <div className="flex justify-end mt-12">
          {playStoreUrl != null && (
            <RedirectButtom
              className="ml-2 transition-all duration-200"
              title="Play Store"
              icon={faGooglePlay}
              url={playStoreUrl}
            />
          )}
          {deployUrl != null && (
            <RedirectButtom
              className="ml-2 transition-all duration-200"
              title="Despliegue"
              icon={faGlobe}
              url={deployUrl}
            />
          )}
          {gitHubUrl != null && (
            <RedirectButtom
              className="ml-2 transition-all duration-200"
              title="GitHub"
              icon={faGithub}
              url={gitHubUrl}
            />
          )}
        </div>
      </div>
    </Window>
  );
};

export default ProjectItem;
