// @components
import Image from "next/image";

export function ExperienceTimeline({
  img,
  year,
  role,
  description,
}: {
  img: string;
  year: string;
  role: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-6">
        <div className="size-10 rounded-full border border-secondary grid place-items-center">
          <Image
            src={img}
            alt="company logo"
            width={256}
            height={256}
            className="size-5"
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm text-foreground">{year}</p>
          <h3 className="text-lg font-medium text-black">{role}</h3>
        </div>
      </div>
      <p className="text-foreground pl-16 text-base text-balance">
        {description}
      </p>
    </div>
  );
}
