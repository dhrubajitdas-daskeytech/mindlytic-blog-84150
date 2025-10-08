import { Card } from "@/components/ui/card";

const FeaturedArticles = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
      kicker: "Guide",
      title: "How to Start a WordPress Blog Today",
      author: "Mindlytic",
      date: "Jul 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1400&auto=format&fit=crop",
      kicker: "Finance",
      title: "Best Credit Cards for Cashback & Rewards",
      author: "D. Das",
      date: "Jul 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
      kicker: "Analytics",
      title: "Google Analytics 4: Complete Setup Guide",
      author: "Mindlytic",
      date: "Jun 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop",
      kicker: "Tech",
      title: "Best Wireless Earbuds Under $100",
      author: "D. Das",
      date: "Jun 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1400&auto=format&fit=crop",
      kicker: "Productivity",
      title: "Top Project Management Tools for Teams",
      author: "Mindlytic",
      date: "May 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
      kicker: "Marketing",
      title: "Email Marketing Best Practices 2025",
      author: "Mindlytic",
      date: "May 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop",
      kicker: "Fitness",
      title: "Home Gym Equipment Worth Buying",
      author: "D. Das",
      date: "Apr 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
      kicker: "Design",
      title: "Figma vs Adobe XD: Which is Better?",
      author: "Mindlytic",
      date: "Apr 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1400&auto=format&fit=crop",
      kicker: "Learning",
      title: "Best Online Coding Bootcamps 2025",
      author: "Mindlytic",
      date: "Mar 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop",
      kicker: "Business",
      title: "Freelancing Tips for Beginners",
      author: "D. Das",
      date: "Mar 2025"
    }
  ];

  return (
    <section id="latest" className="container mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-6">
        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-xl font-bold text-foreground">Latest Articles</h3>
            <a href="#latest" className="text-sm text-muted-foreground hover:text-foreground">
              View all →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {articles.map((article, index) => (
              <Card key={index} className="bg-card p-3 rounded-lg border border-border hover:shadow-large transition-all group">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-24 object-cover rounded-md mb-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="inline-block bg-card/30 px-2 py-0.5 rounded-full text-accent font-semibold text-[10px] mb-1">
                  {article.kicker}
                </div>
                <h4 className="font-bold text-foreground mb-1 text-xs line-clamp-2">{article.title}</h4>
                <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                  <span className="truncate">{article.author}</span>
                  <span>{article.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <aside>
          <Card className="bg-card p-4 rounded-xl border border-border h-full">
            <h4 className="font-bold text-foreground mb-3 text-sm">Popular Tags</h4>
            <div className="flex flex-col gap-2">
              {["hosting", "reviews", "chrome extensions", "budgeting", "home workouts", "courses", "WordPress", "productivity", "investing", "protein"].map(
                (tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="inline-block px-3 py-1.5 rounded-lg bg-card/30 text-muted-foreground hover:text-foreground text-xs transition-colors text-center"
                  >
                    {tag}
                  </a>
                )
              )}
            </div>
          </Card>
        </aside>
      </div>
    </section>
  );
};

export default FeaturedArticles;
