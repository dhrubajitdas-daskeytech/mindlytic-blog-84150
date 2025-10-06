import { Card } from "@/components/ui/card";

interface InContentAdProps {
  className?: string;
}

const InContentAd = ({ className = "" }: InContentAdProps) => {
  return (
    <Card 
      className={`bg-muted/50 border-2 border-dashed border-border flex items-center justify-center my-8 ${className}`}
      style={{ width: "100%", height: "280px" }}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">Advertisement</p>
        <p className="text-xs text-muted-foreground mt-1">In-Content Ad</p>
      </div>
    </Card>
  );
};

export default InContentAd;
