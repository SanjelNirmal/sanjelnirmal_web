import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // EmailJS submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_j2q2efe",
        "template_060zof4",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "W3-mcQGJGknmFSSot"
      );

      alert("✔️ Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have questions, want to collaborate, 
            or simply wish to share your thoughts on devotional art.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Card className="shadow-devotional hover-3d">
              <CardHeader>
                <CardTitle className="flex items-center font-heading text-2xl">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  Email Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  For commissions, collaborations, or general inquiries:
                </p>
                <a
                  href="mailto:hackingwithnirmal@gmail.com"
                  className="text-primary hover:text-accent transition-smooth font-medium"
                >
                  hackingwithnirmal@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-devotional hover-3d">
              <CardHeader>
                <CardTitle className="flex items-center font-heading text-2xl">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Follow my devotional journey on social media:
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Instagram:</span>{" "}
                    <a
                      href="https://www.instagram.com/shree_kishori_jiu_ka_daas/"
                      className="text-primary hover:text-accent transition-smooth"
                    >
                      @shree_kishori_jiu_ka_daas
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Facebook:</span>{" "}
                    <a
                      href="https://www.facebook.com/nirmalsanjel07"
                      className="text-primary hover:text-accent transition-smooth"
                    >
                      Nirmal Sanjel
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-devotional">
              <CardContent className="p-6">
                <p className="font-heading text-lg text-center italic">
                  "Every message is received with gratitude and devotion. 
                  Hare Krishna! 🙏"
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-devotional">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Share your thoughts..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full shadow-devotional hover:shadow-float"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>


          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-heading text-3xl mb-6 text-center">Find Me Here</h2>
            <div className="w-full h-96 shadow-devotional rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.1309979549696!2d85.3232040749199!3d27.619717829351934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb179ee3715aef%3A0xfb23bd38fde58a69!2sNirmal%20Arts%20Gallery!5e1!3m2!1sen!2snp!4v1763650586374!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vrindavan Map"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            
            <Card className="shadow-devotional hover-3d">
              <CardHeader>
                <CardTitle className="flex items-center font-heading text-2xl">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Follow my devotional journey on social media:
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">X:</span>{" "}
                    <a
                      href="https://x.com/nirmalsarts"
                      className="text-primary hover:text-accent transition-smooth"
                    >
                      @nirmalsarts
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Youtube:</span>{" "}
                    <a
                      href="https://www.youtube.com/@nirmalsanjel071"
                      className="text-primary hover:text-accent transition-smooth"
                    >
                      Nirmal Sanjel
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-devotional hover-3d">
              <CardHeader>
                <CardTitle className="flex items-center font-heading text-2xl">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  Connect to Meta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Follow my devotional journey on social media:
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Instagram:</span>{" "}
                    <a
                      href="https://www.instagram.com/shree_kishori_jiu_ka_daas/"
                      className="text-primary hover:text-accent transition-smooth"
                    >
                      @shree_kishori_jiu_ka_daas
                    </a>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Facebook:</span>{" "}
                    <a
                      href="https://www.facebook.com/nirmalsanjel07"
                      className="text-primary hover:text-accent transition-smooth"
                    >
                      Nirmal Sanjel
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>


            <Card className="bg-gradient-card shadow-devotional">
              <CardContent className="p-6">
                <p className="font-heading text-lg text-center italic">
                  "With the blessings of Radha-Krishna, I look forward to connecting with you all!
                  Shree Radhe! 🙏"
                </p>
              </CardContent>
            </Card>
          </div>
          


        
                
        </div>
      </div>
    </div>
  );
};

export default Contact;
