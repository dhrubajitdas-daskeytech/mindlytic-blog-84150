import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/ads/AdBanner";
import SidebarAd from "@/components/ads/SidebarAd";
import InContentAd from "@/components/ads/InContentAd";
import AffiliateProductBox from "@/components/ads/AffiliateProductBox";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, User, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const Article = () => {
  const aiTools = [
    {
      name: "ChatGPT Plus",
      description: "The most powerful AI writing assistant for content creators",
      price: "$20/mo",
      rating: 5,
      features: [
        "Advanced GPT-4 access",
        "Priority responses during peak times",
        "Access to newest features first"
      ]
    },
    {
      name: "Jasper AI",
      description: "AI copywriting tool specifically designed for marketers",
      price: "$39/mo",
      rating: 5,
      features: [
        "50+ content templates",
        "SEO optimization tools",
        "Brand voice customization"
      ]
    },
    {
      name: "Midjourney",
      description: "Create stunning AI-generated images for your content",
      price: "$10/mo",
      rating: 5,
      features: [
        "High-quality image generation",
        "Commercial usage rights",
        "Fast generation times"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Top Banner Ad */}
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <AdBanner size="large-leaderboard" />
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <Badge className="mb-4">Technology</Badge>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            10 Best AI Tools for Content Creators in 2025
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sarah Johnson</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        {/* Article Content with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Featured Image */}
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" 
              alt="AI Tools for Content Creators"
              className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-large"
            />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                The landscape of content creation has been revolutionized by artificial intelligence. In 2025, AI tools have become indispensable for creators looking to produce high-quality content efficiently. Whether you're a blogger, YouTuber, podcaster, or social media influencer, these AI-powered tools will transform your workflow.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                After extensive testing and research, we've compiled this comprehensive guide to the 10 best AI tools that every content creator should consider adding to their arsenal. From writing assistants to image generators, these tools will help you create better content in less time.
              </p>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Why AI Tools Are Essential for Content Creators
              </h2>

              <p className="text-foreground leading-relaxed mb-6">
                Before we dive into our top picks, let's understand why AI tools have become crucial for modern content creation:
              </p>

              <ul className="space-y-3 mb-8 text-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span><strong>Time Efficiency:</strong> AI tools can reduce content creation time by up to 70%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span><strong>Consistency:</strong> Maintain a consistent quality and style across all content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span><strong>Creativity Boost:</strong> Overcome writer's block with AI-generated ideas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 font-bold">•</span>
                  <span><strong>SEO Optimization:</strong> Built-in SEO features help your content rank better</span>
                </li>
              </ul>

              <InContentAd />

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                1. ChatGPT Plus - The Ultimate Writing Assistant
              </h2>

              <p className="text-foreground leading-relaxed mb-6">
                OpenAI's ChatGPT Plus has become the go-to AI writing tool for millions of content creators worldwide. With access to GPT-4, it offers unparalleled natural language processing capabilities that can help you with everything from brainstorming ideas to writing complete articles.
              </p>

              <AffiliateProductBox 
                name={aiTools[0].name}
                description={aiTools[0].description}
                price={aiTools[0].price}
                rating={aiTools[0].rating}
                features={aiTools[0].features}
                ctaText="Start Free Trial"
              />

              <p className="text-foreground leading-relaxed mb-6">
                What sets ChatGPT Plus apart is its versatility. You can use it for content ideation, outline creation, draft writing, editing, and even repurposing content for different platforms. The conversational interface makes it incredibly intuitive to use, even for those new to AI tools.
              </p>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                2. Jasper AI - The Marketing Copywriter's Dream
              </h2>

              <p className="text-foreground leading-relaxed mb-6">
                Jasper AI (formerly Jarvis) is specifically designed for marketers and content creators who need high-converting copy. With over 50 templates and a deep understanding of marketing frameworks, Jasper can create everything from blog posts to ad copy.
              </p>

              <AffiliateProductBox 
                name={aiTools[1].name}
                description={aiTools[1].description}
                price={aiTools[1].price}
                rating={aiTools[1].rating}
                features={aiTools[1].features}
                ctaText="Get Started Free"
              />

              <InContentAd />

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                3. Midjourney - AI Image Generation at Its Finest
              </h2>

              <p className="text-foreground leading-relaxed mb-6">
                Visual content is crucial for engagement, and Midjourney has revolutionized how creators generate images. This AI tool creates stunning, professional-quality images from simple text descriptions, making it perfect for blog headers, social media posts, and marketing materials.
              </p>

              <AffiliateProductBox 
                name={aiTools[2].name}
                description={aiTools[2].description}
                price={aiTools[2].price}
                rating={aiTools[2].rating}
                features={aiTools[2].features}
                ctaText="Join Midjourney"
              />

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                4. Descript - AI-Powered Video & Podcast Editing
              </h2>

              <p className="text-foreground leading-relaxed mb-6">
                Descript is transforming video and podcast editing with its text-based editing approach. You can edit audio and video files by editing the transcript, making it as easy as editing a document. The AI automatically removes filler words, creates show notes, and even generates audiograms for social media.
              </p>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                5. Copy.ai - Speed Up Your Content Creation
              </h2>

              <p className="text-foreground leading-relaxed mb-6">
                Copy.ai excels at creating short-form content like social media posts, product descriptions, and email subject lines. Its user-friendly interface and specialized templates make it perfect for creators who need to produce large volumes of content quickly.
              </p>

              <InContentAd />

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                The Future of AI-Powered Content Creation
              </h2>

              <p className="text-foreground leading-relaxed mb-6">
                As we move through 2025, AI tools will continue to evolve and become even more sophisticated. The key to success is not replacing human creativity with AI, but rather using these tools to enhance your natural abilities and streamline repetitive tasks.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                Start by experimenting with one or two tools from this list that align with your content creation needs. Most offer free trials, so you can test them risk-free before committing to a subscription.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="text-foreground font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-foreground">
                  Combine multiple AI tools in your workflow for maximum efficiency. Use ChatGPT for ideation, Jasper for writing, Midjourney for images, and Descript for video editing to create a complete AI-powered content creation pipeline.
                </p>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Conclusion
              </h2>

              <p className="text-foreground leading-relaxed mb-6">
                These AI tools represent the cutting edge of content creation technology in 2025. By incorporating them into your workflow, you'll be able to create higher quality content more efficiently, giving you more time to focus on strategy and connecting with your audience.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                Remember, the best AI tool is the one that fits your specific needs and workflow. Don't be afraid to experiment and find the perfect combination that works for you.
              </p>
            </div>

            {/* Bottom Ad */}
            <InContentAd />

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-xl">
                  SJ
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground mb-2">Tech Writer & AI Enthusiast</p>
                  <p className="text-sm text-foreground">
                    Sarah has been covering AI and technology for over 8 years. She specializes in helping content creators leverage the latest tools to improve their workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="space-y-6">
              <SidebarAd size="medium-rectangle" />
              
              {/* Popular Articles */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {[
                    "Best WordPress Hosting 2025",
                    "Passive Income Strategies",
                    "Top Fitness Apps Review"
                  ].map((title, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <h4 className="text-sm font-medium text-foreground hover:text-primary cursor-pointer transition-colors">
                        {title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              <SidebarAd size="medium-rectangle" sticky={false} />
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Article;
