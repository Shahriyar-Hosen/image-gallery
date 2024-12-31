"use client";

import { data } from "@/lib/db";
import { useSearchParams } from "next/navigation";
import Card from "./card";

export const Gallery = () => {
  const params = useSearchParams();
  const category = params.get("category");

  const images = data.filter((item) =>
    category ? item.category === category : item
  );

  return (
    <div className="pt-10 grid grid-cols-3 gap-6">
      {images.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
