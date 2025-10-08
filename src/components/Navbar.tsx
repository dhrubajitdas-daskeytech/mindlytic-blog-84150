import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  
  const categories = [
    { name: "Technology", slug: "technology" },
    { name: "Finance & Investing", slug: "finance-investing" },
    { name: "Web Hosting & Blogging", slug: "web-hosting-blogging" },
    { name: "Health & Fitness", slug: "health-fitness" },
    { name: "E-Learning", slug: "e-learning" }
  ];

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[#ff9a9e] flex items-center justify-center shadow-large">
            <span className="text-2xl font-extrabold text-primary-foreground">M</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground tracking-wide">Mindlytic</h1>
            <p className="text-xs text-muted-foreground">Learn Smarter, Choose Better</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link to="/">
            <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Button>
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
              Categories
              <ChevronDown className="h-3 w-3" />
            </Button>
            
            {showCategories && (
              <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-large py-2 min-w-[220px] z-50">
                {categories.map((category) => (
                  <Link 
                    key={category.slug} 
                    to={`/category/${category.slug}`}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about">
            <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
              About Us
            </Button>
          </Link>

          <Link to="/contact">
            <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
              Contact Us
            </Button>
          </Link>

          <a href="#subscribe">
            <Button className="bg-gradient-to-r from-primary to-[#ffb86b] text-primary-foreground hover:opacity-90 shadow-lg ml-2">
              Subscribe
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
