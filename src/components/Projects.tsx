import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Code, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
  {
    title: "Cardano Wallet Connector & ADA Transfer DApp",
    description:
      "A decentralized application (DApp) built with React that connects to Cardano wallets, enabling users to securely send and receive ADA. Implements smart contract functionality for blockchain transactions and provides a Web3 interface for seamless interaction between the frontend and the Cardano network.",
    tech: ["React.js", "JavaScript", "Cardano Blockchain", "Smart Contracts", "Solidity","Crypto"],
    category: "Blockchain / Web3 Application",
    icon: Database,
    highlights: [
      "Wallet connection and authentication",
      "ADA transfer between users",
      "Smart contract integration",
      "Web3.js for blockchain communication",
      "Secure and decentralized transaction workflow"
    ],
    status: "In Progress",
    github: "https://github.com/kaylakyle/web-3.0-blockchain-smart-contracts",
    demo: "https://github.com/kaylakyle/web-3.0-blockchain-smart-contracts"
  },
  {
    title: "Web3.0 Multiplayer Gaming App",
    description: "A multiplayer Web3.0 NFT card game powered by Avalanche. Choose your own characters, select your battleground, and battle other players in real time. With a stunning design, interactive gameplay, smart wallet pairing, live interaction with smart contracts, and, most importantly, the ability to battle other players in real-time, AvaxGods is the only Web3 battle-style online multiplayer card game.",
    tech: ["React", "Smart Contracts", "Node.js", "Wallets", "Tailwind CSS"],
    category: "Web Application",
    icon: "Database",
    highlights: [
      "Real-time Multiplayer Battles",
      "Smart Wallet Integration",
      "Customizable NFT Characters",
      "Interactive Battle Grounds",
      "Live Smart Contract Interaction"
    ],
    status: "In Progress",
    github: "https://github.com/YOUR-USERNAME/project_web3_battle_game",
    demo: "https://YOUR-DEMO-LINK.vercel.app/"   
    },
    {
     title: "Safe-haven-africa",
      description:
        "A privacy-focused mental health web application designed to support survivors of digital harm across Africa through anonymous access to CBT tools, guided breathing, journaling and verified crisis resources.",
      tech: ["TypeScript", "React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
      category: "Web Application",
      icon: Database,
      highlights: ["Anonymous Authentication", "African Crisis Resources", "Privacy-First Design"],
      status: "Completed",
      github: "https://github.com/kaylakyle/safe-haven-africa..",
      demo: "https://safe-haven-africa.vercel.app/"   
    },
    {
      title: "COVID19-Research-Analysis",
      description:
        "Project involves cleaning, analyzing and visualizing COVID-19 research paper metadata from the CORD-19 dataset. Includes Python scripts for data processing and a Streamlit app for interactive exploration of publication trends, journals and paper abstracts.",
      tech: ["Python", "Pandas", "Matplotlib", "Streamlit", "Jupyter Notebook"],
      category: "Web App",
      icon: Database,
      highlights: ["Memory Functions", "Keyboard Support", "Theme Switching"],
      status: "Completed",
      github: "https://github.com/kaylakyle/COVID19-Research-Analysis",
      demo: "https://github.com/kaylakyle/COVID19-Research-Analysis"
    }
  ];

  // Filtering state
  const [filter, setFilter] = useState("All");
  const filteredProjects = projects.filter(project =>
    filter === "All" ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-gradient-soft relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications and practice projects that showcase my growth as a developer and problem-solver.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Web Application", "Web App"].map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? "gradient" : "outline"}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="relative bg-card shadow-soft hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group"
                  style={{
                    border: "1px solid",
                    borderImage: "linear-gradient(to right, #f472b6, #c084fc) 1",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  {/* Floating tag for current project */}
                  {project.status === "Current Project" && (
                    <Badge className="absolute top-4 right-4 bg-pink-500 text-white text-xs">
                      In Progress
                    </Badge>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                            {project.title === "Safe-haven-africa"
                              ? " Safe-haven-africa"
                              : project.title === "Personal Portfolio Website"
                              ? " Personal Portfolio Website"
                              : project.title}
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
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

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
                          <li
                            key={highlightIndex}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <Button asChild variant="soft" size="sm" className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on something exciting?
          </p>
          <Button variant="gradient" size="lg" asChild>
            <a href="https://github.com/kaylakyle" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
