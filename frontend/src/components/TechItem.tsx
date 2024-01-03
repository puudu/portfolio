import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  imgUrl: string;
  imgAlt: string;
}

const TechItem = ({ name, imgUrl, imgAlt }: Props) => {
  return (
    <div className="flex justify-center self-center border-3 border-custom-brown-1 text-custom-brown-1 rounded-md p-2">
      <Image className="" src={imgUrl} width={50} height={50} alt={imgAlt} />
      <h3 className="mx-auto text-2xl my-auto">{name}</h3>
    </div>
  );
};

export default TechItem;
