// @components
import { ProjectFrame } from "@/components";

// @actions
import { getProjects } from "@/lib/payload";

export async function ProjectsCarousel() {
  const { docs: projects } = await getProjects();

  return (
    <section>
      <div className="-mx-55 lg:-mx-70 xl:-mx-80 xxl:-mx-96 flex gap-6 border-x border-secondary lg:gap-12 will-change-scroll relative overflow-x-auto snap-x snap-mandatory py-2 no-scrollbar">
        <div className="snap-center snap-always shrink-0 w-44" />
        {projects.map(
          ({ id, title, description, image, status, path }: any) => (
            <ProjectFrame
              key={id}
              img={image?.url}
              path={path}
              title={title}
              status={status}
              description={description}
            />
          )
        )}
        <div className="snap-center snap-always shrink-0 w-44" />
      </div>
    </section>
  );
}
