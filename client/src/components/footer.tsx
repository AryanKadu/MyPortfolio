import { portfolioData } from "@shared/schema";
import { Heart } from "lucide-react";

export function Footer() {
  const { hero } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} {hero.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary fill-current" />{" "}
            using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
}
