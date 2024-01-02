import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-end my-2">
      <Link
        className="text-custom-brown-5 text-2xl uppercase mx-8 hover:underline"
        href="#targetHome"
      >
        Inicio
      </Link>
      <Link
        className="text-custom-brown-5 text-2xl uppercase mx-8 hover:underline"
        href="#targetTech"
      >
        Tecnologías
      </Link>
      <Link
        className="text-custom-brown-5 text-2xl uppercase mx-8 hover:underline"
        href="#targetProjects"
      >
        Proyectos
      </Link>
      <Link
        className="text-custom-brown-5 text-2xl uppercase mx-8 hover:underline"
        href="#targetContact"
      >
        Contacto
      </Link>
    </nav>
  );
};

export default Navbar;
