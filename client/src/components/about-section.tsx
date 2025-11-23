import { Card } from "@/components/ui/card";
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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {about.stats.map((stat, index) => {
            const Icon = statIcons[stat.label as keyof typeof statIcons];
            return (
              <Card
                key={index}
                className="p-6 text-center hover-elevate transition-transform duration-300"
                data-testid={`card-stat-${index}`}
              >
                <div className="flex flex-col items-center gap-3">
                  {Icon && (
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Who I Am
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              {about.bio}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate"
                  data-testid={`card-education-${index}`}
                >
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {edu.duration}
                      </span>
                      <span className="font-medium text-primary">
                        {edu.cgpa}
                      </span>
                    </div>
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
