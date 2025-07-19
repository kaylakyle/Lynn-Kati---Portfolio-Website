import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-soft relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-light rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hi there! 👋🏽</p>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Lynn Kati
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
                A programming student passionate about building{" "}
                <span className="text-primary font-medium">clean, useful, beautiful</span>{" "}
                things with code.
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Currently focusing on Web Design, Java, PHP, and Database Management. 
              I love creating structure in chaos and am obsessed with smooth UI and clean code.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="gradient" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="font-semibold"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button 
                variant="soft" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
              <img 
                src={heroImage} 
                alt="Lynn Kati - Developer" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full opacity-80 animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;