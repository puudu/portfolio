import React from "react";
import Window from "../Window";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="mx-2 md:mx-20 my-6">
        <Window title="New file">
          <div className="m-2">
            <div className="text-2xl flex text-custom-brown-5">
              <h4>Hola, soy</h4>
              <h4 className="bg-custom-brown-5 text-custom-brown-1 ml-2 px-2">
                Luis Donoso
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
            ¡Hola! Soy Luis, un apasionado de la tecnología y la programación.
            Mi viaje comenzó con la creación de videojuegos en Unity como hobby,
            lo que me inspiró a seguir estudiando en la carrera de Analista
            Programador, donde adquirí conocimientos fundamentales en
            programación, diseño web y desarrollo de software. Actualmente, sigo
            profundizando en mis estudios de manera independiente, explorando
            diversas tecnologías relacionadas con el mundo web. Con una sólida
            base académica y una actitud de aprendizaje constante, estoy
            emocionado por aplicar mis habilidades en proyectos desafiantes y
            colaborar en nuevas oportunidades que me permitan seguir creciendo
            en este campo.
          </p>
          <Image
            className="mx-auto 2xl:mx-16"
            src="/img/temp/capy.jpg"
            width={400}
            height={400}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
