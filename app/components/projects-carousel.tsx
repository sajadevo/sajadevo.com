"use client";

// @components
import { ProjectFrame } from "@/components";

export function ProjectsCarousel() {
  return (
    <section className="relative">
      <div className="absolute inset-0 size-full max-w-7xl mx-auto bg-white">
        <div className="absolute z-0 top-0 h-full right-0 bg-secondary w-px" />
        <div className="absolute z-0 top-0 h-full left-0 bg-secondary w-px" />
      </div>
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