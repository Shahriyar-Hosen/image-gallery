"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchIcon } from "./icons";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.push(searchData ? `/?search=${searchData}` : "/");
  }, [searchData, router]);

  const open = () => router.push("/?popup=true");

  return (
    <div className="flex justify-between items-center gap-2.5">
      <div className="w-full max-w-xl flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="inline-block w-full py-2 px-4 pr-8 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-500 rounded"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button className="w-8 text-slate-500 -ml-8">
          <SearchIcon />
        </button>
      </div>
      <button
        className="px-8 bg-slate-800 text-white text-base uppercase font-bold py-4 rounded-xl hover:bg-slate-700 active:translate-y-0.5"
        onClick={open}
      >
        Upload
      </button>
    </div>
  );
};

export default Header;
