import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Technology",
    "Finance & Investing",
    "Web Hosting & Blogging",
    "Health & Fitness",
    "E-Learning"
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent">
              Affiliate Insights
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden md:flex bg-gradient-hero hover:opacity-90 transition-opacity">
              Subscribe
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="w-full justify-start text-sm font-medium"
              >
                {category}
              </Button>
            ))}
            <Button className="w-full bg-gradient-hero hover:opacity-90 transition-opacity mt-4">
              Subscribe
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
