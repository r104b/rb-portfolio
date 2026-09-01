/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

type Position = {
  title: string;
  start: string;
  end?: string;
  description?: string;
};

type WorkItem = {
  company: string;
  href: string;
  badges: readonly unknown[];
  location: string;
  logoUrl: string;
  logoClassName?: string;
  title?: string;
  start?: string;
  end?: string;
  description?: string;
  positions?: readonly Position[];
};

function LogoImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none",
        className
      )}
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection({
  items = DATA.work,
  showLocation = true,
}: {
  items?: readonly WorkItem[];
  showLocation?: boolean;
}) {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {items.map((work) => {
        const hasDescription = Boolean(
          work.description ||
            work.positions?.some((position) => position.description)
        );

        return (
          <AccordionItem
            key={work.company}
            value={work.company}
            disabled={!hasDescription}
            className="w-full border-b-0 grid gap-2"
          >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage
                  src={work.logoUrl}
                  alt={work.company}
                  className={work.logoClassName}
                />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    {hasDescription && (
                      <span className="relative inline-flex items-center w-3.5 h-3.5">
                        <ChevronRight
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                            "translate-x-0 opacity-0",
                            "group-hover:translate-x-1 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 rotate-0",
                            "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                          )}
                        />
                      </span>
                    )}
                  </div>
                  {work.positions && showLocation && (
                    <div className="font-sans text-xs text-muted-foreground">
                      {work.location}
                    </div>
                  )}
                  {work.positions ? (
                    <div className="mt-2 grid gap-3">
                      {work.positions.map((position, index) => (
                        <div
                          key={`${position.title}-${position.start}`}
                          className="relative pl-4 font-sans text-sm text-muted-foreground"
                        >
                          {index < work.positions!.length - 1 && (
                            <span
                              className="absolute left-[2.5px] top-2 h-[calc(100%+0.75rem)] w-0.5 bg-foreground/50"
                              aria-hidden
                            />
                          )}
                          <span
                            className="absolute left-0 top-1.5 size-[7px] rounded-full border-2 border-foreground/70 bg-background"
                            aria-hidden
                          />
                          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                            <span>{position.title}</span>
                            <span className="text-xs tabular-nums whitespace-nowrap">
                              {position.start} - {position.end ?? "Present"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="font-sans text-sm text-muted-foreground">
                      {work.title}
                    </div>
                  )}
                  {!work.positions && showLocation && (
                    <div className="font-sans text-xs text-muted-foreground">
                      {work.location}
                    </div>
                  )}
                </div>
              </div>
              {!work.positions && (
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>
                    {work.start} - {work.end ?? "Present"}
                  </span>
                </div>
              )}
            </div>
          </AccordionTrigger>
          {hasDescription && (
            <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
              {work.positions ? (
                <div className="grid gap-3">
                  {work.positions
                    .filter((position) => position.description)
                    .map((position) => (
                      <div key={`${position.title}-description`}>
                        <div className="mb-1 font-medium text-foreground">{position.title}</div>
                        <Markdown>{position.description}</Markdown>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="[&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-2">
                  <Markdown>{work.description}</Markdown>
                </div>
              )}
            </AccordionContent>
          )}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

