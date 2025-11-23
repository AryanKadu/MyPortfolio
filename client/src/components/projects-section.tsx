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
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/20">
                  {project.title.charAt(0)}
                </div>
                {project.featured && (
                  <Badge
                    className="absolute top-4 right-4 gap-1"
                    data-testid={`badge-featured-${project.id}`}
                  >
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.longDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                      data-testid={`badge-tech-${project.id}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
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
                        GitHub
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
                  {project.demoUrl ? (
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
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      data-testid={`button-demo-${project.id}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Coming Soon
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
