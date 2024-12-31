import { IImage } from "@/types";
import Image from "next/image";
import { FC, useState } from "react";
import { SavedIcon, SaveIcon } from "../icons";

const Card: FC<IImage> = (props) => {
  const { name, url, likes, shares } = props || {};
  const [totalLike, setTotalLike] = useState(likes);
  const [save, setSave] = useState(false);

  const updateLikes = (isSave: boolean) => {
    setSave(isSave);
    setTotalLike((prv) => (isSave ? prv + 1 : prv - 1));
  };

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
            {totalLike} likes | {shares} shares
          </p>
        </div>
        <button onClick={() => updateLikes(!save)}>
          {save ? <SavedIcon /> : <SaveIcon />}
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;
