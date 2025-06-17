import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid min-h-[calc(100vh-48px)] place-items-center md:min-h-[calc(100vh-65px)]">
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-36">
        <Loader className="text-foreground mx-auto size-8 animate-spin" />
      </div>
    </div>
  );
}
