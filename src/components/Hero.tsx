import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Your Guide to Smart
            <br />
            <span className="text-accent-foreground">Digital Decisions</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover expert insights, honest reviews, and actionable advice across technology, finance, health, and learning. Make informed choices that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-large group">
              Explore Categories
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Latest Articles
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Articles</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">50K+</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Readers</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">5</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
