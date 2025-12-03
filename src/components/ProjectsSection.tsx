import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { checkLinkStatus } from "..//utils/checkLink";
const projects = [
  {
    id: 1,
    title: "ZerBarberShop",
    description:
      "A full-stack app built with C# (.NET Core Web API) for the backend and React for the frontend.",
    image: "/projects/ZerBarberShop_Home.png",
    tags: ["C#", "SQLite", "Swagger", "React", "JavaScript", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/KosBow/ZerBarberShop",
  },
  {
    id: 2,
    title: "AeA Barbershop",
    description:
      "A modern React-based website built for a real barbershop in Linköping. Focused on responsive design, accessibility (WCAG 2.1), and a clean, user-friendly interface aligned with the client’s brand identity.",
    image: "/projects/AeABarbershop-HomePage.png",
    tags: [
      "React",
      "CSS",
      "WCAG 2.1",
      "Responsive Design",
      "UI/UX",
      "Client Project",
    ],
    demoUrl: "https://edenstudiobarber.vercel.app/",
    githubUrl: "https://github.com/KosBow/BarberShop-V2",
  },
];

export const ProjectsSection = () => {
  const [statusMap, setStatusMap] = useState<Record<number, boolean>>({});

  useEffect(() => {
    async function runChecks() {
      const results: Record<number, boolean> = {};

      for (const p of projects) {
        const isAlive = await checkLinkStatus(p.demoUrl);

        console.log(
          `%c[Project Link Checker]`,
          "color:#c084fc;font-weight:700",
          p.title,
          isAlive ? "ONLINE ✅" : "OFFLINE ❌"
        );

        results[p.id] = isAlive;
      }

      setStatusMap(results);
    }

    runChecks();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my journey as a .NET developer, focusing on
          full-stack applications with React and .NET Core — always keeping
          performance, accessibility, and user experience in mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isAlive = statusMap[project.id];

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between h-full min-h-[470px]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 flex flex-col justify-start min-h-[110px]">
                    <h3 className="text-xl font-semibold mb-1 text-primary/90 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* ERROR-UI OM LÄNK ÄR DÖD */}
                    {isAlive === false && (
                      <p className="text-red-400 text-xs mt-2">
                        ❌ Deployment offline — update the link.
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {/* DEMO BUTIK */}
                    {isAlive ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-full
                                   text-foreground/80 hover:text-primary hover:bg-primary/10
                                   hover:shadow-[0_0_20px_rgba(139,92,246,0.75)] hover:-translate-y-0.5
                                   transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <div
                        className="inline-flex items-center justify-center p-2 rounded-full
                                   bg-red-500/20 text-red-400 cursor-not-allowed"
                      >
                        <ExternalLink size={20} />
                      </div>
                    )}

                    {/* GITHUB */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-full
                                 text-foreground/80 hover:text-primary hover:bg-primary/10
                                 hover:shadow-[0_0_20px_rgba(139,92,246,0.75)] hover:-translate-y-0.5
                                 transition-all duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/KosBow"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
