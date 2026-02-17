import { useState } from "react";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import emailjs from "@emailjs/browser";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const EMAILJS_SERVICE_ID = "service_8rp4vil";
const EMAILJS_TEMPLATE_ID = "template_dhnvzoc";
const EMAILJS_PUBLIC_KEY = "6wUtCP-uEoQTb6aDV";

export function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: result.data.name,
          from_email: result.data.email,
          message: result.data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div ref={ref} className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Have a project in mind? Let's work together.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Let's Connect
              </h3>
              <p className="mt-2 text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:ginesh.tandel.dotnet@gmail.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5 text-primary" />
                ginesh.tandel.dotnet@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/ginesh-tandel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ginesh-tandel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5 text-primary" />
                GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="mt-1"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="mt-1"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className="mt-1"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
