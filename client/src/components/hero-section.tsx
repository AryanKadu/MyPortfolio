import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@shared/schema";

export function HeroSection() {
  const { hero } = portfolioData;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {hero.name}
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
            {hero.role}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {hero.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="text-base"
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            data-testid="button-download-resume"
          >
            <a href={hero.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hover-elevate active-elevate-2 rounded-full p-2"
          data-testid="button-scroll-indicator"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}
