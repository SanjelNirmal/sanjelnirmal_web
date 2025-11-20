import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Palette, Book, Mail } from "lucide-react";
import ArtworkCard from "@/components/ArtworkCard";
import ArtworkModal from "@/components/ArtworkModal";
import firsttime from "@/assets/firsttime.jpg";
import inpremmandir from "@/assets/inpremmandir.jpg";
import vrindavakigali from "@/assets/vrindavan-ki-gali.jpg";

const Home = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null);

  const featuredArtworks = [
        {
          image: firsttime,
          title: "First Time in Vrindavan",
          description: "Capturing the awe and wonder of a first visit to the holy town.",
          category: "Travel",
        },
        {
          image: inpremmandir,
          title: "In Prem Mandir",
          description: "A serene moment inside the magnificent Prem Mandir temple.",
          category: "Devotional",
        },
        {
          image: vrindavakigali,
          title: "Vrindavan Ki Gali",
          description: "A charming street scene in the heart of Vrindavan.",
          category: "Travel",
        },

    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float-gentle" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-primary-foreground mb-6">
              Shree RadhaVallav
            </h1>
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary-foreground/90 mb-8">
              🌟 Shree Harivansh 🌟
              
            </p>
            
            <p className="font-body text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12">
              ✨ Join me on a soulful journey through vlogs and photography
              where every frame whispers a story,
              every moment blooms into art,
              and life itself becomes a canvas of memories. ✨
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/gallery">
                <Button size="lg" className="shadow-devotional hover:shadow-float transition-smooth">
                  Explore Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground hover:bg-white/20">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Gallery</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Divine moments of love and devotion, captured through the lens of Radha's eternal bhāv
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArtworkCard
                  {...artwork}
                  onClick={() => setSelectedArtwork(artwork)}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="shadow-soft hover:shadow-devotional transition-smooth">
                View All Photos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

 
      <section className="py-20 bg-muted/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">What I Offer</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the various ways we can connect through art and devotion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-card rounded-xl p-8 shadow-soft hover:shadow-devotional transition-smooth hover-3d text-center animate-fade-in-up">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Custom Art</h3>
              <p className="text-muted-foreground">
                Commission personalized artwork that captures your spiritual journey and devotion
              </p>
            </div>

            <div className="bg-gradient-card rounded-xl p-8 shadow-soft hover:shadow-devotional transition-smooth hover-3d text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Vlogs</h3>
              <p className="text-muted-foreground">
                Dive into devotional stories and experiences through engaging photo video content
              </p>
            </div>

            <div className="bg-gradient-card rounded-xl p-8 shadow-soft hover:shadow-devotional transition-smooth hover-3d text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Newsletter</h3>
              <p className="text-muted-foreground">
                Receive devotional insights, art updates, and spiritual inspiration directly to your inbox
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Kind Words</h2>
            <p className="text-muted-foreground text-lg">
              Feedback from the community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-card rounded-xl p-6 shadow-soft hover:shadow-devotional transition-smooth animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The devotional portrait captures the essence of Radha-Krishna's divine love. Truly inspiring work! I love it ❤️."
              </p>
              <p className="font-heading text-foreground">- Sunita Sijapati</p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 shadow-soft hover:shadow-devotional transition-smooth animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Every piece tells a story of devotion. The attention to detail and emotion is palpable. Highly recommend! 🙏"
              </p>
              <p className="font-heading text-foreground">- Roshan Ghimire</p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 shadow-soft hover:shadow-devotional transition-smooth animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <Heart key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "I would highly recommend viewing Nirmal's journey. A transformative experience through art, photography, and devotion.👌"
              </p>
              <p className="font-heading text-foreground">- Anonymous</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center bg-gradient-sunrise rounded-3xl p-12 shadow-float animate-fade-in-up">
            <Sparkles className="h-12 w-12 text-white mx-auto mb-6 animate-pulse-glow" />
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's Connect Together
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Whether you have questions, want to commission art, or just want to say hello,
              I would love to hear from you.
              I am here to assist you on your devotional journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-bounce shadow-devotional hover:shadow-float">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-bounce shadow-devotional hover:shadow-float">
                  View More Works and Photos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


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

export default Home;
