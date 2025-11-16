import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  onClick?: () => void;
}

const BlogCard = ({ title, excerpt, image, date, onClick }: BlogCardProps) => {
  return (
    <Card
      className="group cursor-pointer overflow-hidden hover-3d shadow-soft hover:shadow-devotional transition-smooth animate-float-gentle"
      onClick={onClick}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl mb-3 text-foreground group-hover:text-primary transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
