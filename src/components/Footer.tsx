import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const categories = [
    "Technology",
    "Finance & Investing",
    "Web Hosting & Blogging",
    "Health & Fitness",
    "E-Learning"
  ];

  const quickLinks = [
    "About Us",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
    "Disclaimer"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Affiliate Insights
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted source for expert insights and honest recommendations across technology, finance, health, and learning.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Affiliate Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
