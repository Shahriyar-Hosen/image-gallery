"use client";

import { data } from "@/lib/db";
import { useSearchParams } from "next/navigation";
import Card from "./card";

export const Gallery = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");

  const images = data.filter(
    (item) =>
      (search
        ? item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        : true) && (category ? item.category === category : true)
  );

  return (
    <div className="pt-10 grid grid-cols-3 gap-6">
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
