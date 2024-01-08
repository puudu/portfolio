import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import RedirectButtom from "../RedirectButtom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default async function Contact() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/get-about/`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div id="targetContact" className="bg-custom-brown-3 mt-6 py-2">
      <h1 className="text-center text-4xl text-custom-brown-5 uppercase">
        Contacto
      </h1>
      <div className="grid grid-cols-1 gap-3 mx-12 sm:mx-24 lg:mx-80 my-2">
        <RedirectButtom
          title="GitHub"
          url={data.url_github}
          icon={faGithub}
          className=""
        />
        <RedirectButtom
          title="LinkedIn"
          url={data.url_linkedin}
          icon={faLinkedin}
          className=""
        />
        <RedirectButtom
          title="Email"
          url={`mailto:${data.email}`}
          icon={faEnvelope}
          className=""
        />
      </div>
    </div>
  );
}
