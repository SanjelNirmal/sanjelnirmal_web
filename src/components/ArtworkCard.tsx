import { useState } from "react";
import { Card } from "@/components/ui/card";

interface ArtworkCardProps {
  image: string;
  title: string;
  description?: string;
  category?: string;
  onClick?: () => void;
}

const ArtworkCard = ({ image, title, description, category, onClick }: ArtworkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group cursor-pointer overflow-hidden hover-3d shadow-soft hover:shadow-devotional transition-smooth animate-float-gentle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-smooth ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {category && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-smooth ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-heading text-xl mb-1">{title}</h3>
            {description && (
              <p className="text-sm text-white/90 line-clamp-2">{description}</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArtworkCard;
