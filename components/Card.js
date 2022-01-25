import React from "react";
import Image from "next/image";

const Card = ({ img, title, body }) => {
  return (
    <div className="bg-white w-full overflow-hidden flex flex-col justify-center items-start">
      <div className="image h-64 w-full max-h-64 block">
        <div className="image relative w-full h-full">
        <Image
          layout="fill"
          src={img}
          objectFit="cover"
          alt="Learn!"
        />
        </div>
      </div>
      <div className="texts text-left">
        <h1 className="p-4 font-space-grotesk text-2xl font-bold">{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
