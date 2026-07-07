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

  const categories = ["all", "web", "design" , "arduino"];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden animate-section bg-neutral">
      <div className="absolute inset-x-0 top-0 pointer-events-none h-1/3 bg-gradient-to-b from-blue-500/15 via-blue-400/5 to-transparent -z-10" />
      <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/3 bg-gradient-to-t from-blue-500/15 via-blue-400/5 to-transparent -z-10" />
      <div className="container px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl font-heading text-foreground"
            style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 rounded-full bg-gradient-1" />

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

        <div className="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 cursor-pointer bg-card text-card-foreground border-border hover:border-primary group">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs border rounded-full bg-muted text-muted-foreground border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="mb-2 text-2xl font-bold font-heading text-card-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    onClick={() => navigate(`/project/${project.id}`)}
                    variant="ghost"
                    className="justify-between w-full font-normal bg-transparent text-primary hover:bg-accent hover:text-primary group/btn"
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
