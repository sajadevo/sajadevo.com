// @components
import Image from "next/image";

// @utils
import { cn } from "@/lib/utils";

export function RecommendationCard({
  img,
  name,
  role,
  feedback,
  className,
}: {
  img: string;
  name: string;
  role: string;
  feedback: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 max-w-75 sm:max-w-100 mr-6 shrink-0 w-full space-y-6 bg-background border border-secondary",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          src={img}
          alt={name}
          width={512}
          height={512}
          className="size-10"
        />
        <div className="space-y-0.5">
          <p className="text-base font-medium text-black">{name}</p>
          <p className="text-sm text-foreground">{role}</p>
        </div>
      </div>
      <p className="text-foreground text-base">{feedback}</p>
    </div>
  );
}
