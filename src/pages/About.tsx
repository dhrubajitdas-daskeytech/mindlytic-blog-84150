import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Mindlytic</h1>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Welcome to Mindlytic — your trusted source for insight-driven reviews, guides, and courses across Technology, Finance, Web Hosting, Health & Fitness, and E-Learning.
            </p>
            <p>
              We believe in empowering you with knowledge to make smarter choices. Whether you're looking for the best tech tools, financial advice, hosting solutions, fitness tips, or learning resources, we've got you covered.
            </p>
            <p>
              Our mission is simple: <strong className="text-foreground">Learn Smarter, Choose Better</strong>. Every article is crafted with care to save you time and money while helping you make confident decisions.
            </p>
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Offer</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>In-depth reviews and comparisons of products and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Practical guides and how-to articles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Expert courses to upgrade your skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Updated insights across 5 major categories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
