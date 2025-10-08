import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    { name: "Tech", slug: "technology" },
    { name: "Finance", slug: "finance-investing" },
    { name: "Web Hosting", slug: "web-hosting-blogging" },
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

        <nav className="hidden md:flex items-center gap-2">
          {categories.map((category) => (
            <Link key={category.slug} to={`/category/${category.slug}`}>
              <Button variant="ghost" className="text-sm text-muted-foreground hover:text-foreground">
                {category.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-card/30 px-3 py-2 rounded-lg border border-border">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search articles, tools..."
              className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground w-44"
            />
          </div>
          <a href="#subscribe">
            <Button className="bg-gradient-to-r from-primary to-[#ffb86b] text-primary-foreground hover:opacity-90 shadow-lg">
              Subscribe
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
