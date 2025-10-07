import { Card, CardContent } from "@/components/ui/card";
import { Cpu, TrendingUp, Globe, Heart, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import technologyImg from "@/assets/category-technology.jpg";
import financeImg from "@/assets/category-finance.jpg";
import webhostingImg from "@/assets/category-webhosting.jpg";
import healthImg from "@/assets/category-health.jpg";
import elearningImg from "@/assets/category-elearning.jpg";

const categories = [
  {
    title: "Technology",
    slug: "technology",
    description: "Latest gadgets, software reviews, and tech trends",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    articles: 120,
    image: technologyImg
  },
  {
    title: "Finance & Investing",
    slug: "finance-investing",
    description: "Smart investment strategies and financial planning",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    articles: 95,
    image: financeImg
  },
  {
    title: "Web Hosting & Blogging",
    slug: "web-hosting-blogging",
    description: "Build and grow your online presence",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    articles: 78,
    image: webhostingImg
  },
  {
    title: "Health & Fitness",
    slug: "health-fitness",
    description: "Wellness tips, nutrition, and workout guides",
    icon: Heart,
    color: "from-red-500 to-orange-500",
    articles: 110,
    image: healthImg
  },
  {
    title: "E-Learning",
    slug: "e-learning",
    description: "Online courses, skills development, and education",
    icon: GraduationCap,
    color: "from-indigo-500 to-blue-500",
    articles: 87,
    image: elearningImg
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dive deep into expertly curated content across five key areas of digital life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden animate-scale-in relative h-[280px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90 dark:from-background/90 dark:via-background/85 dark:to-background/95" />
              
              {/* Content */}
              <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium">
                    {category.articles} Articles
                  </span>
                  <Link to={`/category/${category.slug}`}>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group-hover:text-primary group-hover:translate-x-1 transition-all"
                    >
                      Explore
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
