export default function CardWithAnimatedBorder() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="overflow-hidden rounded-2xl">
        <div className="relative max-w-sm rounded-2xl border border-black/10 bg-white before:absolute before:top-1/2 before:left-1/2 before:aspect-square before:w-[200%] before:-translate-1/2 before:animate-spin before:rounded-full before:bg-conic before:from-transparent before:from-70% before:to-black before:content-[''] before:[animation-duration:8s] after:absolute after:top-1/2 after:left-1/2 after:size-full after:-translate-1/2 after:rounded-[calc(16px-1px)] after:bg-white after:content-[''] dark:border-white/10 dark:bg-black dark:before:to-white dark:after:bg-black">
          <div className="relative z-10 px-5 py-4">
            <h2 className="mb-2 text-lg font-medium text-balance text-black dark:text-white">
              Card with Animated Border
            </h2>
            <p className="text-base text-balance text-black/70 dark:text-white/70">
              This card component features an animated border that creates a
              visually engaging effect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
