import { Heart, Mail, MapPin, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border mt-20 shadow-devotional">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-heading text-primary">Nirmal Sanjel</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Devoted to spreading divine love and spirituality through art, photography, and heartfelt connection.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              
              <span className="text-sm">In service to divine Spritual Mother🕉️</span>

            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
              <span className="text-sm"><b>Radha Rani</b></span>
              <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-heading text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Home
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Blog
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Gallery
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-heading text-foreground">Contact</h4>
            <div className="flex flex-col space-y-3">
              <a href="mailto:hackingwithnirmal@gmail.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth text-sm group">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-smooth" />
                <span>hackingwithnirmal@gmail.com</span>
              </a>
              <a href="tel:+977 9848744321" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth text-sm group">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-smooth" />
                <span>+977 9848744321</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <a href="https://maps.app.goo.gl/moZDmA4JknHWsEDR6?g_st=ipc" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth text-sm group">
                <MapPin className="h-4 w-4" />
                <span>Lalitpur, Nepal</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-heading text-foreground">Follow Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/nirmalsanjel07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground p-3 rounded-lg transition-smooth hover:scale-110 shadow-soft hover:shadow-devotional"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/shree_kishori_jiu_ka_daas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground p-3 rounded-lg transition-smooth hover:scale-110 shadow-soft hover:shadow-devotional"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@nirmalsanjel071" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground p-3 rounded-lg transition-smooth hover:scale-110 shadow-soft hover:shadow-devotional"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/nirmalsarts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground p-3 rounded-lg transition-smooth hover:scale-110 shadow-soft hover:shadow-devotional"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Join our community and stay connected with devotional content
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nirmal Sanjel. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">

                Terms of Service

              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
