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
        "bg-background border-secondary mr-6 w-full max-w-75 shrink-0 space-y-6 rounded-xl border p-6 sm:max-w-100",
        className,
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
          <p className="text-base font-normal text-black">{name}</p>
          <p className="text-foreground text-sm">{role}</p>
        </div>
      </div>
      <p className="text-foreground text-base">{feedback}</p>
    </div>
  );
}
