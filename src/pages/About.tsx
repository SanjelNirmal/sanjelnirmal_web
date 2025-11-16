import { Heart, Palette, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import vrindavan1 from "@/assets/vrindavan-1.jpg";
import vrindavan2 from "@/assets/vrindavan-2.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg">
            A journey of devotion, art, and spiritual discovery
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Card className="shadow-devotional">
            <CardContent className="p-8 sm:p-12">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h2 className="font-heading text-3xl font-bold">Hare Krishna</h2>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Namaste! I'm Nirmal Sanjel, a devotional artist inspired by the eternal love story 
                  of Radha and Krishna, and the sacred land of Vrindavan where their divine leelas unfolded.
                </p>
                <p>
                  My artistic journey began with a simple desire to express the profound emotions 
                  that arise from bhakti - pure devotional love. Each stroke of my brush, each color 
                  I choose, is an offering to the divine couple who dance eternally in my heart.
                </p>
                <p>
                  Through my art, I seek to capture not just the physical beauty of the deities, 
                  but the transcendental emotions, the rasa (spiritual flavor) that makes the heart 
                  dance and the soul sing. My work is my meditation, my seva (service), and my 
                  humble attempt to share the joy of Krishna consciousness with the world.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Heart,
              title: "Devotion",
              description: "Every artwork is created as an offering of love to Radha-Krishna",
            },
            {
              icon: Palette,
              title: "Creativity",
              description: "Blending traditional Indian art with contemporary expression",
            },
            {
              icon: MapPin,
              title: "Vrindavan",
              description: "Drawing endless inspiration from the holy dhama",
            },
          ].map((value, index) => (
            <Card
              key={index}
              className="hover-3d shadow-soft animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vrindavan Journey */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-center">
            My Vrindavan Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-devotional hover-3d">
              <img
                src={vrindavan1}
                alt="Vrindavan Temple at Sunrise"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-devotional hover-3d">
              <img
                src={vrindavan2}
                alt="Morning Meditation in Vrindavan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground text-center mt-6 italic">
            "In Vrindavan, every tree, every stone, every grain of dust is sacred. 
            This holy land continues to inspire my artistic and spiritual journey."
          </p>
        </div>

        {/* Quote */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-card shadow-devotional max-w-3xl mx-auto">
            <CardContent className="p-8 sm:p-12">
              <p className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                "Art is not what you see, but what you make others see."
              </p>
              <p className="text-muted-foreground">
                Through devotional art, I hope to help others glimpse the divine beauty 
                and eternal love of Radha-Krishna.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
