import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Phone,
  MapPin,
  Send,
  Heart
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully! 💌",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lynnkati18@gmail.com",
      href: "mailto:lynnkati18@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+254 XXX XXX XXX",
      href: "https://wa.me/254XXXXXXXXX"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kaylakyle",
      href: "https://github.com/kaylakyle"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lynn-kati",
      href: "https://linkedin.com/in/lynn-kati"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-soft relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a recruiter, potential collaborator, or just want to chat 
            about tech, I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Send me a message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="What should I call you?"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hi!"
                      rows={5}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Alternative Methods */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Information */}
            <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  Get in touch directly
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{contact.label}</p>
                        <p className="text-sm text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Location & Availability */}
            <Card className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Location & Availability</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>📍 Based in Kenya</p>
                  <p>🕒 Available for internships and part-time opportunities</p>
                  <p>🌍 Open to remote work and collaboration</p>
                  <p>⚡ Quick response time (usually within 24 hours)</p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="bg-gradient-accent rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-accent-foreground animate-pulse" />
                <h3 className="text-lg font-semibold text-accent-foreground">
                  Ready to collaborate?
                </h3>
              </div>
              <p className="text-accent-foreground/80 text-sm mb-4">
                I'm always excited to work on new projects and learn from experienced developers.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 bg-white/20 border-white/30 text-accent-foreground hover:bg-white/30">
                  Download CV
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;