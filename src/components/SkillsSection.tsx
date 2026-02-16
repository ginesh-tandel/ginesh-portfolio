import { Monitor, Server, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["C#", ".NET Core", "ASP.NET Core", "REST APIs", "Microservices", "Clean Architecture", "JWT"],
  },
  {
    icon: Database,
    title: "Database & Tools",
    skills: ["SQL Server", "Azure", "Docker", "Git", "CI/CD", "Redis", "RabbitMQ"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Technologies and tools I work with on a daily basis
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="items-center text-center">
                <div className="mb-2 rounded-xl bg-primary/10 p-3 text-primary">
                  <cat.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-lg">{cat.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
