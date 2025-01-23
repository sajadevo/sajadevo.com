"use client";

// @components
import Marquee from "react-fast-marquee";
import { RecommendationCard } from "@/components";

export function Recommendations() {
  return (
    <section>
      <div className="px-8 pt-8 sm:px-10 sm:pt-10 lg:px-20 lg:pt-20">
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-6 text-xl font-normal text-black md:text-2xl">
            Recommendations
          </h2>
        </div>
      </div>
      <div className="border-secondary -mx-96 border-x py-2">
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
      </div>
    </section>
  );
}
