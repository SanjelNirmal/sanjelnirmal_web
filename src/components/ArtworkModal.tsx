import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description?: string;
  category?: string;
  date?: string;
}

const ArtworkModal = ({
  isOpen,
  onClose,
  image,
  title,
  description,
  category,
  date,
}: ArtworkModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
          <img
            src={image}
            alt={title}
            className="w-full max-h-[70vh] object-contain bg-black"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <DialogTitle className="font-heading text-2xl sm:text-3xl">{title}</DialogTitle>
            {category && (
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                {category}
              </span>
            )}
          </div>
          {description && <p className="text-muted-foreground mb-2">{description}</p>}
          {date && (
            <p className="text-sm text-muted-foreground">Created: {date}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkModal;
