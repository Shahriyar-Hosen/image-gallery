import { data } from "@/lib/db";
import Card from "./card";

export const Gallery = () => {
  return (
    <div className="pt-10 grid grid-cols-3 gap-6">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
