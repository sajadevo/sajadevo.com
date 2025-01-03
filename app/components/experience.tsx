// @components
import { ExperienceTimeline } from "@/components";

const experiences = [
  {
    companyLogo: "/reach.png",
    companyWebsite: "https://www.getreach.xyz/",
    date: "2024 - 2024",
    role: "Senior Frontend Engineer",
    description:
      "Developing a high-performance frontend architecture for Reach web application, ensuring a scalable and flexible codebase, high-quality user interface and seamless user experience across devices.",
  },
  {
    companyLogo: "/mintra.png",
    companyWebsite: "https://www.mintra.ai/",
    date: "2022 - 2024",
    role: "Senior Frontend Engineer",
    description:
      "Led the design and development of scalable, high-performance, feature rich frontend architectures for a NFT marketplace, ensuring the best user interface and user experience for the end users.",
  },
  {
    companyLogo: "/creative-tim.png",
    companyWebsite: "https://www.creative-tim.com/",
    date: "2020 - 2022",
    role: "Web Developer & Community Manager",
    description:
      "Built high quality and responsive templates, ui kits, dashboard, building blocks, open-source component library for react.js and managed developers community.",
  },
];

export function Experience() {
  return (
    <section className="p-8 sm:p-10 lg:p-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl text-black font-medium mb-10">
          My Experiences
        </h2>
        <div className="space-y-14">
          {experiences.map(
            (
              { role, date, description, companyWebsite, companyLogo }: any,
              key
            ) => (
              <ExperienceTimeline
                key={key}
                role={role}
                date={date}
                description={description}
                companyLogo={`/media/${companyLogo?.filename}`}
                companyWebsite={companyWebsite}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
