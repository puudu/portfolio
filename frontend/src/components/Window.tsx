import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import React, { ReactNode } from "react";
import WindowTopButton from "./WindowTopButton";

type Props = {
  title: string;
  className: string;
  children: ReactNode; // ReactNode permite cualquier contenido React válido
};

const Window = ({ title, className, children }: Props) => {
  return (
    <div className="border-3 border-custom-brown-4 rounded-lg">
      <div className="bg-custom-brown-2 rounded-t-lg border-custom-brown-4 border-b-3">
        <div className="flex justify-between">
          <h1 className="ml-2 my-auto text-2xl">{title}</h1>
          <div className="py-2 flex justify-end">
            <WindowTopButton icon={faWindowMinimize} />
            <WindowTopButton icon={faSquare} />
            <WindowTopButton icon={faXmark} />
          </div>
        </div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Window;
