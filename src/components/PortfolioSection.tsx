import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export function PortfolioSection() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "design"];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="animate-section py-32 bg-neutral">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight leading-tight"
            style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-1 mx-auto rounded-full mb-12" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={
                  filter === category
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 font-normal"
                    : "bg-transparent text-foreground border-border hover:bg-accent hover:text-accent-foreground font-normal"
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card text-card-foreground border-border hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-card-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    onClick={() => navigate(`/project/${project.id}`)}
                    variant="ghost"
                    className="bg-transparent text-primary hover:bg-accent hover:text-primary font-normal w-full justify-between group/btn"
                  >
                    View Project
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
