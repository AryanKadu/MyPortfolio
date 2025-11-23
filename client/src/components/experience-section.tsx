import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@shared/schema";
import { Briefcase, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-semibold text-foreground">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and contributions to the community
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                data-testid={`card-experience-${exp.id}`}
              >
                <div className="md:w-1/2" />

                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <Card className="p-6 md:p-8 hover-elevate transition-all duration-300 border-l-4 border-l-primary shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 md:hidden">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-md">
                          <Briefcase className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-5">
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-base font-medium text-muted-foreground mt-2">
                            {exp.company}
                          </p>
                          <Badge variant="outline" className="mt-2">
                            {exp.duration}
                          </Badge>
                        </div>

                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                              data-testid={`text-achievement-${exp.id}-${achIndex}`}
                            >
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
