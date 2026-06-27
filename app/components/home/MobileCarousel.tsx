"use client";

import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { row1, row2 } from "./data";
import type { Repository } from "./data";

function RepositoryCardCarousel({ item }: { item: Repository }) {
  const Icon = item.icon;
  return (
    <div className="min-w-[150px] max-w-[150px] h-[120px] flex-shrink-0 bg-card border border-border rounded-2xl p-3 flex flex-col items-center justify-center gap-2">
      <div
        className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}
      >
        <Icon className="w-5 h-5 text-foreground" />
      </div>
      <p className="text-[11px] font-medium text-center text-foreground/80 leading-snug line-clamp-2">
        {item.name}
      </p>
    </div>
  );
}

function CarouselRow({
  items,
  direction,
  align = "start",
}: {
  items: Repository[];
  direction: "forward" | "backward";
  align?: "start" | "center" | "end";
}) {
  const plugin = useRef(
    AutoScroll({
      speed: 1,
      direction,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  );

  const duplicated = [...items, ...items, ...items, ...items, ...items];

  return (
    <Carousel
      opts={{ align, loop: true, dragFree: true, direction: "ltr" }}
      plugins={[plugin.current]}
      className="w-full overflow-hidden"
    >
      <CarouselContent className="ml-0 gap-3">
        {duplicated.map((item, index) => (
          <CarouselItem
            key={`${direction}-${item.id}-${index}`}
            className="pl-0 basis-auto"
          >
            <RepositoryCardCarousel item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function MobileCarousel() {
  return (
    <div className="md:hidden flex flex-col gap-4">
      <CarouselRow items={row1} direction="forward" align="end" />
      <CarouselRow items={row2} direction="backward" />
    </div>
  );
}
