import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-8 py-6">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground font-normal"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-16">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Overview
                </h2>
                <p className="text-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-card text-card-foreground rounded-lg text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Project Gallery
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((item, index) => (
                  <img
                    key={index}
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="bg-card text-card-foreground p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-heading font-bold text-card-foreground mb-4">
                Results & Impact
              </h2>
              <p className="text-card-foreground leading-relaxed">
                {project.results}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
