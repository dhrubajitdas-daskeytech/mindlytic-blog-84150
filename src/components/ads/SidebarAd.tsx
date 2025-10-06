import { Card } from "@/components/ui/card";

interface SidebarAdProps {
  size?: "medium-rectangle" | "large-rectangle" | "half-page";
  sticky?: boolean;
  className?: string;
}

const SidebarAd = ({ size = "medium-rectangle", sticky = true, className = "" }: SidebarAdProps) => {
  const dimensions = {
    "medium-rectangle": { width: "300px", height: "250px", text: "300 x 250" },
    "large-rectangle": { width: "300px", height: "600px", text: "300 x 600" },
    "half-page": { width: "300px", height: "1050px", text: "300 x 1050" },
  };

  const { width, height, text } = dimensions[size];

  return (
    <Card 
      className={`bg-muted/50 border-2 border-dashed border-border flex items-center justify-center ${sticky ? 'sticky top-20' : ''} ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">Advertisement</p>
        <p className="text-xs text-muted-foreground mt-1">{text}</p>
      </div>
    </Card>
  );
};

export default SidebarAd;
