import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import RedirectButtom from "../RedirectButtom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="targetContact" className="bg-custom-brown-3 mt-6 py-2">
      <h1 className="text-center text-4xl text-custom-brown-5 uppercase">
        Contacto
      </h1>
      <div className="grid grid-cols-1 gap-3 mx-12 sm:mx-24 lg:mx-80 my-2">
        <RedirectButtom title="GitHub" url="" icon={faGithub} className="" />
        <RedirectButtom
          title="LinkedIn"
          url=""
          icon={faLinkedin}
          className=""
        />
        <RedirectButtom title="Email" url="" icon={faEnvelope} className="" />
      </div>
    </div>
  );
};

export default Contact;
