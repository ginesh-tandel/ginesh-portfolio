import { useState, useEffect, useCallback } from "react";
import { ArrowDown, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/proffessional-photo-office.jpg";

const fullTitle = "Senior .NET\nFull Stack\nDeveloper";

function useTypingEffect(text: string, speed = 80) {
  const [charIndex, setCharIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;
    if (charIndex < text.length) {
      const t = setTimeout(() => setCharIndex((i) => i + 1), speed);
      return () => clearTimeout(t);
    }
    setIsDone(true);
  }, [charIndex, isDone, text, speed]);

  return { displayText: text.slice(0, charIndex), isDone };
}

function useParallax(speed = 0.4) {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    setOffset(window.scrollY * speed);
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return offset;
}

export function HeroSection() {
  const { displayText, isDone } = useTypingEffect(fullTitle);
  const parallaxOffset = useParallax(0.35);

  const lines = displayText.split("\n");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-20 overflow-hidden"
    >
      {/* Parallax background elements */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute -top-20 -left-32 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[600px] w-[600px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-accent/10 blur-2xl" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="animate-fade-up text-lg text-muted-foreground">
            Hey, I'm Ginesh Tandel 👋
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl min-h-[3.3em]">
            <span className="text-primary">{lines[0]}</span>
            {lines.length > 1 && <br />}
            <span className="text-foreground">{lines[1] || ""}</span>
            {lines.length > 2 && <br />}
            <span className="text-foreground">{lines[2] || ""}</span>
            {!isDone && (
              <span className="ml-1 inline-block w-[3px] h-[1em] bg-primary animate-[pulse_1s_ease-in-out_infinite] align-middle" />
            )}
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            10+ years of experience building scalable cloud applications with
            .NET, ASP.NET Core, React, Angular, and SQL Server.
          </p>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-6"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Send className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 border-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Browse Projects
            </Button>
          </div>
        </div>

        <div className="hidden flex-col items-center justify-center gap-6 md:flex">
          <div className="relative">
            <div className="h-80 w-80 rounded-full border-2 border-primary/20 lg:h-96 lg:w-96" />
            <div className="absolute inset-4 overflow-hidden rounded-full">
              <img
                src={profilePhoto}
                alt="Ginesh Tandel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-6 border-primary"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
