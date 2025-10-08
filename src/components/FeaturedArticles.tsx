import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedArticles = () => {
  return (
    <section id="latest" className="container mx-auto px-4 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-xl font-bold text-foreground">Latest Articles</h3>
            <a href="#latest" className="text-sm text-muted-foreground hover:text-foreground">
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Card className="bg-card p-4 rounded-xl border border-border hover:shadow-large transition-all">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
                alt="Article"
                className="w-full h-36 object-cover rounded-lg mb-3"
              />
              <div className="inline-block bg-card/30 px-2 py-1 rounded-full text-accent font-semibold text-xs mb-2">
                Guide
              </div>
              <h4 className="font-bold text-foreground mb-2">How to Start a WordPress Blog Today</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Complete walkthrough from domain to first post (affiliate-friendly).
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-card"></div>
                  <span>By Mindlytic</span>
                </div>
                <span>Jul 2025</span>
              </div>
            </Card>

            <Card className="bg-card p-4 rounded-xl border border-border hover:shadow-large transition-all">
              <img
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1400&auto=format&fit=crop"
                alt="Article"
                className="w-full h-36 object-cover rounded-lg mb-3"
              />
              <div className="inline-block bg-card/30 px-2 py-1 rounded-full text-accent font-semibold text-xs mb-2">
                Finance
              </div>
              <h4 className="font-bold text-foreground mb-2">Best Credit Cards for Cashback & Rewards</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Which cards actually help you save — our tested picks for Indian users.
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-card"></div>
                  <span>By D. Das</span>
                </div>
                <span>Jul 2025</span>
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-card p-6 rounded-xl border border-border">
            <h4 className="font-bold text-foreground mb-2">Editor's Picks</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Our team handpicks tools that we trust and use. These picks change monthly — check back often for deals and fresh recommendations.
            </p>
            <div className="flex gap-3">
              <a href="#recommend">
                <Button className="bg-gradient-to-r from-primary to-[#ffb86b] text-primary-foreground hover:opacity-90">
                  Our Picks
                </Button>
              </a>
              <a href="#courses">
                <Button variant="outline" className="border-border/20 hover:bg-card/50">
                  Enroll
                </Button>
              </a>
            </div>
          </Card>
        </div>

        <aside className="space-y-4">
          <Card className="bg-card p-4 rounded-xl border border-border">
            <h4 className="font-bold text-foreground mb-3">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {["hosting", "reviews", "chrome extensions", "budgeting", "home workouts", "courses", "WordPress", "productivity", "investing", "protein"].map(
                (tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="inline-block px-3 py-1.5 rounded-lg bg-card/30 text-muted-foreground hover:text-foreground text-xs transition-colors"
                  >
                    {tag}
                  </a>
                )
              )}
            </div>
          </Card>

          <Card id="subscribe" className="bg-gradient-card p-4 rounded-xl border border-border">
            <h4 className="font-bold text-foreground mb-2">Subscribe to Mindlytic</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Weekly insights — reviews, comparisons and course discounts. No spam.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Add your integration here.");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="you@domain.com"
                required
                className="flex-1 px-3 py-2 rounded-lg border border-border bg-transparent text-foreground placeholder:text-muted-foreground outline-none focus:border-primary text-sm"
              />
              <Button type="submit" className="bg-gradient-to-r from-primary to-[#ffb86b] text-primary-foreground hover:opacity-90">
                Subscribe
              </Button>
            </form>
          </Card>

          <Card className="bg-card p-4 rounded-xl border border-border">
            <h4 className="font-bold text-foreground mb-2">Popular Courses</h4>
            <p className="text-sm text-muted-foreground mb-3">
              SEO for affiliates • Blogging to revenue • Practical finance
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 pl-4 list-disc">
              <li>SEO for Affiliate Bloggers</li>
              <li>Start Blogging (step-by-step)</li>
              <li>Personal Finance for Beginners</li>
            </ul>
          </Card>
        </aside>
      </div>
    </section>
  );
};

export default FeaturedArticles;
