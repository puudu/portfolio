import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  title: string;
  url: string;
  icon: IconDefinition;
  className: string;
}

const RedirectButtom = ({ title, url, icon, className }: Props) => {
  return (
    <Link
      href={url}
      className={`hover:shadow-lg hover:-translate-y-1 transition-all duration-100 border-2 border-custom-brown-5 text-custom-brown-5 rounded-md flex justify-center p-1.5 hover:bg-custom-brown-5 hover:text-custom-brown-1 ${className}`}
    >
      <FontAwesomeIcon icon={icon} size="lg" className="mr-1 my-auto" />
      <p className="text-center text-xl">{title}</p>
    </Link>
  );
};

export default RedirectButtom;
