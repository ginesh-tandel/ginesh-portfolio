import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ginesh Tandel. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:ginesh.tandel.dotnet@gmail.com" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/gineshtandel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/gineshtandel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
