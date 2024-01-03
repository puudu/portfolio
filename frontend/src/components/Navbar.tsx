import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-1 sm:flex sm:justify-end my-2">
      <Link
        className="text-custom-brown-5 text-2xl uppercase mx-8 hover:underline text-center"
        href="#targetAbout"
      >
        Sobre mi
      </Link>
      <Link
        className="text-custom-brown-5 text-2xl uppercase mx-8 hover:underline text-center"
        href="#targetTech"
      >
        Tecnologías
      </Link>
      <Link
        className="text-custom-brown-5 text-2xl uppercase mx-8 hover:underline text-center"
        href="#targetProjects"
      >
        Proyectos
      </Link>
      <Link
        className="text-custom-brown-5 text-2xl uppercase mx-8 hover:underline text-center"
        href="#targetContact"
      >
        Contacto
      </Link>
    </nav>
  );
};

export default Navbar;
