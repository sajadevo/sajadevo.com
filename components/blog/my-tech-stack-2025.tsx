// @icons
import { Deno } from "@/icons/deno";
import { Nextjs } from "@/icons/nextjs";
import { Claude } from "@/icons/claude";
import { Shadcn } from "@/icons/shadcn";
import { Drizzle } from "@/icons/drizzle";
import { Supabase } from "@/icons/supabase";
import { TypeScript } from "@/icons/typescript";
import { Tailwindcss } from "@/icons/tailwindcss";

const stack = [
  {
    name: "Next.js",
    icon: Nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: Tailwindcss,
  },
  {
    name: "Shadcn",
    icon: Shadcn,
  },
  {
    name: "Supabase",
    icon: Supabase,
  },
  {
    name: "TypeScript",
    icon: TypeScript,
  },
  {
    name: "Deno",
    icon: Deno,
  },
  {
    name: "Drizzle",
    icon: Drizzle,
  },
  {
    name: "Claude",
    icon: Claude,
  },
];

export function MyTechStack2025() {
  return (
    <div className="border-secondary divide-secondary grid min-h-70 grid-cols-2 divide-x divide-y overflow-hidden rounded-2xl border sm:min-h-80 sm:grid-cols-4 md:min-h-90">
      {stack.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="group relative grid size-[calc(100%+1px)] place-items-center px-4 py-8 sm:py-4"
        >
          <Icon className="text-primary size-8 rounded transition-all duration-300 group-hover:opacity-0 sm:size-12" />
          <span className="text-primary absolute top-1/2 left-1/2 -translate-1/2 text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
