import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <div className="relative size-6 rounded-sm bg-black dark:bg-white">
        <Image
          className="p-1 invert dark:invert-0"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`}
          fill
          alt="shadcn examples logo"
        />
      </div>
      <span className="hidden font-semibold md:inline">Shadcn Examples</span>
    </div>
  );
}
