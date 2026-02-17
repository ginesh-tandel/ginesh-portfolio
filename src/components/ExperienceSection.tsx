import { Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const experiences = [
  {
    period: "2020 – Present",
    title: "Freelance Senior .NET Core Developer",
    company: "Self-Employed",
    bullets: [
      "Delivered 15+ enterprise-grade applications for clients across fintech, HR, and SaaS domains",
      "Architected microservices-based solutions handling 100K+ daily transactions",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    period: "2017 – 2020",
    title: "Senior Software Engineer",
    company: "Enterprise Solutions Ltd.",
    bullets: [
      "Led a team of 6 developers building scalable cloud-native applications on Azure",
      "Optimized SQL Server queries improving application performance by 40%",
      "Migrated monolithic application to microservices architecture",
    ],
  },
  {
    period: "2014 – 2017",
    title: "Software Engineer",
    company: "Tech Innovations Inc.",
    bullets: [
      "Developed RESTful APIs serving 50K+ users with 99.9% uptime",
      "Built responsive SPAs using Angular and React with TypeScript",
      "Implemented JWT-based authentication and role-based access control",
    ],
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="px-6 py-28">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Career</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A journey of continuous growth and impactful contributions
        </p>

        <div className="relative mt-14 ml-4">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isVisible ? `${i * 200}ms` : "0ms" }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                <div className="rounded-xl border border-border/60 p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-1 flex items-center gap-2 text-sm font-medium text-primary">
                    <Briefcase className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground">
                        • {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
