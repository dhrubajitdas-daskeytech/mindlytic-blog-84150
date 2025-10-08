const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-12 mt-16 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h4 className="font-bold text-foreground mb-2">Mindlytic</h4>
          <p className="text-sm text-muted-foreground max-w-md">
            Learn Smarter, Choose Better. Insight-led articles, reviews and courses that help you decide with confidence.
          </p>
          <div className="flex gap-3 mt-4">
            <span className="w-10 h-10 rounded-lg bg-card/30 flex items-center justify-center text-muted-foreground text-sm">
              in
            </span>
            <span className="w-10 h-10 rounded-lg bg-card/30 flex items-center justify-center text-muted-foreground text-sm">
              tw
            </span>
            <span className="w-10 h-10 rounded-lg bg-card/30 flex items-center justify-center text-muted-foreground text-sm">
              fb
            </span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-muted-foreground mb-2">
            © <strong className="text-foreground">Mindlytic</strong> — All rights reserved
          </div>
          <div className="space-x-2">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
