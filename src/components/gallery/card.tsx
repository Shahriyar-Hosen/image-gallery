import { IImage } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { SaveIcon } from "../icons";

const Card: FC<IImage> = (props) => {
  const { name, url, likes, shares } = props || {};

  return (
    <figure className="w-full relative group overflow-hidden rounded-md">
      <Image
        alt={name}
        src={url}
        width={400}
        height={400}
        className="w-full object-cover h-[400px] max-w-md group-hover:scale-105 transition-all duration-200"
      />

      <figcaption className="w-full absolute -bottom-20 left-0 p-3 bg-slate-900/30 text-white flex justify-between items-center gap-1.5 invisible group-hover:bottom-0 group-hover:visible transition-all duration-200">
        <div className="space-y-2">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm">
            {likes} likes | {shares} shares
          </p>
        </div>
        <button>
          <SaveIcon />
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;
