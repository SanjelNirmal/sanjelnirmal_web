import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import ArtworkModal from "@/components/ArtworkModal";
import { Button } from "@/components/ui/button";

// Importing images
import firsttime from "@/assets/firsttime.jpg";
import vrindavan2 from "@/assets/vrindavan-2.jpg";
import malookpeeth from "@/assets/malookpeeth.jpg";
import vrindagali from "@/assets/vrindagali.jpg";
import vrindachant from "@/assets/vrindachant.jpg";
import radhavallavislove from "@/assets/radhavallavislove.jpg";
import radhadamodar from "@/assets/radhadamodar.jpg";
import nidhivan from "@/assets/nidhivan.jpg";
import radharaman from "@/assets/radharaman.jpg";
import biharilaal from "@/assets/biharilaal.jpg";
import inpremmandir from "@/assets/inpremmandir.jpg";
import meandpremmandir from "@/assets/meandpremmandir.jpg";
import lovedance from "@/assets/lovedance.jpg";
import radhakrishna from "@/assets/radhakrishna.jpg";
import damodarleela from "@/assets/damodarleela.jpg";
import teapot from "@/assets/teapot.jpg";
import vrindavankigali from "@/assets/vrindavan-ki-gali.jpg";
import govardanwalk from "@/assets/govardanwalk.jpg";
import govardan from "@/assets/govardan.jpg";
import radhakunda from "@/assets/radhakunda.jpg";
import palaceofradharani from "@/assets/palaceofradharani.jpg";
import radharaniaarati from "@/assets/radharaniaarati.jpg";
import radhavallav from "@/assets/radhavallav.jpg";
import vrindavan1 from "@/assets/vrindavan-1.jpg";



const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const artworks = [
        {
          image: firsttime,
          title: "First Time in Vrindavan",
          description: "Capturing the awe and wonder of a first visit to the holy town.",
          category: "Travel",
          date: "2022",
        },
        {
          image: vrindavan2,
          title: "Evening Aarti at Yamuna River",
          description: "Devotees offering prayers as the sun sets over the sacred river.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: malookpeeth,
          title: "Malook Peeth Temple",
          description: "The sacred Malook Peeth temple, a spiritual haven in Vrindavan.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: vrindagali,
          title: "Vrindavan Gali",
          description: "A vibrant street scene from the heart of Vrindavan.",
          category: "Travel",
          date: "2022",
        },
        {
          image: vrindachant,
          title: "Chanting in Vrindavan",
          description: "Devotees immersed in chanting and devotion in the holy town.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: radhavallavislove,
          title: "Radha-Vallav is Love",
          description: "A heartfelt depiction of Radha and Vallav's divine love.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: radhadamodar,
          title: "Radha and Damodar",
          description: "A tender moment between Radha and young Krishna (Damodar).",
          category: "Devotional",
          date: "2024",
        },
        {
          image: nidhivan,
          title: "Nidhivan at Dusk",
          description: "The mystical Nidhivan grove as evening descends.",
          category: "Devotional",
          date: "2022",
        },
        {
          image: radharaman,
          title: "Radharaman Temple",
          description: "The beautiful Radharaman temple, a center of devotion in Vrindavan.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: biharilaal,
          title: "Bihari Lal Temple",
          description: "The ornate temple, a jewel of Vrindavan's spiritual heritage.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: inpremmandir,
          title: "Inside Prem Mandir",
          description: "The intricate carvings and divine atmosphere within Prem Mandir.",
          category: "Devotional",
          date: "2022",
        },
        {
          image: meandpremmandir,
          title: "At Prem Mandir",
          description: "Capturing the serene beauty of Prem Mandir in Vrindavan.",
          category: "Travel",
          date: "2022",
        },
        {
          image: lovedance,
          title: "Divine Dance of Love",
          description: "Radha and Krishna dancing joyfully in the moonlit groves of Vrindavan.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: radhakrishna,
          title: "Radha and Krishna Embrace",
          description: "The divine couple in a loving embrace amidst blooming lotuses.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: damodarleela,
          title: "Damodar Leela",
          description: "Young Krishna's playful antics with his friends in Vrindavan.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: teapot,
          title: "Sacred Teapot",
          description: "An intricately designed teapot symbolizing devotion and hospitality.",
          category: "Painting",
          date: "2022",
        },
        {
          image: vrindavankigali,
          title: "Vrindavan Ki Gali",
          description: "A charming alleyway in Vrindavan, filled with spiritual energy.",
          category: "Travel",
          date: "2024",
        },
        {
          image: govardanwalk,
          title: "A Walk Through Govardhan",
          description: "Taking a serene walk through the sacred paths of Govardhan.",
          category: "Travel",
          date: "2024",
        },
        {
          image: govardan,
          title: "Govardan Hill",
          description: "The sacred hill of Govardhan, where Krishna lifted the mountain.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: radhakunda,
          title: "Radhakunda Lake",
          description: "The holy lake of Radhakunda, a place of divine pastimes.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: palaceofradharani,
          title: "Palace of Radha Rani",
          description: "A majestic depiction of Radha Rani's palace in Vrindavan.",
          category: "Painting",
          date: "2024",
        },
        {
          image: radharaniaarati,
          title: "Aarti of Radha Rani",
          description: "Devotees performing aarti for Radha Rani in a grand temple setting.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: radhavallav,
          title: "Radha and Vallabh",
          description: "The divine couple sharing a moment of bliss in Vrindavan.",
          category: "Devotional",
          date: "2024",
        },
        {
          image: vrindavan1,
          title: "Sacred Pathways of Vrindavan",
          description: "A serene walk through the holy town's spiritual ambiance.",
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
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of devotional sacred memories from Vrindavan and everywhere else.
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
            <p className="text-muted-foreground text-lg">No Photos found in this category.</p>
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
