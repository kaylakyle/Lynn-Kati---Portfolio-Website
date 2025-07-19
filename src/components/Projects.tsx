import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Code, Globe, Calculator } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Grade Management System",
      description: "A comprehensive Java application for managing student records, grades, and academic performance with an intuitive GUI interface.",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
      category: "Desktop Application",
      icon: Database,
      highlights: ["Clean MVC Architecture", "Data Validation", "Report Generation"],
      status: "Completed"
    },
    {
      title: "PHP Login & Authentication System",
      description: "Secure login system with user authentication, session management, and role-based access control using PHP and MySQL.",
      tech: ["PHP", "MySQL", "XAMPP", "Bootstrap", "JavaScript"],
      category: "Web Application",
      icon: Code,
      highlights: ["Password Hashing", "Session Security", "Input Sanitization"],
      status: "Completed"
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio showcasing my projects and skills with modern design principles and smooth animations.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Frontend",
      icon: Globe,
      highlights: ["Mobile-First Design", "CSS Animations", "SEO Optimized"],
      status: "Current Project"
    },
    {
      title: "Interactive Calculator App",
      description: "A beautiful, functional calculator with advanced operations and a clean, user-friendly interface.",
      tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
      category: "Web App",
      icon: Calculator,
      highlights: ["Memory Functions", "Keyboard Support", "Theme Switching"],
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-soft relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications and practice projects that showcase my growth 
            as a developer and problem-solver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                          <Badge 
                            variant={project.status === "Completed" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="soft" 
                      size="sm" 
                      className="flex-1"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on something exciting?
          </p>
          <Button variant="gradient" size="lg">
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;