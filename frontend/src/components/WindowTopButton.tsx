import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconDefinition;
}

const WindowTopButton = ({ icon }: Props) => {
  return (
    <div className="bg-custom-brown-1 border-3 rounded-md border-custom-brown-4 w-8 h-8 text-custom-brown-4 flex justify-center self-center mr-2 hover:bg-custom-brown-4 hover:text-custom-brown-1">
      <FontAwesomeIcon icon={icon} width={20} />
    </div>
  );
};

export default WindowTopButton;
