import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import ArtworkModal from "@/components/ArtworkModal";
import { Button } from "@/components/ui/button";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import vrindavan1 from "@/assets/vrindavan-1.jpg";
import vrindavan2 from "@/assets/vrindavan-2.jpg";

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const artworks = [
    {
      image: artwork1,
      title: "Radha-Krishna in Vrindavan",
      description: "Divine love under the golden sunset with peacock and lotus flowers",
      category: "Devotional",
      date: "2024",
    },
    {
      image: artwork2,
      title: "Krishna's Flute",
      description: "Enchanting moonlight melodies in the sacred forest",
      category: "Painting",
      date: "2024",
    },
    {
      image: artwork3,
      title: "Radha's Grace",
      description: "Beauty and devotion in harmony with nature",
      category: "Portrait",
      date: "2024",
    },
    {
      image: artwork4,
      title: "Sacred Mandala",
      description: "Spiritual geometry with devotional symbols and vibrant colors",
      category: "Abstract",
      date: "2024",
    },
    {
      image: vrindavan1,
      title: "Vrindavan Sunrise",
      description: "Golden morning light over the sacred temple and Yamuna river",
      category: "Travel",
      date: "2024",
    },
    {
      image: vrindavan2,
      title: "Morning Meditation",
      description: "Devotees in peaceful contemplation at the temple",
      category: "Travel",
      date: "2024",
    },
  ];

  const categories = ["All", "Devotional", "Painting", "Portrait", "Abstract", "Travel"];

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Art Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of devotional artworks and sacred memories from Vrindavan
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ArtworkCard
                {...artwork}
                onClick={() => setSelectedArtwork(artwork)}
              />
            </div>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No artworks found in this category.</p>
          </div>
        )}
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <ArtworkModal
          isOpen={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          {...selectedArtwork}
        />
      )}
    </div>
  );
};

export default Gallery;
