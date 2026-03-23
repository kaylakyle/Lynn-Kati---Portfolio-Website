import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Palette, 
  Users, 
  Lightbulb,
  Coffee,
  Heart
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "bg-gradient-primary",
      skills: [
        { name: "Javascript", level: "Proficient" },
        { name: "Python", level: "Intermediate" },
        { name: "HTML/CSS", level: "Proficient" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "My SQL", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient" }
      ]
    },
    {
  title: "Blockchain & Web3",
  icon: Database,
  color: "bg-gradient-purple",
  skills: [
    { name: "Solidity", level: "Intermediate" },
    { name: "Smart Contracts", level: "Intermediate" },
    { name: "Ethereum / Avalanche", level: "Intermediate" },
    { name: "Web3.js / Ethers.js", level: "Intermediate" },
    { name: "NFT Development", level: "Beginner" }
  ]
},
    {
      title: "Tools & Technologies",
      icon: Database,
      color: "bg-gradient-accent",
      skills: [
        { name: "XAMPP", level: "Proficient" },
        { name: "MySQL Workbench", level: "Intermediate" },
        { name: "VS Code", level: "Proficient" },
        { name: "Git/GitHub", level: "Proficient" },
        { name: "Bootstrap", level: "Intermediate" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Palette,
      color: "bg-gradient-hero",
      skills: [
        { name: "React", level: "Proficient" },
        { name: "Express js", level: "Proficient" },
        { name: "Django", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Prototyping", level: "Beginner" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "bg-gradient-soft",
      skills: [
        { name: "Communication", level: "Strong" },
        { name: "Problem Solving", level: "Strong" },
        { name: "Adaptability", level: "Excellent" },
        { name: "Teamwork", level: "Strong" },
        { name: "Time Management", level: "Good" }
      ]
    }
  ];

  const currentLearning = [
    "Blockchain Development",
    "System Design"
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'excellent':
      case 'proficient':
        return 'bg-primary text-primary-foreground';
      case 'strong':
      case 'intermediate':
        return 'bg-primary-light text-primary-foreground';
      case 'good':
      case 'learning':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-soft opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and the soft skills 
            that make me an effective developer and team member.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                        <Badge 
                          className={`text-xs ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-accent border-0 shadow-elegant animate-fade-in-up">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-accent-foreground">
                    Currently Learning
                  </h3>
                </div>
                <p className="text-accent-foreground/80">
                  Always growing, always improving. Here's what I'm diving into next!
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentLearning.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center gap-2 text-accent-foreground">
                      <Coffee className="w-4 h-4 group-hover:animate-bounce" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 text-accent-foreground/80">
                  <Heart className="w-4 h-4 animate-pulse text-primary" />
                  <span className="text-sm">
                    Passionate about continuous learning and staying current with tech trends
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Goals */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Card className="bg-card border-border shadow-soft max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Career Goals & Aspirations
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm actively seeking internship opportunities where I can apply my skills, 
                learn from experienced developers, and contribute to meaningful projects. 
                My goal is to grow into a well-rounded full-stack developer who can bridge 
                the gap between beautiful design and robust functionality.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Internship Ready</Badge>
                <Badge variant="secondary">Team Player</Badge>
                <Badge variant="secondary">Quick Learner</Badge>
                <Badge variant="secondary">Growth Mindset</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
