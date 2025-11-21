import { Heart, Palette, MapPin, Book, Code, PersonStanding } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import illam from "@/assets/illam.jpg";
import pathivara1 from "@/assets/pathivara-1.jpg";
import vrindavan1 from "@/assets/vrindavan-1.jpg";
import vrindavan2 from "@/assets/vrindavan-2.jpg";
import profile from "@/assets/profile.jpg";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg">
            A journey of devotion, life long journey, art, and spiritual discovery
          </p>
        </div>

        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          "Nirmal Sanjel"
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Devotional Artist | Student | Programmer | Vrindavan Enthusiast
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={profile}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>

        
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Card className="shadow-devotional">
            <CardContent className="p-8 sm:p-12">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h2 className="font-heading text-3xl font-bold">Shri Hit Harivansh</h2>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  🙏 Radhe Radhe! I am Nirmal Sanjel, a humble student and devotional artist, inspired by 
                  the eternal love of Shree Radha Rani and Shree Krishna, and the sacred land of Vrindavan 
                  where their divine pastimes dance in every breeze and whisper of the Yamuna.
                </p>
                <p>
                  My journey in art began with a simple heart full of bhakti, a desire to express the 
                  profound love and devotion that flows naturally from surrender to the divine. Each stroke 
                  of my brush, each hue I select, is offered to the divine couple whose eternal dance 
                  resonates in my soul.
                </p>
                <p>
                  Through my creations, I strive to capture not merely the physical forms of the deities, 
                  but the transcendental emotions and rasa (spiritual flavors) that make the heart rejoice 
                  and the soul sing. Every artwork is my meditation, my seva (service), and a humble attempt 
                  to share the eternal joy and beauty of Krishna consciousness with the world.
                </p>
                <p>
                  Even as I walk the path of a student, learning in the material world, my heart finds 
                  its true home in devotion, and my art becomes the bridge that unites study, discipline, 
                  and divine love into a single offering at the lotus feet of Shree Radha Krishna.
                </p>

              </div>
            </CardContent>
          </Card>
        </div>

        
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
              description: "Blending traditional art with contemporary expression",
            },
            {
              icon: MapPin,
              title: "Vrindavan",
              description: "Drawing endless inspiration from the holy dhama",
            },
            {
              icon: Book,
              title: "Learning Programming",
              description: "A lifelong student, embracing knowledge in all forms",
            },
            {
              icon: Code,
              title: "Website Development",
              description: "Sharing my devotional journey through technology",
            },
            { icon: PersonStanding,
              title: "Student Life",
              description: "Balancing studies with a heart full of devotion",
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

        
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-center">
            My Pathivara Journey with Friends
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-devotional hover-3d">
              <img
                src={illam}
                alt="with Friends at Illam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-devotional hover-3d">
              <img
                src={pathivara1}
                alt="In Pathivara Temple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-muted-foreground text-center mt-6 italic">
            "The serene hills of Illam and the sacred Pathivara temple provided a perfect backdrop
            for friendship and spiritual exploration."
          </p>
        </div>

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
            This holy land continues to inspire my student life and spiritual journey."
          </p>
        </div>
       
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-card shadow-devotional max-w-3xl mx-auto">
            <CardContent className="p-8 sm:p-12">
              <p className="font-heading text-2xl sm:text-3xl text-primary mb-4">
                "Art is my devotion; through it, I connect with the divine love of Radha-Krishna."
              </p>
              <p className="text-muted-foreground">
                — Nirmal Sanjel              
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
