import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Clock } from "lucide-react";
//Image Imports
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



import Hover3D from "@/components/ui/hover-3d";
import { title } from "process";


const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  
  const blogPosts = [

    {
      title: "First Time in Vrindavan",
      excerpt: "My first visit to Vrindavan and the spiritual awakening that followed, inspiring my spritual journey.",
      image: firsttime,
      date: "December 5, 2024",
      readTime: "6 min read",
      content: `
        Stepping into Vrindavan for the first time was like entering a different realm. The air was thick 
        with devotion, and every corner seemed to whisper stories of Radha and Krishna.

        As I wandered through the narrow lanes, I was captivated by the vibrant colors, the aroma of 
        incense, and the sound of kirtans echoing from the temples. Each temple I visited had its own unique 
        charm and history, drawing me deeper into the spiritual fabric of this sacred town.

        My heart swelled with a mix of awe and humility as I participated in the evening aarti at Banke Bihari 
        Temple. The energy was palpable, and I felt an overwhelming sense of connection to something greater 
        than myself.

        This first visit to Vrindavan ignited a spark within me, inspiring a lifelong journey of devotion, 
        art, and spiritual exploration.

      `,
    },
    
    {
      title: "Sunrise in Vrindavan",
      excerpt: "Witnessing the magical dawn at Vrindavan temples and how these precious moments transform into artistic inspiration for capturing divine beauty.",
      image: vrindavan2,
      date: "December 10, 2024",
      readTime: "7 min read",
      content: `
        My visit to Vrindavan during sunrise felt like stepping directly into the pages of a divine leela. 
        Before the city was fully awake, I walked barefoot towards the temples, and the cold breeze from 
        the Yamuna touched my face like a blessing.

        The sound of morning aarti echoed everywhere — distant bells, soft chanting, the fragrance of tulsi 
        and incense mixing in the air. Watching the sun slowly rise behind the temple domes felt like 
        Radha Rani herself had lifted the curtain of night.

        I sat near the Yamuna ghat for a long time, just breathing and watching devotees offer water. 
        It was peaceful, pure, and unforgettable. That morning became one of the most sacred memories 
        of my Vrindavan journey.

      `,
    },
    {
      title: "Malook Peeth: The Hidden Gem",
      excerpt: "Discovering the serene Malook Peeth in Vrindavan and how its tranquil atmosphere fuels my devotional journey.",
      image: malookpeeth,
      date: "December 6, 2024",
      readTime: "5 min read",
      content: `
        Tucked away from the bustling streets of Vrindavan, Malook Peeth is a serene sanctuary that 
        offers a unique spiritual experience. As I entered the peeth, I was greeted by the gentle sound 
        of flowing water and the soft rustle of leaves.

        The atmosphere was imbued with a deep sense of tranquility, making it an ideal place for meditation 
        and reflection. I spent hours wandering through the lush gardens, absorbing the peaceful energy 
        that permeated every corner.

        The peeth's rich history and spiritual significance added depth to my visit, inspiring me to 
        deepen my own devotional practice. Malook Peeth remains one of the most cherished stops on my 
        Vrindavan journey.

      `,  
    },
    {
      title: "Vrindavan Ki Gali: Streets of Devotion",
      excerpt: "Exploring the nightlife of Vrindavan Ki Gali and how the lively atmosphere fuels my devotion.",
      image: vrindagali,
      date: "December 13, 2024",
      readTime: "6 min read",
      content: `
        As the sun set over Vrindavan, the streets of Vrindavan Ki Gali came alive with vibrant energy. 
        The narrow lanes were filled with the aroma of street food, the sound of devotional songs, and 
        the laughter of locals and pilgrims alike.

        Every corner I turned revealed a new facet of Vrindavan's rich culture—small temples adorned 
        with flowers, shops selling religious artifacts, and devotees sharing stories of Krishna's pastimes. 
        The lively atmosphere was contagious, inspiring me to deepen my own spiritual practice.

        Vrindavan Ki Gali is not just a street; it's a living testament to the enduring devotion that 
        defines this sacred town.

      `,
    },
    {
      title: "Chanting in Vrindavan by braj and bhakta",
      excerpt: "Immersing myself in the soulful chanting sessions in Vrindavan and how they elevate my spiritual practice.",
      image: vrindachant,
      date: "December 14, 2024",
      readTime: "5 min read",
      content: `
        One of the most transformative experiences during my time in Vrindavan was participating in the 
        chanting sessions led by local braj and bhakta. The energy in those gatherings was electrifying, 
        as devotees from all walks of life came together to sing the holy names of Radha and Krishna.

        The rhythmic repetition of the maha-mantra, accompanied by traditional instruments, created an 
        atmosphere of pure devotion. I found myself completely absorbed in the experience, my heart 
        swelling with joy and spiritual fervor.

        These chanting sessions not only deepened my connection to the divine but also inspired me to 
        incorporate this practice into my daily spiritual routine.

      `,
    },
    {
      title: "Radhavallav is Love: First Morning in Vrindavan",
      excerpt: "Experiencing the divine love at Radhavallabha Temple and how it inspires my spiritual journey.",
      image: radhavallavislove,
      date: "December 9, 2024",
      readTime: "6 min read",
      content: `
        My first morning in Vrindavan was marked by a visit to the Radhavallabha Temple, a place that 
        radiates divine love and devotion. As I entered the temple grounds, I was immediately struck 
        by the serene atmosphere and the heartfelt devotion of the devotees present.

        The morning aarti was a soul-stirring experience, with melodious hymns and the fragrance of 
        incense filling the air. I felt an overwhelming sense of peace and connection to Radha Rani, 
        whose presence seemed to permeate every corner of the temple.

        This visit to Radhavallabha Temple set the tone for my entire Vrindavan journey, inspiring me to 
        embrace love and devotion in all aspects of my spiritual practice.

        This first morning in Vrindavan will forever hold a special place in my heart.
      `,
    },
    {
      title: "Radhadamodar: The Joyful Divine Couple",
      excerpt: "Exploring the enchanting lilas of Radhadamodar and how their joyful pastimes inspire my devotional art and spiritual journey.",
      image: radhadamodar,
      date: "December 7, 2024",
      readTime: "5 min read",
      content: `
        Visiting Radha Damodar Temple was a unique experience during my Vrindavan journey. The temple was 
        quiet, peaceful, and filled with ancient vibrations of devotion.

        I sat near the samadhi of Shrila Rupa Goswami, and for the first time, I felt true inner silence. 
        People around me were praying softly, doing parikrama, and everything felt calm.

        The temple priest explained a few beautiful stories about Radha Damodar, and listening to them inside 
        that ancient temple made the stories feel alive. It is a place that invites you to sit, think, and 
        feel.

      `,  
    },

    {
      title: "Nidhivan: The Enchanted Grove",
      excerpt: "Exploring the mystical Nidhivan in Vrindavan and how its enchanting atmosphere and where Laal ji dance with gopis inspires my devotional art.",
      image: nidhivan,
      date: "December 11, 2024",
      readTime: "6 min read",
      content: `
        Nidhivan is a place shrouded in mystery and divine energy. As I entered the sacred grove, I was 
        immediately captivated by the dense foliage and the serene ambiance that enveloped the area.

        The legends surrounding Nidhivan, particularly the belief that Lord Krishna performs his divine 
        dance with the gopis here every night, added an aura of enchantment to my visit. I wandered through 
        the grove, feeling a deep connection to the divine pastimes that are said to unfold within its 
        sacred boundaries.

        Spending time in Nidhivan was a profoundly spiritual experience that inspired me to capture its 
        mystical essence through my art.

      `,
    },

    {
      title: "Radharaman: The Compassionate Lord",
      excerpt: "Discovering the divine compassion of Radharaman and how his loving presence inspires my spiritual journey in Vrindavan.",
      image: radharaman,
      date: "December 8, 2024",
      readTime: "5 min read",
      content: `
        My visit to Radharaman Temple was a deeply moving experience. The temple, dedicated to Lord 
        Radharaman, exuded an aura of compassion and love that touched my heart profoundly.

        As I entered the temple, I was greeted by the sight of the beautiful deities, their expressions 
        radiating kindness and warmth. The atmosphere was filled with devotional songs and the fragrance 
        of incense, creating a serene environment for worship.

        Spending time in Radharaman Temple allowed me to connect with the divine compassion of Lord 
        Krishna, inspiring me to cultivate these qualities in my own spiritual journey.

      `,
    },
    {
      title: "Bihari Laal: The Beloved of Vrindavan",
      excerpt: "Experiencing the divine presence of Bihari Laal in Vrindavan and one of the hardest to see deity in Vrindavan.",
      image: biharilaal,
      date: "December 12, 2024",
      readTime: "5 min read",
      content: `
        Visiting the Bihari Laal Temple was a unique and profound experience during my time in Vrindavan. 
        Known for its elusive deity, the temple holds a special place in the hearts of devotees who seek 
        the divine presence of Lord Krishna.

        As I entered the temple, I felt a deep sense of reverence and anticipation. The atmosphere was 
        charged with devotion, and I joined the other devotees in heartfelt prayers and offerings.

        Although catching a glimpse of Bihari Laal is considered a rare blessing, the spiritual energy 
        within the temple was palpable. My visit to Bihari Laal Temple left an indelible mark on my 
        spiritual journey, inspiring me to deepen my devotion and connection to the divine.

        This experience is like i waiting too much time in line and too much devotees trying to see the deity. He is the most popular deity in vrindavan but the hardest to see.  
      `,
    },
    {
      title: "In Prem Mandir: A Divine Experience",
      excerpt: "Immersing myself in the divine beauty of Prem Mandir and how its boosting my devotion.",
      image: inpremmandir,
      date: "December 15, 2024",
      readTime: "6 min read",
      content: `
        My visit to Prem Mandir was nothing short of a divine experience. The temple, dedicated to the 
        eternal love of Radha and Krishna, is a masterpiece of architecture and spirituality.

        As I approached the temple, I was struck by its grandeur and intricate carvings that depicted 
        various lilas of Radha and Krishna. The atmosphere was filled with devotion, and I felt an 
        overwhelming sense of peace as I entered the temple grounds.

        Inside, the deities were adorned with beautiful garments and jewelry, radiating divine love 
        and compassion. The evening aarti was a soul-stirring experience, with melodious hymns and 
        the fragrance of incense filling the air.

        My time at Prem Mandir deepened my spiritual connection and inspired me to embrace love and 
        devotion in all aspects of my life.

      `,
    },
        {
      title: "A Pilgrim's Journey to Prem Mandir",
      excerpt: "Documenting my spiritual pilgrimage to Prem Mandir in Vrindavan, exploring how the temple's divine beauty fuels my artistic devotion.",
      image: meandpremmandir,
      date: "December 12, 2024",
      readTime: "6 min read",
      content: `
        My visit to Prem Mandir was one of the highlights of my Vrindavan trip. The temple was glowing even 
        in daylight, with beautifully sculpted walls and stories of Krishna carved everywhere.

        Walking inside the temple felt like walking inside a living storybook. Every corner had something to 
        admire—Murli Manohar’s smile, Radha Rani’s grace, the peaceful environment… everything touched my 
        heart deeply.

        When the evening lighting began, the temple shined in different colors. It was so beautiful that I 
        stood there for several minutes without moving. That moment will stay with me forever.

      `,  
    },
    
    {
      title: "The Dance of Divine Love",
      excerpt: "Capturing the ecstatic dance of Radha and Krishna through art, exploring how their divine love inspires spiritual creativity and devotion.",
      image: lovedance,
      date: "December 8, 2024",
      readTime: "8 min read",
      content: `
        During my trip, I attended a beautiful evening kirtan in a small Vrindavan temple. The way devotees 
        were dancing, clapping, smiling—it felt like pure joy was flowing everywhere.

        People from different countries, cultures, and ages all joined together, dancing with full heart. 
        No ego, no formality—just love, devotion, and happiness.

        Watching this divine celebration made me understand why Vrindavan is called the land of love. 
        The energy in that moment felt like Radha Krishna were blessing everyone present.

      `,
    },
    {
      title: "Vrindava: ISKCON's Divine Love",
      excerpt: "Exploring Radha-Krishna Temple, ISKCON Vrindavan, and the spiritual artistry that captures the essence of divine love and devotion.",
      image: radhakrishna,
      date: "December 15, 2024",
      readTime: "5 min read",
      content: `
        When I entered ISKCON Vrindavan for the first time, I felt an instant wave of devotion. The temple 
        was full of devotees from around the world, chanting the maha-mantra with so much energy and love.

        Inside the temple, the darshan of Radha Shyamsundar left me speechless. The environment was full of 
        warmth, kindness, and spiritual vibration. I sat there for a long time, listening to kirtan and 
        feeling all my worries melt away.

        The prasadam, the courtyard, the chanting—everything made me feel at home. Visiting ISKCON Vrindavan 
        was not just a part of my trip; it became the spiritual center of my entire journey.

      `,
    },

    {
      title: "Damodarleela: The Divine Bond",
      excerpt: "Exploring the enchanting lilas of Damodarleela and how their joyful pastimes inspire my devotional spiritual journey.",
      image: damodarleela,
      date: "December 11, 2024",
      readTime: "5 min read",
      content: `
        Visiting ISKCON Temple was a serene experience during my Vrindavan trip. The temple exuded 
        an aura of devotion and tranquility. The beautiful deities of Damodara and Radha Rani stood gracefully, 
        radiating divine love.

        I spent time in meditation and listened to the melodious kirtans that filled the temple. The peaceful 
        environment allowed me to connect deeply with my inner self.

        This temple became a sanctuary for me, a place where I could reflect on the divine bond between 
        Radha and Krishna.

      `,
    },
    {
      title: "The Teapot: A Symbol of Simplicity",
      excerpt: "Have a tea as a morning ritual to start your day with mindfulness and simplicity.",
      image: teapot,
      date: "December 14, 2024",
      readTime: "4 min read",
      content: `
        The simple act of brewing and enjoying a cup of tea has become a cherished ritual in my daily life. 
        It serves as a moment of mindfulness, allowing me to pause and appreciate the present.

        The aroma of the tea leaves, the warmth of the cup in my hands, and the gentle steam rising 
        create a sensory experience that grounds me. This ritual reminds me to embrace simplicity and find 
        joy in the little things.

        Taking this time each morning sets a positive tone for the day ahead, fostering a sense of calm 
        and clarity.

      `,
    },
    {
      title: "Vrindavan Ki Gali: Streets of Devotion",
      excerpt: "Exploring the vibrant streets of Vrindavan Ki Gali and how the lively atmosphere fuels my devotion.",
      image: vrindavankigali,
      date: "December 13, 2024",
      readTime: "6 min read",
      content: `
        Walking through the bustling streets of Vrindavan Ki Gali was an immersive experience. The vibrant 
        colors, the aroma of street food, and the sound of devotional songs created an atmosphere filled 
        with life and devotion.

        Every corner I turned, there was something new to discover—small temples, shops selling religious 
        artifacts, and locals sharing stories of Krishna's pastimes. The energy of the place was contagious, 
        inspiring me to deepen my own spiritual practice.

        Vrindavan Ki Gali is not just a street; it's a living testament to the enduring devotion that defines 
        this sacred town.

      `,  
    },
    {
      title: "A Walk Through Govardav: Spiritual Sojourn",
      excerpt: "Taking a serene walk through the sacred paths of Govardav and how the spiritual ambiance inspires my devotional journey.",
      image: govardanwalk,
      date: "December 14, 2024",
      readTime: "5 min read",
      content: `
        My walk through Govardav was a deeply spiritual experience. The sacred paths, lined with ancient 
        trees and vibrant flora, created an atmosphere of tranquility and reverence.

        As I strolled along the winding trails, I felt a profound connection to the divine pastimes of 
        Lord Krishna. The gentle rustling of leaves and the distant sound of temple bells added to the 
        serene ambiance.

        This spiritual sojourn through Govardav not only inspired my devotional art but also deepened 
        my appreciation for the sacredness of nature and its role in our spiritual journey.

      `,
    },
    {
      title: "Govardan Hill: The Sacred Ascent",
      excerpt: "Climbing Govardan Hill and experiencing the spiritual significance of this sacred site in Vrindavan.",
      image: govardan,
      date: "December 15, 2024",
      readTime: "5 min read",
      content: `
        My ascent of Govardan Hill was both a physical and spiritual journey. The climb was steep, but 
        each step brought me closer to a deeper understanding of Krishna's divine pastimes.

        As I reached the summit, I was greeted by a breathtaking view of Vrindavan below. The sense of 
        accomplishment was heightened by the knowledge that this hill holds great significance in Krishna's 
        life.

        Spending time at the top, I felt a profound connection to the divine, and the experience left an 
        indelible mark on my spiritual journey.

      `,  
    },

    
    
    {
      title: "Radhakunda: The Sacred Pond",
      excerpt: "Visiting Radhakunda and experiencing the spiritual significance of this sacred pond in Vrindavan.",
      image: radhakunda,
      date: "December 16, 2024",
      readTime: "5 min read",
      content: `
        My visit to Radhakunda was a deeply spiritual experience. The serene pond, surrounded by lush greenery, 
        exuded a sense of tranquility that immediately put me at ease.

        As I approached the water's edge, I felt a profound connection to the divine love story of Radha and 
        Krishna. The devotees gathered there were engaged in heartfelt prayers and offerings, creating an 
        atmosphere of pure devotion.

        Spending time at Radhakunda allowed me to reflect on the importance of love and surrender in my own 
        spiritual journey.

      `,  
    },
    {
      title: "Palace of Radharani: A Divine Abode",
      excerpt: "Exploring the Palace of Radharani and experiencing the spiritual significance of this sacred site in Vrindavan.",
      image: palaceofradharani,
      date: "December 17, 2024",
      readTime: "6 min read",
      content: `
        Visiting the Palace of Radharani was a mesmerizing experience. The intricate architecture and 
        exquisite carvings depicted various lilas of Radha and Krishna, immersing me in their divine love story.

        As I wandered through the palace grounds, I felt a deep sense of reverence and awe. The atmosphere 
        was filled with devotion, and I could sense the presence of Radha Rani in every corner.

        This sacred site not only enriched my understanding of Vrindavan's spiritual heritage but also 
        inspired me to deepen my own devotion.

        The Palace of Radharani stands as a testament to the enduring love and devotion that defines Vrindavan.
        
      `,  
    },
    {
      title: "Radharani Aarti: The Evening Devotion",
      excerpt: "Experiencing the enchanting Radharani Aarti and how this evening ritual deepens my spiritual connection in Barsana.",
      image: radharaniaarati,
      date: "December 18, 2024",
      readTime: "5 min read",
      content: `
        Attending the Radharani Aarti in Barsana was a soul-stirring experience. The temple was adorned 
        with vibrant decorations, and the air was filled with the fragrance of incense and flowers.

        As the aarti began, the rhythmic chanting and melodious hymns created an atmosphere of divine 
        devotion. The devotees, dressed in colorful attire, participated with heartfelt enthusiasm, their 
        faces glowing with spiritual fervor.

        Witnessing this evening ritual deepened my connection to Radha Rani and inspired me to embrace 
        devotion in my own life. The Radharani Aarti is a beautiful expression of love and reverence that 
        resonates deeply within the hearts of all who attend.

      `,  
    },
    {
      title: "Radhavallabha: The Beloved of Radha",
      excerpt: "Delving into the divine pastimes of Radhavallabha and how his loving relationship with Radha inspires my sprituallity most.",
      image: radhavallav,
      date: "December 9, 2024",
      readTime: "6 min read",
      content: `
        Radhavallabha Temple was unlike any other place I visited. There is no murti of Krishna here—only 
        Radha Rani, representing how Krishna serves her with full devotion.

        The moment I entered, I could feel deep spiritual energy. The devotees were singing beautiful bhajans, 
        and the atmosphere was peaceful and full of love.

        Standing there, I felt a different kind of connection—a reminder that love is about surrender and 
        purity. This temple touched my heart in a very personal way.

      `,
    },
    {
      title: "Sunset in Vrindavan",
      excerpt: "Witnessing the magical dawn at Vrindavan temples and how these precious moments transform into artistic inspiration for capturing divine beauty.",
      image: vrindavan1,
      date: "December 10, 2024",
      readTime: "7 min read",
      content: `
        Vrindavan during sunset is a different world altogether. I went to Prem Mandir just before the sun 
        started going down, and the view was simply breathtaking.

        As the temple slowly turned golden in the evening light, thousands of people gathered to watch the 
        lighting ceremony. The bhajans started, the air filled with divine music, and for a moment, I felt 
        like everything around me had stopped.

        The fountains, the carvings, the atmosphere—everything looked magical. Standing there, watching the 
        sunset behind Prem Mandir, I felt overwhelming peace. It was one of the most beautiful evenings of 
        my entire life.

      `,
    },



  ];








  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Thoughts & Reflections
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing my journey through devotion blog posts and reflections on spirituality, life.
          </p>
        </div>

        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Hover3D>
                    <BlogCard {...post} onClick={() => setSelectedPost(post)} />
                  </Hover3D>
                </div>
              ))}
            </div>

      </div>

      
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
