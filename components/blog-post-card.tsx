import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";

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
        "border-secondary hover:bg-secondary/50 relative flex flex-col rounded-2xl border px-6 py-5 transition-all duration-200",
        className,
        {
          "row-span-2": isLarge,
        },
      )}
    >
      <h2 className="text-primary mb-2 text-base font-medium text-balance sm:text-lg">
        {title}
      </h2>
      <p className="text-foreground mb-6 text-sm text-balance sm:text-base">
        {description}
      </p>
      <p className="text-foreground mt-auto text-sm capitalize">
        {formatDate(date)}&nbsp;&nbsp;⋅&nbsp;&nbsp;{category}
      </p>
    </Link>
  );
}
