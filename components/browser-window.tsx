import { cn } from "@/lib/utils";

export function BrowserWindow({
  src,
  url = "http://localhost:3000",
  height = "50vh",
}: {
  src: string;
  url?: string;
  height: string;
}) {
  return (
    <div className="border-secondary overflow-hidden rounded-2xl border">
      <div className="border-secondary flex h-12 items-center gap-4 border-b py-2 pr-2 pl-4">
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 rounded-full bg-[#FF605C]" />
          <div className="size-2.5 rounded-full bg-[#FFBD44]" />
          <div className="size-2.5 rounded-full bg-[#00CA4E]" />
        </div>
        <div className="bg-secondary text-foreground pointer-events-none mx-auto flex h-7 w-full max-w-md items-center justify-center truncate rounded-lg px-3 font-mono text-xs select-none">
          <p className="my-auto inline-block truncate text-center">{url}</p>
        </div>
      </div>
      <iframe src={src} className={cn("h-[50vh] w-full", height)} />
    </div>
  );
}
