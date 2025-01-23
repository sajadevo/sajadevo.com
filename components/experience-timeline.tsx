// @components
import Link from "next/link";
import Image from "next/image";

export function ExperienceTimeline({
  date,
  role,
  companyLogo,
  companyWebsite,
  description,
}: {
  date: string;
  role: string;
  companyLogo: string;
  companyWebsite: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Link
          href={companyWebsite}
          target="_blank"
          className="border-secondary grid size-10 shrink-0 place-items-center rounded-full border"
        >
          <Image
            src={companyLogo}
            alt="company logo"
            width={256}
            height={256}
            className="size-5 object-cover object-center"
          />
        </Link>
        <div className="space-y-1">
          <p className="text-foreground text-sm">{date}</p>
          <h3 className="text-lg font-normal text-black">{role}</h3>
        </div>
      </div>
      <p className="text-foreground text-base text-balance sm:pl-16">
        {description}
      </p>
    </div>
  );
}
