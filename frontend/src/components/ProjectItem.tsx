"use client";
import React from "react";
import Window from "./Window";
import Image from "next/image";
import RedirectButtom from "./RedirectButtom";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = () => {
  return (
    <Window title="Project 1">
      <div className="p-2">
        <Image
          src="/img/temp/project_screenshot.png"
          width={1000}
          height={0}
          alt=""
          className="object-cover transition-transform duration-500 group-hover:scale-125 rounded-sm"
        />
        <ul className="grid grid-cols-5 gap-2 mt-2">
          <li className="bg-custom-brown-4 text-custom-brown-1 rounded-md text-center text-lg">
            Java
          </li>
          <li className="bg-custom-brown-4 text-custom-brown-1 rounded-md text-center text-lg">
            C#
          </li>
          <li className="bg-custom-brown-4 text-custom-brown-1 rounded-md text-center text-lg">
            Javascript
          </li>
          <li className="bg-custom-brown-4 text-custom-brown-1 rounded-md text-center text-lg">
            React
          </li>
        </ul>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          eligendi quae expedita voluptates aliquam natus hic odit odio aut.
          Ipsam quam sint, maiores soluta quo voluptates corporis ab iusto
          quibusdam!
        </p>
        <div className="flex justify-end mt-12">
          <RedirectButtom
            className="ml-2 transition-all duration-200"
            title="Play Store"
            icon={faGooglePlay}
            url="https://github.com/puudu/python-listado-trabajadores"
          />
          <RedirectButtom
            className="ml-2 transition-all duration-200"
            title="Despliegue"
            icon={faGlobe}
            url="https://github.com/puudu/python-listado-trabajadores"
          />
          <RedirectButtom
            className="ml-2 transition-all duration-200"
            title="Github"
            icon={faGithub}
            url="https://github.com/puudu/python-listado-trabajadores"
          />
        </div>
      </div>
    </Window>
  );
};

export default ProjectItem;
