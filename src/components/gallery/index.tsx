"use client";

import { data } from "@/lib/db";
import { IImage, TCategory } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./card";
import { Popup } from "./popup";

export const Gallery = () => {
  const [images, setImages] = useState<IImage[]>([]);

  const params = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");
  const popup = params.get("popup") ? true : false;

  const route = useRouter();
  const close = () => route.push("/");

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        (search
          ? item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          : true) && (category ? item.category === category : true)
    );

    setImages(filtered);
  }, [category, search]);

  const addNewImage = (name: string, category: TCategory, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgId = images.length.toString();

      const newImage = {
        id: imgId,
        name,
        category,
        url: e.target?.result as string,
        likes: 0,
        shares: 0,
      };

      setImages((prv) => [...prv, newImage]);
      close();
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="pt-10 grid grid-cols-3 gap-6 ">
      {popup && <Popup close={close} submit={addNewImage} />}
      {images.length > 0 ? (
        images.map((item) => <Card key={item.id} {...item} />)
      ) : (
        <h2 className="text-slate-500 font-bold text-center col-span-3 text-3xl pt-5">
          Data Not Found!
        </h2>
      )}
    </div>
  );
};
