import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        {/* Main Hero Card */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-10 shadow-soft border border-border">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Insights that help you decide — across Tech, Finance, Hosting, Health & Learning.
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            In-depth reviews, comparison tables, and practical guides. Each article is designed to save you time and money — and help you choose with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a href="#latest">
              <Button className="bg-gradient-to-r from-primary to-[#ffb86b] text-primary-foreground hover:opacity-90 shadow-lg">
                Read latest insights
              </Button>
            </a>
            <a href="#courses">
              <Button variant="outline" className="border-border/20 hover:bg-card/50">
                Browse courses
              </Button>
            </a>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground">5</strong> Categories
            </div>
            <div>•</div>
            <div>
              <strong className="text-foreground">100+</strong> Expert articles
            </div>
            <div>•</div>
            <div>
              <strong className="text-foreground">Courses</strong> on each topic
            </div>
          </div>
        </div>

        {/* Featured Sidebar */}
        <aside className="flex flex-col gap-3">
          <div className="bg-gradient-card rounded-xl p-3 flex gap-3 items-center border border-border shadow-soft hover:shadow-medium transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1526378722916-2f3f6a4c2e2a?q=80&w=800&auto=format&fit=crop"
              alt="Featured article"
              className="w-18 h-18 rounded-lg object-cover"
            />
            <div>
              <div className="text-xs text-accent mb-1">Featured</div>
              <div className="font-bold text-sm text-foreground mb-1">
                How to choose a hosting provider in 2025
              </div>
              <div className="text-xs text-muted-foreground">A complete checklist + what to avoid</div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-xl p-3 flex gap-3 items-center border border-border shadow-soft hover:shadow-medium transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1542751371-29b0f74f9713?q=80&w=800&auto=format&fit=crop"
              alt="Course"
              className="w-18 h-18 rounded-lg object-cover"
            />
            <div>
              <div className="text-xs text-accent mb-1">New Course</div>
              <div className="font-bold text-sm text-foreground mb-1">
                Practical SEO for Affiliate Bloggers
              </div>
              <div className="text-xs text-muted-foreground">Learn to rank with technical & content SEO</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
