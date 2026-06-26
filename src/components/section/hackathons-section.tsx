/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import {
  Activity,
  BrainCircuit,
  Code2,
  Database,
  HeartPulse,
  Leaf,
  Map,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

function TechIcon({ name }: { name: string }) {
  const className = "size-3.5 shrink-0";

  if (name === "React") return <ReactLight className={className} />;
  if (name === "Node.js") return <Nodejs className={className} />;
  if (name === "Python") return <Python className={className} />;
  if (name === "JavaScript") {
    return (
      <img
        src="/Screenshot 2026-06-26 105730.png"
        alt=""
        className={`${className} rounded-[2px] object-cover`}
      />
    );
  }
  if (name === "HTML" || name === "CSS") return <Code2 className={className} />;
  if (name === "Leaflet") return <Map className={className} />;
  if (name === "AI" || name === "Generative AI") return <BrainCircuit className={className} />;
  if (name === "Data Collection" || name === "Live Updates") return <Database className={className} />;
  if (name === "Power Systems") return <Zap className={className} />;
  if (name === "Safety") return <Shield className={className} />;
  if (name === "Biomedical") return <Activity className={className} />;
  if (name === "Healthcare") return <HeartPulse className={className} />;
  return <Sparkles className={className} />;
}

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Hackathons</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Competitions & Hackathons</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Here are some competitions and hackathons I&apos;ve done during university so far.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.hackathons.map((hackathon) => (
            <TimelineItem key={hackathon.title + hackathon.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="size-3 bg-card z-10 shrink-0 overflow-hidden border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-3 bg-card z-10 shrink-0 overflow-hidden border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {hackathon.dates && (
                  <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                )}
                {hackathon.title && (
                  <h3 className="font-semibold leading-none">{hackathon.title}</h3>
                )}
                {"platform" in hackathon && hackathon.platform && (
                  <p className="text-xs font-medium text-muted-foreground">
                    {hackathon.platform}
                  </p>
                )}
                {"placement" in hackathon && hackathon.placement && (
                  <p className="text-sm font-bold text-foreground">
                    {hackathon.placement}
                  </p>
                )}
                {hackathon.location && (
                  <p className="text-sm text-muted-foreground">{hackathon.location}</p>
                )}
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {hackathon.description}
                  </p>
                )}
                {"technologies" in hackathon &&
                  hackathon.technologies &&
                  hackathon.technologies.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {hackathon.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="outline"
                          className="flex h-7 w-fit items-center gap-1.5 rounded-md border-border bg-background px-2.5 text-xs font-medium text-foreground"
                        >
                          <TechIcon name={technology} />
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  )}
                {hackathon.links && hackathon.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {hackathon.links.map((link, idx) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
