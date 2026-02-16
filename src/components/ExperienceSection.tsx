import { Briefcase } from "lucide-react";

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
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          A journey of continuous growth and impactful contributions
        </p>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-0 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

                {/* Spacer */}
                <div className="hidden w-1/2 md:block" />

                {/* Card */}
                <div
                  className={`w-full rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 md:w-1/2 ${
                    i % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  }`}
                >
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
