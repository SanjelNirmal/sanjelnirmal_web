import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Clock } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import vrindavan1 from "@/assets/vrindavan-1.jpg";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const blogPosts = [
    {
      title: "The Colors of Divine Love",
      excerpt: "Exploring the symbolism of colors in Radha-Krishna art and how each hue represents different aspects of their divine relationship and spiritual emotions.",
      image: artwork1,
      date: "December 15, 2024",
      readTime: "5 min read",
      content: `
        In devotional art, every color carries profound spiritual significance. The vibrant saffron represents 
        renunciation and spiritual awakening, while the deep blues of Krishna's form symbolize the infinite 
        nature of the divine. Radha's pink and coral hues embody pure, selfless love and devotion.
        
        The golden yellows remind us of the spiritual wealth that comes from bhakti, and the lush greens 
        of Vrindavan gardens represent the eternal spring of spiritual consciousness. When we create devotional 
        art, we're not just mixing pigments - we're blending emotions, prayers, and meditations.
        
        Each artwork becomes a window into the transcendental realm, inviting viewers to experience the divine 
        leelas and taste the nectar of prema-bhakti (loving devotion).
      `,
    },
    {
      title: "Sunrise in Vrindavan",
      excerpt: "Witnessing the magical dawn at Vrindavan temples and how these precious moments transform into artistic inspiration for capturing divine beauty.",
      image: vrindavan1,
      date: "December 10, 2024",
      readTime: "7 min read",
      content: `
        There's something transcendental about Vrindavan at sunrise. As the first rays of light touch the temple 
        spires, the entire atmosphere becomes charged with spiritual energy. The morning aarti bells, the fragrance 
        of incense, the devotees lost in meditation - everything comes together in perfect harmony.
        
        This daily miracle has been my greatest teacher. The way light dances on the Yamuna, the golden glow on 
        ancient temple walls, the peaceful faces of devotees in meditation - these moments are etched in my heart 
        and flow through my brush onto canvas.
        
        Each visit to Vrindavan recharges my spiritual batteries and fills my artistic well. It's where I learned 
        that true art is not about technique or skill, but about opening one's heart to receive divine inspiration.
      `,
    },
    {
      title: "The Sacred Art of Offering",
      excerpt: "Understanding how creating devotional art becomes a form of worship and seva, transforming the creative process into a spiritual practice.",
      image: artwork1,
      date: "December 5, 2024",
      readTime: "6 min read",
      content: `
        When I sit down to create devotional art, I begin with prayer. The canvas is my altar, the paints are 
        my offerings, and each brushstroke is a mantra. This is not just art - it's seva, loving service to 
        Radha-Krishna.
        
        The Bhagavad Gita teaches us about karma yoga - performing actions as an offering to the divine without 
        attachment to results. This principle guides my artistic practice. Whether the painting turns out beautiful 
        or not, whether it's appreciated or not, the act of creation itself is my meditation.
        
        Through this process, I've learned that the most beautiful artwork comes when the ego steps aside and 
        divine inspiration flows freely. It's in these moments that something truly transcendental appears on the 
        canvas - not by my hands, but through them.
      `,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Thoughts & Reflections
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing my journey through devotion, art, and spiritual discoveries
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard {...post} onClick={() => setSelectedPost(post)} />
            </div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedPost.image && (
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full aspect-video object-cover rounded-lg mb-6"
              />
            )}
            <DialogTitle className="font-heading text-3xl sm:text-4xl mb-4">
              {selectedPost.title}
            </DialogTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {selectedPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {selectedPost.readTime}
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              {selectedPost.content.split('\n\n').map((paragraph: string, i: number) => (
                <p key={i} className="text-foreground mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Blog;
