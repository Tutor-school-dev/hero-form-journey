import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("registration-form");
    formSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 text-white font-medium animate-scale-in">
              For Ages 6-17
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
            Gitopadesh Global<br />Sloka Competition
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Inspired by the timeless wisdom of the Bhagavad Gita
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {["3-Minute Video", "Exciting Prizes", "Certificates for All"].map((feature) => (
              <div key={feature} className="bg-white/25 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/35 transition-all">
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 group"
            >
              Register Now
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
