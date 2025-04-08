// @components
import Link from "next/link";
import { Sajad } from "@/components/sajad";
import { Typography } from "@/components/typography";

// @utils
import { generateMetadata } from "@/lib/utils";

const career = [
  {
    title: "Senior Frontend Engineer",
    company: "Aseel",
    url: "https://aseelapp.com/",
    location: "Virginia, United States",
    date: "Apr 2025 - Present",
  },
  {
    title: "Senior Frontend Engineer",
    company: "Mintra",
    url: "https://www.mintra.ai/",
    location: "Indiana, United States",
    date: "Aug 2022 - Dec 2024 • 2 yrs 5 mos",
  },
  {
    title: "ReactJS Developer",
    company: "Creative Tim",
    url: "https://www.creative-tim.com",
    location: "Bucharest, Romania",
    date: "Jan 2020 - Nov 2024 • 4 yrs 11 mos",
  },
  {
    title: "Web Developer",
    company: "MAK Media",
    url: "https://www.makmedia.tv",
    location: "Kabul, Afghanistan",
    date: "Jan 2019 - Dec 2019 • 1 yrs 0 mos",
  },
];

export const metadata = generateMetadata({
  title: "Sajad ⋅ About Me",
  description:
    "Learn more about me, my career, and my journey as a developer and designer.",
  keywords: [
    "Sajad",
    "Developer",
    "Designer",
    "Bio",
    "Career",
    "Frontend",
    "Engineer",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "Rust",
    "Open-Source",
    "Web Developer",
    "Web Designer",
  ],
});

export default function About() {
  return (
    <div className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-2xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <div className="border-secondary size-32 rounded-full border p-4 sm:size-36 md:size-40">
          <Sajad className="text-primary size-full rounded-full" />
        </div>
        <Typography variant="h2" className="mt-12 mb-4" asChild>
          <h2>Bio</h2>
        </Typography>
        <Typography>
          Hey I&apos;m Sajad, a self-taught frontend engineer and passionate
          creator of intuitive web experiences, crafting stunning web
          experiences and intuitive designs for over seven years, I&apos;m all
          about merging creativity with functionality, one line of code at a
          time.
          <br />
          <br />I discovered my love for coding at the age of 14 and have been
          on an exciting journey ever since, honing my skills and turning ideas
          into digital realities. Based in Kabul, Afghanistan, I&apos;ve had the
          privilege of working with companies across Europe and the United
          States, building sleek websites, captivating user interfaces, and
          thoughtful designs that resonate with global audiences.
          <br />
          <br />
          As a passionate JavaScript, TypeScript, and Rust enthusiast, I thrive
          on the challenge of pushing boundaries in web development. My love for
          open-source drives me to contribute to the global tech community,
          sharing knowledge and creating tools that empower developers
          worldwide.
          <br />
          <br />
          Driven by curiosity and an eye for detail, I continuously refine my
          craft, transforming concepts into seamless, user-friendly solutions
          that leave a lasting impression on every screen.
        </Typography>
        <Typography variant="h2" className="mt-12 mb-4" asChild>
          <h2>Career</h2>
        </Typography>
        <div className="space-y-8">
          {career.map(({ title, company, url, location, date }, key) => (
            <div key={key}>
              <h3 className="mb-1 text-lg font-semibold text-black">{title}</h3>
              <p className="text-foreground text-base text-balance">
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline underline-offset-2"
                >
                  {company}
                </Link>
                &nbsp;&nbsp;•&nbsp;&nbsp;
                {location}
              </p>
              <p className="text-foreground text-base text-balance">{date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
