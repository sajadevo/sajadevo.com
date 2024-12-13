"use client";

// @components
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function Recommendations() {
  return (
    <section className="relative">
      <div className="absolute inset-0 size-full max-w-7xl mx-auto bg-white before:absolute before:z-0 before:h-full before:left-0 before:bg-secondary before:w-px after:absolute after:z-0 after:h-full after:right-0 after:bg-secondary after:w-px" />
      <div className="max-w-3xl relative z-10 mx-auto pt-20">
        <h2 className="text-2xl text-black font-medium mb-6">
          Recommendations
        </h2>
      </div>
      <Marquee autoFill pauseOnHover>
        {new Array(10).fill(0).map((_, key) => (
          <div
            key={key}
            className="rounded-2xl p-6 max-w-100 mr-6 shrink-0 w-full space-y-6 bg-background border border-secondary"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/user.png"
                alt="user"
                width={512}
                height={512}
                className="size-10"
              />
              <div className="space-y-0.5">
                <p className="text-base font-medium text-black">
                  Alexandru Paduraru {key}
                </p>
                <p className="text-sm text-foreground">CEO at Creative Tim</p>
              </div>
            </div>
            <p className="text-foreground text-base">
              Working with Sajad was a pleasure. Their clear communication and
              well-defined project requirements made collaboration seamless and
              productive. I highly recommend them for their professionalism and
              vision.
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
