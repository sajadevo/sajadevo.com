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
      <div className="flex sm:items-center flex-col sm:flex-row gap-4 sm:gap-6">
        <Link
          href={companyWebsite}
          target="_blank"
          className="size-10 shrink-0 rounded-full border border-secondary grid place-items-center"
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
          <p className="text-sm text-foreground">{date}</p>
          <h3 className="text-lg font-medium text-black">{role}</h3>
        </div>
      </div>
      <p className="text-foreground sm:pl-16 text-base text-balance">
        {description}
      </p>
    </div>
  );
}
