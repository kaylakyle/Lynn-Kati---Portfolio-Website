import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Sparkles, Target } from "lucide-react";

const About = () => {
  const interests = [
    "Clean Code", "UI/UX Design", "Problem Solving", "Self-Growth", 
    "Skincare", "Tech Innovation", "Database Design", "Team Collaboration"
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the Lynn behind the code - a passionate developer with a love for creating 
            beautiful, functional solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Personal story */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">My Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a programming student who discovered my passion for technology through 
                  the beauty of creating digital solutions. What started as curiosity has evolved 
                  into a deep love for clean code, elegant design, and solving real-world problems 
                  through technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">What Drives Me</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of beautiful, functional code. Whether it's crafting 
                  a smooth user interface or architecting a robust database, I'm driven by 
                  the desire to create solutions that not only work but inspire.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right: Interests & Goals */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Current Focus</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Right now, I'm diving deep into web development, mastering Java for 
                  backend systems, and exploring the art of database design. Every project 
                  is a new opportunity to learn and grow.
                </p>
                <div className="text-sm text-primary font-medium">
                  Next up: Diving into React! 🚀
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Interests & Passions</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun fact */}
            <div className="bg-gradient-accent rounded-2xl p-6 text-center">
              <p className="text-accent-foreground font-medium">
                💡 Fun Fact: I taught myself JavaScript during my attachment period and 
                absolutely fell in love with the endless possibilities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;