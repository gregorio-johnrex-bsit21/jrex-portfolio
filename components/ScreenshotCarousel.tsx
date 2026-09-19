"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Shot = { src: string; alt: string; portrait?: boolean };

export default function ScreenshotCarousel({ shots }: { shots: Shot[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-lg border border-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shots.map((shot) => (
          <div
            key={shot.src}
            className="relative aspect-video w-full shrink-0 snap-center"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 896px) 800px, 100vw"
              className={
                shot.portrait
                  ? "object-contain py-2"
                  : "object-cover object-top"
              }
            />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            onClick={() => goTo(i)}
            aria-label={`Show screenshot ${i + 1}`}
            className={`h-2 w-2 rounded-full transition ${
              i === active ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}