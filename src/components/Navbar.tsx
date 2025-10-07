import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
            <Link to="/">
              <h1 className="text-2xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent cursor-pointer">
                Affiliate Insights
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <Button variant="ghost" className="text-sm font-medium">
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {categories.map((category) => {
                        const categorySlug = category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                        return (
                          <li key={category}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={`/category/${categorySlug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{category}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#about">
                    <Button variant="ghost" className="text-sm font-medium">
                      About Us
                    </Button>
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#contact">
                    <Button variant="ghost" className="text-sm font-medium">
                      Contact Us
                    </Button>
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
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
            <Link to="/" className="block">
              <Button variant="ghost" className="w-full justify-start text-sm font-medium">
                Home
              </Button>
            </Link>
            
            <div className="border-t border-border pt-2 mt-2">
              <p className="px-4 py-2 text-xs font-semibold text-muted-foreground">Categories</p>
              {categories.map((category) => {
                const categorySlug = category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                return (
                  <Link key={category} to={`/category/${categorySlug}`} className="block">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm font-medium pl-8"
                    >
                      {category}
                    </Button>
                  </Link>
                );
              })}
            </div>

            <a href="#about" className="block">
              <Button variant="ghost" className="w-full justify-start text-sm font-medium">
                About Us
              </Button>
            </a>

            <a href="#contact" className="block">
              <Button variant="ghost" className="w-full justify-start text-sm font-medium">
                Contact Us
              </Button>
            </a>

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
