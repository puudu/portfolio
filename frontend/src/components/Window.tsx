import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import React, { ReactNode } from "react";
import WindowTopButton from "./WindowTopButton";

type Props = {
  children: ReactNode; // ReactNode permite cualquier contenido React válido
};

const Window = ({ children }: Props) => {
  return (
    <div className="border-3 border-custom-brown-4 rounded-lg">
      <div className="bg-custom-brown-2 rounded-t-lg border-custom-brown-4 border-b-3">
        <div className="py-2 flex justify-end">
          <WindowTopButton icon={faWindowMinimize} />
          <WindowTopButton icon={faSquare} />
          <WindowTopButton icon={faXmark} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Window;
