// @utils
import { cn } from "@/lib/utils";

export function FeatureCard({
  title,
  description,
  className,
  ...props
}: {
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "border-secondary hover:bg-secondary/25 relative rounded-2xl border px-6 py-5 transition-all duration-200",
        className,
      )}
    >
      <div className="mb-2 font-sans text-lg font-semibold text-black">
        {title}
      </div>
      <p className="text-foreground text-base text-balance">{description}</p>
    </div>
  );
}
