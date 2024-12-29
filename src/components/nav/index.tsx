import Link from "next/link";
import { Item } from "./item";

export const Navbar = () => (
  <nav className="flex justify-end w-full mb-20 pb-8 border-b-2 border-slate-200 items-end gap-4">
    {/* Logo */}
    <Link
      href="/"
      className="text-5xl px-4 py-2 mr-auto text-slate-700 font-black font-sans uppercase tracking-widest visited:text-slate-700 border-4 border-slate-700 shadow-lg active:translate-y-0.5 transition-all duration-150 rounded"
    >
      Gallery
    </Link>

    {navItems.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </nav>
);

const navItems = [
  { label: "Photo", url: "/?category=photo" },
  { label: "Vector", url: "/?category=vector" },
];
