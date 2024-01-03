import React from "react";
import ProjectItem from "../ProjectItem";

const Projects = () => {
  return (
    <div className="py-2">
      <h1 className="text-center text-4xl text-custom-brown-5 uppercase">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mx-16">
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
