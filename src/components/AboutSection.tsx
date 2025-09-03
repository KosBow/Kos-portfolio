import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              Junior .NET developer with a passion for building responsive and
              accessible web applications. Curious, reliable, and always eager
              to learn new technologies.
            </p>

            <p className="text-muted-foreground">
              I enjoy designing clean, modern UIs and learning more about
              accessibility and user experience. My background as a security
              officer taught me responsibility, teamwork, and staying calm under
              pressure — qualities I now bring into development.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Khosrat-Abobakri-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open my CV in a new tab"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Learning React and .NET Core by building real projects with
                    APIs, authentication, and databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI / UX Design</h4>
                  <p className="text-muted-foreground">
                    Enjoying modern layouts and learning more about WCAG and
                    accessibility with each project.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Ownership & Growth</h4>
                  <p className="text-muted-foreground">
                    Taking part in projects from idea to result and improving
                    step by step with feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
