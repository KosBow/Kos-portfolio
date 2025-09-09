import { useMemo, useState } from "react";
import { cn } from "../lib/utils";
import { CheckCircle, Sparkles, Users, Shield } from "lucide-react";

const LEVEL = {
  foundation: "Foundation",
  working: "Working",
  confident: "Confident",
  advanced: "Advanced",
} as const;

type LevelKey = typeof LEVEL[keyof typeof LEVEL];

type Skill = {
  name: string;
  level: LevelKey;
  category: "frontend" | "backend" | "tools";
  evidence?: string;
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: LEVEL.confident, category: "frontend", evidence: "Hobby projcts + ZerBarberShop (WCAG, responsive design)" },
  { name: "JavaScript (ES6+)", level: LEVEL.working, category: "frontend", evidence: "React projects, hobby app" },
  { name: "React", level: LEVEL.working, category: "frontend", evidence: "ZerBarberShop (frontend) + hobby projects." },
  { name: "TypeScript", level: LEVEL.working, category: "frontend", evidence: "Smaller components in personal projects" },
  { name: "Accessibility & Responsive Design", level: LEVEL.working, category: "frontend", evidence: "ZerBarberShop, accessibility focus" },

  // Backend
  { name: "C# / .NET Core", level: LEVEL.working, category: "backend", evidence: "API & backend for ZerBarberShop + school/personal projects" },
  { name: "ASP.NET Web API", level: LEVEL.working, category: "backend", evidence: "CRUD, auth patterns in school/personal projects" },
  { name: "Entity Framework / LINQ", level: LEVEL.working, category: "backend", evidence: "Data models + queries (SQLite)" },
  { name: "SQLite / SQL", level: LEVEL.working, category: "backend", evidence: "ZerBarberShop, local development flow" },

  // Cloud & Other backend
  { name: "Azure (Cosmos DB, KeyVault)", level: LEVEL.foundation, category: "backend", evidence: "LIA project – basic implementation" },
  { name: "Python / Flask (LIA)", level: LEVEL.foundation, category: "backend", evidence: "API integrations during internship" },

  // Tools
  { name: "Git/GitHub", level: LEVEL.confident, category: "tools", evidence: "Daily use, branching & PR workflows" },
  { name: "Visual Studio / VS Code", level: LEVEL.advanced, category: "tools", evidence: "Primary IDEs" },
  { name: "Agile / Scrum", level: LEVEL.working, category: "tools", evidence: "Used in group projects and final thesis + intership" },
];

const categories = ["all", "frontend", "backend", "tools"] as const;
type Category = typeof categories[number];

const levelColor: Record<LevelKey, string> = {
  Foundation: "border-amber-500/40 text-amber-400",
  Working: "border-blue-500/40 text-blue-400",
  Confident: "border-emerald-500/40 text-emerald-400",
  Advanced: "border-purple-500/40 text-purple-400",
};

const Pill = ({
  children,
  className,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) => (
  <span className={cn(
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs border border-border/70 bg-background/40 backdrop-blur",
    className
  )}>
    {icon}
    {children}
  </span>
);

const LevelChip = ({ value }: { value: LevelKey }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs border",
      levelColor[value]
    )}
  >
    <CheckCircle className="w-3 h-3 mr-1" />
    {value}
  </span>
);

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [showEvidence, setShowEvidence] = useState(false);

  const filteredSkills = useMemo(
    () => skills.filter((s) => activeCategory === "all" || s.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          .NET developer who learns fast, cares about accessibility, and enjoys clean, reliable code.
        </p>

        {/* Personality / values */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Pill icon={<Sparkles className="w-3.5 h-3.5" />}>Curious learner</Pill>
          <Pill icon={<Users className="w-3.5 h-3.5" />}>Team-oriented</Pill>
          <Pill icon={<Shield className="w-3.5 h-3.5" />}>Reliable & calm</Pill>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setShowEvidence((v) => !v)}
            className={cn(
              "px-4 py-2 rounded-full border border-border/70 bg-background/50 text-sm",
              showEvidence && "bg-primary/10"
            )}
            aria-pressed={showEvidence}
          >
            {showEvidence ? "Hide evidence" : "Show evidence"}
          </button>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card/80 p-6 rounded-2xl shadow-xs border border-border transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <LevelChip value={skill.level} />
              </div>

              {showEvidence && skill.evidence && (
                <p className="text-sm text-muted-foreground mt-1">
                  Used in: {skill.evidence}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Gentle nudge */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Guided starts, real ownership: I customize, refactor and make it mine.
        </p>
      </div>
    </section>
  );
};
