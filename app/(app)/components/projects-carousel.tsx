// @components
import { ProjectFrame, ScrollContainer } from "@/components";

// @actions
import { getProjects } from "@/lib/payload";

export async function ProjectsCarousel() {
  const { docs: projects } = await getProjects();

  const filteredProjects = projects.filter(
    ({ status }) => status === "completed"
  );

  return (
    <section className="w-full">
      <ScrollContainer className="flex gap-6 lg:gap-12 relative py-2 px-6 lg:px-12 overflow-x-auto no-scrollbar">
        {filteredProjects.map(
          ({ id, title, description, image, status, path }: any) => (
            <ProjectFrame
              key={id}
              img={`/media/${image?.filename}`}
              path={path}
              title={title}
              status={status}
              description={description}
            />
          )
        )}
      </ScrollContainer>
    </section>
  );
}
