// @components
import Link from "next/link";

// @utils
import { cn } from "@/lib/utils";

export function BlogPostCard({
  link,
  title,
  description,
  date,
  category,
  className,
  isLarge,
  ...props
}: {
  link: string;
  title: string;
  description: string;
  date: string;
  category: string;
  className?: string;
  isLarge?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      {...props}
      href={link}
      className={cn(
        "border-secondary hover:bg-secondary/25 relative flex flex-col rounded-2xl border px-6 py-5 transition-all duration-200",
        className,
        {
          "row-span-2": isLarge,
        },
      )}
    >
      <div className="mb-2 font-sans text-lg font-semibold text-balance text-black">
        {title}
      </div>
      <p className="text-foreground mb-6 text-base text-balance">
        {description}
      </p>
      <p className="text-foreground mt-auto text-sm">
        {date}&nbsp;&nbsp;⋅&nbsp;&nbsp;{category}
      </p>
    </Link>
  );
}
