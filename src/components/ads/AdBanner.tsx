import { Card } from "@/components/ui/card";

interface AdBannerProps {
  size?: "leaderboard" | "large-leaderboard" | "mobile-banner";
  className?: string;
}

const AdBanner = ({ size = "leaderboard", className = "" }: AdBannerProps) => {
  const dimensions = {
    leaderboard: { width: "728px", height: "90px", text: "728 x 90" },
    "large-leaderboard": { width: "970px", height: "250px", text: "970 x 250" },
    "mobile-banner": { width: "320px", height: "100px", text: "320 x 100" },
  };

  const { width, height, text } = dimensions[size];

  return (
    <Card 
      className={`bg-muted/50 border-2 border-dashed border-border flex items-center justify-center ${className}`}
      style={{ width: "100%", maxWidth: width, height }}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">Advertisement</p>
        <p className="text-xs text-muted-foreground mt-1">{text}</p>
      </div>
    </Card>
  );
};

export default AdBanner;
