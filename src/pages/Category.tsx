import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

// Sample articles data - in a real app, this would come from a database or API
const allArticles = [
  {
    title: "10 Best AI Tools for Content Creators in 2025",
    category: "Technology",
    excerpt: "Discover the most powerful AI tools that are revolutionizing content creation and boosting productivity.",
    readTime: "8 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    slug: "ai-tools-content-creators"
  },
  {
    title: "The Future of Cloud Computing",
    category: "Technology",
    excerpt: "Exploring the latest trends in cloud infrastructure and serverless computing.",
    readTime: "7 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    slug: ""
  },
  {
    title: "Cybersecurity Best Practices for 2025",
    category: "Technology",
    excerpt: "Essential security measures every business should implement.",
    readTime: "10 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    slug: ""
  },
  {
    title: "Machine Learning for Beginners",
    category: "Technology",
    excerpt: "Start your journey into machine learning with this comprehensive guide.",
    readTime: "12 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
    slug: ""
  },
  {
    title: "Web Development Trends to Watch",
    category: "Technology",
    excerpt: "The latest frameworks and tools shaping modern web development.",
    readTime: "9 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    slug: ""
  },
  {
    title: "Smart Investment Strategies for Beginners",
    category: "Finance & Investing",
    excerpt: "Learn proven investment strategies that can help you build wealth steadily and safely.",
    readTime: "12 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    slug: ""
  },
  {
    title: "Passive Income Through Affiliate Marketing",
    category: "Finance & Investing",
    excerpt: "A step-by-step guide to building a sustainable passive income stream.",
    readTime: "15 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
    slug: ""
  },
  {
    title: "Cryptocurrency Investment Guide 2025",
    category: "Finance & Investing",
    excerpt: "Navigate the crypto market with confidence using these proven strategies.",
    readTime: "11 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80",
    slug: ""
  },
  {
    title: "Real Estate Investment Fundamentals",
    category: "Finance & Investing",
    excerpt: "Everything you need to know before investing in real estate.",
    readTime: "14 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    slug: ""
  },
  {
    title: "Stock Market Analysis Tools",
    category: "Finance & Investing",
    excerpt: "The best tools and platforms for analyzing stock market trends.",
    readTime: "8 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    slug: ""
  },
  {
    title: "Complete Guide to WordPress Hosting in 2025",
    category: "Web Hosting & Blogging",
    excerpt: "Everything you need to know about choosing the perfect WordPress hosting provider.",
    readTime: "10 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    slug: ""
  },
  {
    title: "Starting a Successful Blog in 2025",
    category: "Web Hosting & Blogging",
    excerpt: "A comprehensive guide to launching and growing your blog.",
    readTime: "13 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    slug: ""
  },
  {
    title: "SEO Optimization Techniques",
    category: "Web Hosting & Blogging",
    excerpt: "Master the art of SEO to drive organic traffic to your website.",
    readTime: "11 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
    slug: ""
  },
  {
    title: "Content Management Systems Compared",
    category: "Web Hosting & Blogging",
    excerpt: "Find the best CMS for your website or blog.",
    readTime: "9 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    slug: ""
  },
  {
    title: "Monetizing Your Blog Effectively",
    category: "Web Hosting & Blogging",
    excerpt: "Proven strategies to turn your blog into a profitable business.",
    readTime: "12 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    slug: ""
  },
  {
    title: "The Science of Building Sustainable Fitness Habits",
    category: "Health & Fitness",
    excerpt: "Evidence-based strategies to make fitness a permanent part of your lifestyle.",
    readTime: "6 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    slug: ""
  },
  {
    title: "Nutrition Guide for Peak Performance",
    category: "Health & Fitness",
    excerpt: "Optimize your diet for maximum energy and fitness results.",
    readTime: "10 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    slug: ""
  },
  {
    title: "Home Workout Routines That Work",
    category: "Health & Fitness",
    excerpt: "Effective exercises you can do without any gym equipment.",
    readTime: "8 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    slug: ""
  },
  {
    title: "Mental Health and Wellness Tips",
    category: "Health & Fitness",
    excerpt: "Practical strategies for maintaining mental and emotional well-being.",
    readTime: "7 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    slug: ""
  },
  {
    title: "Sleep Optimization for Better Health",
    category: "Health & Fitness",
    excerpt: "Science-backed methods to improve your sleep quality.",
    readTime: "9 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
    slug: ""
  },
  {
    title: "Top Online Courses That Actually Get You Hired",
    category: "E-Learning",
    excerpt: "Discover the most valuable online courses that employers are looking for in 2025.",
    readTime: "9 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    slug: ""
  },
  {
    title: "Best Platforms for Online Learning",
    category: "E-Learning",
    excerpt: "Compare the top e-learning platforms and find the right one for you.",
    readTime: "11 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    slug: ""
  },
  {
    title: "Mastering Remote Learning Success",
    category: "E-Learning",
    excerpt: "Tips and tricks to excel in online courses and stay motivated.",
    readTime: "8 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    slug: ""
  },
  {
    title: "Professional Certifications Worth Pursuing",
    category: "E-Learning",
    excerpt: "Industry-recognized certifications that can boost your career.",
    readTime: "13 min read",
    trending: true,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    slug: ""
  },
  {
    title: "Learning Management Systems Review",
    category: "E-Learning",
    excerpt: "The best LMS platforms for businesses and educational institutions.",
    readTime: "10 min read",
    trending: false,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    slug: ""
  }
];

const categoryDescriptions: Record<string, string> = {
  "technology": "Stay ahead with the latest technology trends, AI innovations, and digital transformation insights.",
  "finance-investing": "Master your finances with expert investment strategies, wealth-building tips, and market insights.",
  "web-hosting-blogging": "Everything you need to launch and grow your online presence successfully.",
  "health-fitness": "Transform your health with science-backed fitness routines, nutrition guides, and wellness tips.",
  "e-learning": "Unlock your potential with the best online courses, platforms, and learning strategies."
};

const categoryNames: Record<string, string> = {
  "technology": "Technology",
  "finance-investing": "Finance & Investing",
  "web-hosting-blogging": "Web Hosting & Blogging",
  "health-fitness": "Health & Fitness",
  "e-learning": "E-Learning"
};

const Category = () => {
  const { category } = useParams();
  
  // Convert URL slug to category name
  const categoryName = categoryNames[category || ""];
  const categoryDescription = categoryDescriptions[category || ""];
  
  // Filter articles by category
  const categoryArticles = allArticles.filter(
    article => article.category === categoryName
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Category Header */}
      <section className="py-16 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1">
              {categoryArticles.length} Articles
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              {categoryName}
            </h1>
            <p className="text-muted-foreground text-lg">
              {categoryDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categoryArticles.map((article, index) => {
              const content = (
                <Card 
                  className="group hover:shadow-large transition-all duration-300 overflow-hidden border-border/50 bg-card animate-scale-in cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {article.trending && (
                      <Badge className="absolute top-2 right-2 bg-accent hover:bg-accent/90 text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </CardContent>
                </Card>
              );

              return article.slug ? (
                <Link to={`/article/${article.slug}`} key={`${article.title}-${index}`}>
                  {content}
                </Link>
              ) : (
                <div key={`${article.title}-${index}`}>
                  {content}
                </div>
              );
            })}
          </div>

          {categoryArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No articles found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Category;