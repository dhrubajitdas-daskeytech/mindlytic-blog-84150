import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categoryData = {
  tech: {
    title: "Tech — Tools & Reviews",
    slug: "technology",
    articles: [
      {
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
        kicker: "Tech",
        title: "Top 5 Chrome Extensions That Boost Your Productivity",
        excerpt: "Install these extensions today to reclaim your time and focus. Step-by-step setup included.",
        author: "D. Das",
        readTime: "6 min read",
        date: "Mar 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop",
        kicker: "Gadgets",
        title: "Budget Laptops Worth Buying in 2025",
        excerpt: "Value-focused picks for students, creators, and remote workers — updated with price trends.",
        author: "Mindlytic Team",
        readTime: "8 min read",
        date: "Apr 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
        kicker: "Privacy",
        title: "Set Up a Privacy-Focused Browser in 10 Minutes",
        excerpt: "Quick guide to safer browsing: VPNs, password managers & privacy extensions.",
        author: "Mindlytic",
        readTime: "10 min read",
        date: "Feb 2025"
      }
    ]
  },
  finance: {
    title: "Finance & Investing",
    slug: "finance-investing",
    articles: [
      {
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1400&auto=format&fit=crop",
        kicker: "Finance",
        title: "Best Apps to Track Your Spending in India",
        excerpt: "From automated categorization to smart savings — apps that actually help you save more.",
        author: "D. Das",
        readTime: "7 min read",
        date: "May 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1518241353330-5fa3c6d8d5c1?q=80&w=1400&auto=format&fit=crop",
        kicker: "Investing",
        title: "Mutual Funds vs Stocks: A Simple Guide for Beginners",
        excerpt: "Risk, returns, and what beginners should consider when starting an investment journey.",
        author: "Mindlytic",
        readTime: "12 min read",
        date: "Jan 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1508385082359-f9c6a3c1db6f?q=80&w=1400&auto=format&fit=crop",
        kicker: "Personal Finance",
        title: "How to Build an Emergency Fund (30-day plan)",
        excerpt: "Simple weekly actions to start a fund and stick to it.",
        author: "Mindlytic",
        readTime: "9 min read",
        date: "Nov 2024"
      }
    ]
  },
  hosting: {
    title: "Web Hosting & Blogging",
    slug: "web-hosting-blogging",
    articles: [
      {
        image: "https://images.unsplash.com/photo-1520975913786-5c1b0b1b7f8b?q=80&w=1400&auto=format&fit=crop",
        kicker: "How-to",
        title: "How I Set Up My Blog with Zero Coding",
        excerpt: "Step-by-step WordPress setup, theme picks and plugins for affiliates.",
        author: "Mindlytic",
        readTime: "11 min read",
        date: "Mar 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
        kicker: "Hosting",
        title: "Best Hosting Providers for Beginner Bloggers",
        excerpt: "Speed, uptime and support — which hosts give the best value for affiliates.",
        author: "D. Das",
        readTime: "13 min read",
        date: "Apr 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop",
        kicker: "Plugins",
        title: "Top 10 WordPress Plugins Every Affiliate Needs",
        excerpt: "From link management to analytics — plugins that move the needle.",
        author: "Mindlytic",
        readTime: "15 min read",
        date: "Dec 2024"
      }
    ]
  },
  health: {
    title: "Health & Fitness",
    slug: "health-fitness",
    articles: [
      {
        image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1400&auto=format&fit=crop",
        kicker: "Fitness",
        title: "Best Budget Fitness Trackers Under ₹3,000",
        excerpt: "Compare battery life, accuracy and app features before you buy.",
        author: "Mindlytic",
        readTime: "8 min read",
        date: "May 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1554744512-6a3f3a22b9d9?q=80&w=1400&auto=format&fit=crop",
        kicker: "Wellness",
        title: "Healthy Desk Habits You Can Start Today",
        excerpt: "Small changes to reduce pain and increase focus while you work.",
        author: "Mindlytic",
        readTime: "5 min read",
        date: "Mar 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
        kicker: "Supplements",
        title: "Best Protein Powders for Beginners",
        excerpt: "Ingredients, taste, mixability, and price — our practical picks.",
        author: "Mindlytic",
        readTime: "10 min read",
        date: "Jan 2025"
      }
    ]
  },
  elearning: {
    title: "E-Learning & Courses",
    slug: "e-learning",
    articles: [
      {
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
        kicker: "Courses",
        title: "Top Online Courses to Upgrade Your Career",
        excerpt: "Shortlist of high-value courses on tech, finance and marketing for 2025.",
        author: "Mindlytic",
        readTime: "14 min read",
        date: "Apr 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop",
        kicker: "Skill",
        title: "Free Resources to Learn Data Science",
        excerpt: "Quality free learning paths + paid alternatives that give certificates.",
        author: "Mindlytic",
        readTime: "11 min read",
        date: "Feb 2025"
      },
      {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
        kicker: "Tools",
        title: "Best Laptops for Students Learning from Home",
        excerpt: "Battery, portability, and price — our student-friendly picks.",
        author: "Mindlytic",
        readTime: "9 min read",
        date: "Dec 2024"
      }
    ]
  }
};

const CategorySection = ({ data, id }: { data: any; id: string }) => (
  <section id={id} className="container mx-auto px-4 mb-12">
    <div className="flex justify-between items-end mb-4">
      <h3 className="text-xl font-bold text-foreground">{data.title}</h3>
      <Link to={`/category/${data.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        View all {data.title.split('—')[0]} →
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.articles.map((article: any, index: number) => (
        <Card
          key={index}
          className="bg-card p-4 rounded-xl overflow-hidden border border-border hover:shadow-large transition-all duration-300 hover:-translate-y-1.5 group"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-36 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="inline-block bg-card/30 px-2 py-1 rounded-full text-accent font-semibold text-xs mb-2">
            {article.kicker}
          </div>
          <h4 className="font-bold text-foreground mb-2 text-base">{article.title}</h4>
          <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-card"></div>
              <span>By {article.author}</span>
            </div>
            <span>{article.date}</span>
          </div>
        </Card>
      ))}
    </div>
  </section>
);

const Categories = () => {
  return (
    <>
      <CategorySection data={categoryData.tech} id="tech" />
      <CategorySection data={categoryData.finance} id="finance" />
      <CategorySection data={categoryData.hosting} id="hosting" />
      <CategorySection data={categoryData.health} id="health" />
      <CategorySection data={categoryData.elearning} id="elearning" />
    </>
  );
};

export default Categories;
