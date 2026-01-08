import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border relative">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Quote */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl font-display font-bold text-foreground">
              Lynn <span className="text-primary">Kati</span>
            </h3>
          
            <div className="flex justify-center md:justify-start items-center gap-2 text-sm text-muted-foreground">
             
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-2">
            <h4 className="font-semibold text-foreground">Quick Navigation</h4>
            <div className="flex gap-3 justify-center flex-wrap">
              {["About", "Projects", "Skills", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="text-center md:text-right space-y-2">
            <h4 className="font-semibold text-foreground">Connect With Me</h4>
            <div className="flex gap-2 justify-center md:justify-end flex-wrap">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-transform" asChild>
                <a href="https://github.com/kaylakyle" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-transform" asChild>
                <a href="https://linkedin.com/in/lynn-kati" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-transform" asChild>
                <a href="mailto:lynnkati18@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="soft" size="icon" onClick={scrollToTop} className="ml-2 hover:scale-110 transition-transform">
                <ArrowUp className="w-4 h-4 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-4 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Lynn Kati. All rights reserved.</p>
        </div>
      </div>

      {/* Optional animated gradient line */}
      <div className="absolute inset-0 bg-gradient-soft opacity-20 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
