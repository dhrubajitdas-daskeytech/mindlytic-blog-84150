import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

const articles = [
  {
    title: "10 Best AI Tools for Content Creators in 2025",
    category: "Technology",
    excerpt: "Discover the most powerful AI tools that are revolutionizing content creation and boosting productivity.",
    readTime: "8 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    title: "Smart Investment Strategies for Beginners",
    category: "Finance & Investing",
    excerpt: "Learn proven investment strategies that can help you build wealth steadily and safely.",
    readTime: "12 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
  },
  {
    title: "Complete Guide to WordPress Hosting in 2025",
    category: "Web Hosting & Blogging",
    excerpt: "Everything you need to know about choosing the perfect WordPress hosting provider.",
    readTime: "10 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "The Science of Building Sustainable Fitness Habits",
    category: "Health & Fitness",
    excerpt: "Evidence-based strategies to make fitness a permanent part of your lifestyle.",
    readTime: "6 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  },
  {
    title: "Top Online Courses That Actually Get You Hired",
    category: "E-Learning",
    excerpt: "Discover the most valuable online courses that employers are looking for in 2025.",
    readTime: "9 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80"
  },
  {
    title: "Passive Income Through Affiliate Marketing",
    category: "Finance & Investing",
    excerpt: "A step-by-step guide to building a sustainable passive income stream.",
    readTime: "15 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
  }
];

const FeaturedArticles = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured Articles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hand-picked content to help you make smarter decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={article.title}
              className="group hover:shadow-large transition-all duration-300 overflow-hidden border-border/50 bg-card animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {article.trending && (
                  <Badge className="absolute top-3 right-3 bg-accent hover:bg-accent/90">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-5">
                <Badge variant="secondary" className="mb-3 text-xs">
                  {article.category}
                </Badge>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {article.readTime}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
