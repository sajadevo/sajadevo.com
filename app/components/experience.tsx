// @components
import { ExperienceTimeline } from "@/components";

const EXPERIENCES = [
  {
    img: "/reach.png",
    year: "2024 - Today",
    role: "Senior Frontend Engineer",
    description:
      "Led the development of scalable, high-performance frontend architectures for complex web applications, ensuring a seamless user experience across devices.",
  },
  {
    img: "/mintra.png",
    year: "2022 - 2024",
    role: "Senior Frontend Engineer",
    description:
      "Developed an NFT marketplace with wallet integration for seamless user authentication and transactions. Implemented staking features, enabling users to earn rewards while enhancing platform engagement.",
  },
  {
    img: "/creative-tim.png",
    year: "2020 - 2022",
    role: "Web Developer & Community Manager",
    description:
      "Built responsive websites and managed online communities, fostering engagement and enhancing user experiences across digital platforms.",
  },
];

export function Experience() {
  return (
    <section className="relative max-w-7xl py-20 mx-auto bg-white border-x border-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl text-black font-medium mb-10">
          Work Experience
        </h2>
        <div className="space-y-14">
          {EXPERIENCES.map((experience, key) => (
            <ExperienceTimeline key={key} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
