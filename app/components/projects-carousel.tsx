"use client";

// @components
import { ProjectFrame } from "@/components";

export function ProjectsCarousel() {
  return (
    <section className="relative">
      <div className="absolute inset-0 size-full max-w-7xl mx-auto bg-white before:absolute before:z-0 before:h-full before:left-0 before:bg-secondary before:w-px after:absolute after:z-0 after:h-full after:right-0 after:bg-secondary after:w-px" />
      <div className="flex gap-12 will-change-scroll relative overflow-x-auto snap-x snap-mandatory py-2 no-scrollbar">
        <div className="snap-center snap-always shrink-0 w-0" />
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
        <div className="snap-center snap-always shrink-0 w-0" />
      </div>
    </section>
  );
}
