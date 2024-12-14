"use client";

// @components
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { RecommendationCard } from "@/components";

export function Recommendations() {
  return (
    <section className="relative">
      <div className="absolute inset-0 size-full max-w-7xl mx-auto bg-white before:absolute before:z-0 before:h-full before:left-0 before:bg-secondary before:w-px after:absolute after:z-0 after:h-full after:right-0 after:bg-secondary after:w-px" />
      <div className="max-w-2xl relative z-10 mx-auto pt-20">
        <h2 className="text-2xl text-black font-medium mb-6">
          Recommendations
        </h2>
      </div>
      <Marquee autoFill pauseOnHover>
        {new Array(10).fill(0).map((_, key) => (
          <RecommendationCard
            key={key}
            img="/user.png"
            name="Alexandru Paduraru"
            role="CEO at Creative Tim"
            feedback="Working with Sajad was a pleasure. Their clear communication and
              well-defined project requirements made collaboration seamless and
              productive. I highly recommend them for their professionalism and
              vision."
          />
        ))}
      </Marquee>
    </section>
  );
}
