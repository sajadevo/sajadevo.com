"use client";

// @components
import { ProjectFrame } from "@/components";

export function ProjectsCarousel() {
  return (
    <section>
      <div className="-mx-55 lg:-mx-70 xl:-mx-80 xxl:-mx-96 flex gap-6 lg:gap-12 will-change-scroll relative overflow-x-auto snap-x snap-mandatory py-2 no-scrollbar">
        <div className="snap-center snap-always shrink-0 w-44" />
        <ProjectFrame
          img="/product.png"
          title="Crypto Inc."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultricies, odio eget consectetur."
        />
        <ProjectFrame
          img="/product.png"
          title="Crypto Inc."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultricies, odio eget consectetur."
        />
        <ProjectFrame
          img="/product.png"
          title="Crypto Inc."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultricies, odio eget consectetur."
        />
        <ProjectFrame
          img="/product.png"
          title="Crypto Inc."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultricies, odio eget consectetur."
        />
        <ProjectFrame
          img="/product.png"
          title="Crypto Inc."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultricies, odio eget consectetur."
        />
        <ProjectFrame
          img="/product.png"
          title="Crypto Inc."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultricies, odio eget consectetur."
        />
        <div className="snap-center snap-always shrink-0 w-44" />
      </div>
    </section>
  );
}
