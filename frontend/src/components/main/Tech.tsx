import React from "react";
import TechItem from "../TechItem";

const Tech = () => {
  return (
    <div id="targetTech" className="bg-custom-brown-3 mt-6 py-2">
      <h1 className="text-center text-4xl text-custom-brown-5 uppercase">
        Tecnologías
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 md:mx-28 mt-2">
        <TechItem
          name="Javascript"
          imgUrl="/img/temp/logo/JavaScript-logo.png"
          imgAlt="Javascript"
        />
      </div>
    </div>
  );
};

export default Tech;
