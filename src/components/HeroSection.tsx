import { useState, useEffect } from "react";
import { ArrowDown, Download, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function HeroSection() {
  const { displayText, isDone } = useTypingEffect(fullTitle);

  const lines = displayText.split("\n");

  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-20">
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
            <Button size="lg" className="rounded-full px-6" asChild>
              <a href="#contact">
                <Send className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6"
              asChild
            >
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                Browse Projects
              </a>
            </Button>
          </div>
        </div>

        <div className="hidden flex-col items-center justify-center gap-6 md:flex">
          <div className="relative">
            <div className="h-80 w-80 rounded-full border-2 border-primary/20 lg:h-96 lg:w-96" />
            <div className="absolute inset-4 flex items-center justify-center rounded-full bg-muted">
              <User className="h-24 w-24 text-muted-foreground/30" />
            </div>
          </div>
          <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
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
