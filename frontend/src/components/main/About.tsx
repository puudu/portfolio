import React from "react";
import Window from "../Window";
import Link from "next/link";
import Image from "next/image";

export default async function About() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/get-about/`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <>
      <div className="mx-2 md:mx-20 my-6">
        <Window title="New file">
          <div className="m-2">
            <div className="text-2xl flex text-custom-brown-5">
              <h4>Hola, soy</h4>
              <h4 className="bg-custom-brown-5 text-custom-brown-1 ml-2 px-2">
                {data.name}
              </h4>
            </div>
            <h1 className="text-2xl md:text-4xl text-custom-brown-5">
              * Analista Programador
            </h1>
            <h1 className="text-2xl md:text-4xl text-custom-brown-5">
              * Desarrollador Web
            </h1>
            <h1 className="text-2xl md:text-4xl text-custom-brown-5">
              * Desarrollador de Videojuegos
            </h1>
            <div className="flex justify-end">
              <Link
                href="#targetContact"
                className="border-3 border-custom-brown-4 text-custom-brown-4 flex justify-center p-2 text-xl hover:text-custom-brown-1 hover:bg-custom-brown-4 rounded-md"
              >
                <p>{"Contacto >>"}</p>
              </Link>
            </div>
          </div>
        </Window>
      </div>
      <div id="targetAbout" className="mx-2 md:mx-14">
        <h1 className="text-center text-4xl text-custom-brown-5 uppercase">
          Sobre mi
        </h1>
        <div className="xl:flex xl:justify-around">
          <p className="text-justify text-xl md:text-2xl my-auto md:mx-6 2xl:mx-32">
            {data.about_me}
          </p>
          <Image
            className="mx-auto 2xl:mx-16"
            src={process.env.NEXT_PUBLIC_BACKEND_DOMAIN + data.image}
            width={400}
            height={400}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
