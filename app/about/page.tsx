import Link from "next/link";
import { generateMetadata, getDateDifference } from "@/lib/utils";

const career = [
  {
    title: "Senior Frontend Engineer",
    company: "Aseel",
    url: "https://aseelapp.com/",
    location: "Virginia, United States",
    date: `Mar 2025 - Present • ${getDateDifference("2025-03-01", new Date())}`,
  },
  {
    title: "Senior Frontend Engineer",
    company: "Mintra",
    url: "https://www.mintra.ai/",
    location: "Indiana, United States",
    date: `Aug 2022 - Feb 2025 • ${getDateDifference("2022-08-01", "2025-02-30")}`,
  },
  {
    title: "Frontend Engineer",
    company: "Creative Tim",
    url: "https://www.creative-tim.com",
    location: "Bucharest, Romania",
    date: `Jan 2019 - Aug 2022 • ${getDateDifference("2019-01-01", "2022-07-30")}`,
  },
  {
    title: "Web Developer",
    company: "MAK Media",
    url: "https://www.makmedia.tv",
    location: "Toronto, Canada",
    date: `Jan 2018 - Dec 2018 • ${getDateDifference("2018-01-01", "2018-12-30")}`,
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
    <div className="space-y-16 pt-16 pb-20 sm:pt-40 sm:pb-24">
      {/* about me */}
      <section className="container">
        <h1 className="text-primary mb-6 text-base font-medium text-balance sm:text-lg">
          Hey, I&apos;m Sajad, a self-taught Frontend Engineer and Designer with
          7+ years of experience crafting intuitive, high-performing and
          user-focused web experiences.
        </h1>
        <p className="text-foreground text-base text-balance sm:text-lg">
          I discovered my love for coding at the age of 14 and have been on an
          exciting journey ever since, honing my skills and turning ideas into
          digital realities. Based in Muscat, Oman, I&apos;ve had the privilege
          of working with companies across Europe and the United States,
          building sleek websites, captivating user interfaces, and thoughtful
          designs that resonate with global audiences.
          <br />
          <br />
          As a passionate JavaScript and TypeScript enthusiast, I thrive on
          pushing boundaries in web development, not just through code, but
          through thoughtful product design. I care deeply about how things work
          and how they feel, combining frontend engineering with a strong eye
          for UX/UI to build web apps that are both beautiful and usable. My
          love for open-source fuels my drive to contribute to the global tech
          community, sharing knowledge, refining tools, and shaping experiences
          that empower developers and users alike.
          <br />
          <br />
          Driven by curiosity and an eye for detail, I continuously refine my
          craft, transforming concepts into seamless, user-friendly solutions
          that leave a lasting impression on every screen.
        </p>
      </section>

      <section className="container">
        <h2 className="text-foreground mb-6 text-sm sm:text-base">
          💼 Work history
        </h2>
        <div className="space-y-8">
          {career.map(({ title, company, url, location, date }, key) => (
            <div key={key} className="flex flex-col gap-1">
              <h2 className="text-primary text-base font-medium text-balance sm:text-lg">
                {title}
              </h2>
              <p className="text-foreground text-base text-balance">{date}</p>
              <p className="text-foreground text-base text-balance">
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  {company}
                </Link>
                &nbsp;&nbsp;•&nbsp;&nbsp;
                {location}
                &nbsp;&nbsp;•&nbsp;&nbsp; Remote
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
