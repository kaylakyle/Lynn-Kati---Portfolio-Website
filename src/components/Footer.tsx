import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand & Quote */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-foreground">
              Lynn <span className="text-primary">Kati</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building beautiful, functional solutions one line of code at a time.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:text-center">
            <h4 className="font-semibold text-foreground">Quick Navigation</h4>
            <div className="flex flex-wrap gap-4 md:justify-center">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="space-y-4 md:text-right">
            <h4 className="font-semibold text-foreground">Connect With Me</h4>
            <div className="flex gap-2 md:justify-end">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="w-4 h-4" />
              </Button>
              <Button 
                variant="soft" 
                size="icon" 
                onClick={scrollToTop}
                className="ml-2"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lynn Kati. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Designed & Built with React + TypeScript</span>
            <span>•</span>
            <span>Hosted with ❤️</span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft opacity-30 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;