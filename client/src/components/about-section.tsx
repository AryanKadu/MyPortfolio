import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@shared/schema";
import { GraduationCap, Award, Code2 } from "lucide-react";

export function AboutSection() {
  const { about, education } = portfolioData;

  const statIcons = {
    "Years of Experience": Code2,
    "Projects Completed": Award,
    CGPA: GraduationCap,
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-semibold text-foreground">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
        </div>

        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl w-full">
            {about.stats.map((stat, index) => {
              const Icon = statIcons[stat.label as keyof typeof statIcons];
              return (
                <Card
                  key={index}
                  className="p-8 text-center hover-elevate transition-all duration-300 border-2 hover:border-primary/50"
                  data-testid={`card-stat-${index}`}
                >
                  <div className="flex flex-col items-center gap-4">
                    {Icon && (
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    )}
                    <div className="text-4xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-base font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover-elevate transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Who I Am
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base whitespace-pre-line">
                {about.bio}
              </p>
            </div>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-300 border-l-4 border-l-primary"
                  data-testid={`card-education-${index}`}
                >
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="text-sm text-muted-foreground">
                        {edu.duration}
                      </span>
                      <Badge variant="secondary" className="font-semibold">
                        {edu.cgpa}
                      </Badge>
                    </div>
                    {edu.details && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
