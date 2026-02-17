import { useState, useEffect } from "react";
import { ArrowDown, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = ["Senior .NET", "Full Stack", "Developer"];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 1500) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;

    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          if (wordIndex === words.length - 1) {
            setIsDone(true);
            return;
          }
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, isDone, words, typingSpeed, deletingSpeed, pauseTime]);

  return { displayText, wordIndex, isDone };
}

export function HeroSection() {
  const { displayText, wordIndex, isDone } = useTypingEffect(titles);

  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="animate-fade-up text-lg text-muted-foreground">
            Hey, I'm Ginesh 👋
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl min-h-[3.3em]">
            <span className={wordIndex === 0 && !isDone ? "text-primary" : wordIndex > 0 || isDone ? "text-primary" : "text-foreground"}>
              {wordIndex === 0 && !isDone ? displayText : titles[0]}
            </span>
            {(wordIndex > 0 || isDone) && <br />}
            <span className="text-foreground">
              {wordIndex === 1 && !isDone ? displayText : wordIndex > 1 || isDone ? titles[1] : ""}
            </span>
            {(wordIndex > 1 || isDone) && <br />}
            <span className="text-foreground">
              {wordIndex === 2 ? displayText : isDone ? titles[2] : ""}
            </span>
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
            <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                Browse Projects
              </a>
            </Button>
          </div>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <div className="relative">
            <div className="h-80 w-80 rounded-full border-2 border-primary/20 lg:h-96 lg:w-96" />
            <div className="absolute inset-4 flex items-center justify-center rounded-full bg-muted">
              <User className="h-24 w-24 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}