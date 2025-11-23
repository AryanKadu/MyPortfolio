import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@shared/schema";
import { Github, ExternalLink, Star } from "lucide-react";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-semibold text-foreground">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate transition-all duration-300 group"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-56 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center overflow-hidden group-hover:from-primary/30 group-hover:via-primary/20 transition-all duration-300">
                <div className="text-7xl font-bold text-primary/20 group-hover:text-primary/30 transition-all duration-300 relative z-10">
                  {project.title.charAt(0)}
                </div>
                {project.featured && (
                  <Badge
                    className="absolute top-4 right-4 gap-1 shadow-lg"
                    data-testid={`badge-featured-${project.id}`}
                  >
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8 space-y-5">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs px-3 py-1 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                      data-testid={`badge-tech-${project.id}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  {project.githubUrl ? (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      data-testid={`button-github-${project.id}`}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Private Repo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Private Repo
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      asChild
                      data-testid={`button-demo-${project.id}`}
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
