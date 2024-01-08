import React from "react";
import ProjectItem from "../ProjectItem";

export default async function Projects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/get-projects/`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  if (!data) {
    return (
      <div className="text-center my-3 text-custom-brown-5">Cargando...</div>
    );
  }
  return (
    <div id="targetProjects" className="py-2">
      <h1 className="text-center text-4xl text-custom-brown-5 uppercase">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mx-2 md:mx-16">
        {data.map(
          (project: {
            id: number;
            title: string;
            description: string;
            screenshot: string;
            technologies: string[];
            url_github: string;
            url_deploy: string;
            url_playstore: string;
          }) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              description={project.description}
              screenshotUrl={
                process.env.NEXT_PUBLIC_BACKEND_DOMAIN + project.screenshot
              }
              techs={project.technologies}
              gitHubUrl={project.url_github}
              deployUrl={project.url_deploy}
              playStoreUrl={project.url_playstore}
            />
          )
        )}
      </div>
    </div>
  );
}
