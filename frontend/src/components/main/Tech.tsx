import React from "react";
import TechItem from "../TechItem";
import { promises as fs } from "fs";

export default async function Tech() {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/get-technologies/`,
  //   {
  //     cache: "no-store",
  //   }
  // );
  // const data = await res.json();
  const file = await fs.readFile(
    process.cwd() + "/src/data/data.json",
    "utf-8"
  );
  const data = JSON.parse(file);

  if (!data) {
    return (
      <div className="text-center my-3 text-custom-brown-5">Cargando...</div>
    );
  }

  return (
    <div id="targetTech" className="bg-custom-brown-3 mt-6 py-2">
      <h1 className="text-center text-4xl text-custom-brown-5 uppercase">
        Tecnologías
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 md:mx-28 mt-2">
        {data.technologies.map(
          (tech: { name: string; image_path: string }, index: number) => (
            <TechItem
              key={index}
              name={tech.name}
              imgUrl={tech.image_path}
              imgAlt={tech.name}
            />
          )
        )}
      </div>
    </div>
  );
}
