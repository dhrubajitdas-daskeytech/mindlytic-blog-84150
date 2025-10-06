import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

interface AffiliateProductBoxProps {
  name: string;
  description: string;
  price: string;
  rating: number;
  features: string[];
  ctaText?: string;
  className?: string;
}

const AffiliateProductBox = ({ 
  name, 
  description, 
  price, 
  rating, 
  features, 
  ctaText = "Try for Free",
  className = "" 
}: AffiliateProductBoxProps) => {
  return (
    <Card className={`border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 my-6 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Starting at</p>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-4">
          <p className="font-semibold text-sm mb-2">Key Features:</p>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full bg-gradient-hero hover:opacity-90 transition-opacity group">
          {ctaText}
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <p className="text-xs text-muted-foreground text-center mt-3">
          Affiliate disclosure: We may earn a commission if you click through and make a purchase
        </p>
      </CardContent>
    </Card>
  );
};

export default AffiliateProductBox;
