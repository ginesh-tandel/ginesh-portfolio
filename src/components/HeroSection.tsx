import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="animate-fade-up text-lg font-medium text-primary">
          Hey, I'm Ginesh 👋
        </p>
        <h1 className="animate-fade-up-delay-1 mt-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Senior .NET Full Stack Developer
        </h1>
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          10+ years of experience building scalable cloud applications with .NET,
          ASP.NET Core, React, Angular, and SQL Server. Passionate about clean
          architecture and high-performance systems.
        </p>
        <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" />
              View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">
              <Send className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
