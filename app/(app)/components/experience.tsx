// @components
import { ExperienceTimeline } from "@/components";

// @actions
import { getExperiences } from "@/lib/payload";

export async function Experience() {
  const { docs: experiences } = await getExperiences();

  return (
    <section className="p-10 lg:p-20">
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
                companyLogo={companyLogo.url}
                companyWebsite={companyWebsite}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
