import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Stay Ahead of the Curve
          </h2>
          
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 50,000+ readers who get our weekly insights on technology, finance, health, and more delivered straight to their inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20 h-12"
            />
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-large whitespace-nowrap h-12">
              Subscribe Now
            </Button>
          </div>

          <p className="text-xs text-primary-foreground/70 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
