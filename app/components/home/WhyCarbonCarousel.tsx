"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

interface Props {
  features: Feature[];
}

export function WhyCarbonCarousel({ features }: Props) {
  return (
    <Carousel
      className="w-full"
      opts={{
        direction: "rtl",
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4 w-full">
        {features.map((feature, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-[85%] sm:basis-[55%] md:basis-[45%] py-6"
          >
            <div className="h-full p-4 bg-card border rounded-2xl flex flex-col gap-3 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
                  <feature.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-snug">
                    {index + 1}. {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
