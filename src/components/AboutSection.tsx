import { Lightbulb, Layers, Code2, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  { icon: Lightbulb, title: "Problem Solving", desc: "Analytical thinker who breaks complex problems into elegant solutions" },
  { icon: Layers, title: "Architecture Design", desc: "Expert in clean architecture, microservices, and scalable system design" },
  { icon: Code2, title: "Clean Code", desc: "Advocate for maintainable, testable, and well-documented code" },
  { icon: Cloud, title: "Cloud Deployment", desc: "Experienced with Azure, Docker, CI/CD pipelines, and DevOps" },
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          I'm a passionate software engineer with over a decade of experience designing
          and developing scalable web applications, RESTful APIs, and microservice
          architectures. I specialize in .NET Core, React, Angular, and cloud
          technologies, with a strong focus on performance optimization, clean code
          practices, and Agile methodologies.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <Card
              key={s.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
