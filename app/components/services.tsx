// @components
import Link from "next/link";
import Image from "next/image";
import { Button, ServiceCard } from "@/components";

// @icons
import { Codepen, Figma, PencilRuler } from "lucide-react";

export function Services() {
  return (
    <section className="p-8 sm:p-10 lg:p-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-10 text-xl font-normal text-black md:text-2xl">
          What I do
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ServiceCard
            icon={Codepen}
            title="Web Development"
            description="Professional web development delivering modern, responsive, and
              user-friendly websites."
          />
          <ServiceCard
            icon={Figma}
            title="Web Design"
            description="Bringing your vision to life with designs that enhance user experience and align with your brand identity."
          />
          <ServiceCard
            icon={PencilRuler}
            title="Product Design"
            description="Delivering functional and visually engaging products that meet business goals and user needs."
          />
          <div className="border-secondary flex flex-col items-center justify-center rounded-[10px] border border-dashed p-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/avatar.png"
                alt="sajadevo avatar"
                width={256}
                height={256}
                className="border-secondary size-10 rounded-full border object-cover object-center"
              />
              <span className="text-foreground font-normal">+</span>
              <div className="bg-background border-secondary grid size-10 place-items-center rounded-full border text-xs font-normal text-black">
                You
              </div>
            </div>
            <p className="text-foreground mx-auto my-4 max-w-40 text-base">
              Currently accepting projects for Q1 2025
            </p>
            <Link
              href="https://cal.com/sajadevo/talk-with-sajad"
              target="_blank"
            >
              <Button className="h-9 rounded-lg px-3 text-sm">
                Book a call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
