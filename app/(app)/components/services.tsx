// @components
import Link from "next/link";
import Image from "next/image";
import { Button, ServiceCard } from "@/components";

// @icons
import { Codepen, Figma, PencilRuler } from "lucide-react";

export function Services() {
  return (
    <section className="p-8 sm:p-10 lg:p-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl text-black font-medium mb-10">
          What I do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="border border-secondary flex flex-col justify-center items-center border-dashed rounded-[10px] p-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/avatar.png"
                alt="sajadevo avatar"
                width={256}
                height={256}
                className="size-10 border border-secondary object-cover object-center rounded-full"
              />
              <span className="font-medium text-foreground">+</span>
              <div className="size-10 rounded-full border text-xs bg-background font-medium text-primary border-secondary grid place-items-center">
                You
              </div>
            </div>
            <p className="text-foreground max-w-40 text-base mx-auto my-4">
              Currently accepting projects for Q1 2025
            </p>
            <Link
              href="https://cal.com/sajadevo/talk-with-sajad"
              target="_blank"
            >
              <Button className="h-9 px-3 text-sm rounded-lg">
                Book a call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
