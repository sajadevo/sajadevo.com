"use client";

// @components
import { ProjectFrame } from "@/components";

export function ProjectsCarousel() {
  return (
    <section className="relative">
      <div className="absolute inset-0 size-full max-w-7xl mx-auto bg-white side-lines" />
      <div className="flex gap-12 relative overflow-x-auto snap-x snap-mandatory py-2 no-scrollbar">
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
      </div>
    </section>
  );
}
