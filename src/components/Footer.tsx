import { Heart, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FK</span>
              </div>
              <span className="text-xl font-bold">Fresh Kicks</span>
            </div>
            <p className="text-white/70 mb-4">
              UCT's trusted sneaker cleaning service. Keeping students fresh since 2024.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-white/70">
              <li>UCT Campus Area</li>
              <li>Rondebosch, Cape Town</li>
              <li>WhatsApp: +27 XX XXX XXXX</li>
              <li>@uctfreshkicks</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for UCT students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;