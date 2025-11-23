import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@shared/schema";
import { Code, Server, Database, Wrench } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons = {
    Frontend: Code,
    Backend: Server,
    "Databases & Integration": Database,
    "Tools & Platforms": Wrench,
  };

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-semibold text-foreground">Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, index) => {
            const Icon =
              categoryIcons[category.category as keyof typeof categoryIcons];
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-skill-category-${index}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 hover-elevate"
                        data-testid={`badge-skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
