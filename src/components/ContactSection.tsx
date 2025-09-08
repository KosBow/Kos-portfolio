import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;

  if (!form.checkValidity()) {
    const emailEl = form.elements.namedItem("email") as HTMLInputElement | null;
    toast({
      title: "Please use a valid email",
      description: "Example: name@company.com",
      variant: "destructive",
    });
    if (emailEl) {
      emailEl.reportValidity();
      emailEl.focus();
    }
    return;
  }

  setIsSubmitting(true);
  setTimeout(() => {
    toast({ title: "Message sent!", description: "Thanks! I’ll get back to you shortly." });
    setIsSubmitting(false);
    form.reset();
  }, 1200);
};

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let’s <span className="text-primary">Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m <span className="font-medium">Khosrat</span> — a Junior .NET
          Developer in Sweden, passionate about building modern web apps with
          React and .NET Core. Always open to opportunities and collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:Khosrat.Abobakri@hotmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Khosrat.Abobakri@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+46765919069"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Call Khosrat at +46 76 591 90 69"
                  >
                    +46&nbsp;76&nbsp;591&nbsp;90&nbsp;69
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Linköping, Sweden (open to hybrid/remote)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Get in touch</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/khosrat-abobakri/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/kosrat95"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/kosratdiaz/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Anna Svensson"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your email
                </label>
                <input
 type="email"
  id="email"
  name="email"
  required
  pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
  title="Please enter a valid email like name@company.com"
  autoComplete="email"
  inputMode="email"
  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
  placeholder="name@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hi Khosrat, we’d like to invite you for an interview…"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
                <Send size={16} />
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Prefer a quick call or LinkedIn DM? That works too.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
