import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "HR Management System",
    desc: "A comprehensive platform for managing the complete employee lifecycle including recruitment, onboarding, payroll processing, attendance tracking, and performance reviews.",
    tags: ["ASP.NET Core", "React", "SQL Server", "Azure", "REST API"],
  },
  {
    title: "Financial Planning Platform",
    desc: "Enterprise financial planning tool with budgeting, forecasting, analytics dashboards, and automated reporting for corporate finance teams.",
    tags: [".NET Core", "Angular", "SQL Server", "Docker", "Microservices"],
  },
  {
    title: "Quickscrum SaaS Platform",
    desc: "An Agile project management tool enabling teams to plan sprints, track progress, manage backlogs, and generate velocity reports in real-time.",
    tags: ["C#", "React", "TypeScript", "Azure", "CI/CD", "JWT"],
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="px-6 py-28">
      <div ref={ref} className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Work</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Featured projects showcasing end-to-end development expertise
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <Card
              key={p.title}
              className={`group flex flex-col border-border/60 transition-all duration-700 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <CardDescription className="leading-relaxed">{p.desc}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
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
