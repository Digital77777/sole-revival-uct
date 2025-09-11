import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              SipSips Fresh Kicks,
              <br />
              <span className="text-accent">Every Day</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              UCT's premium sneaker cleaning service. We bring your favorite shoes back to life with professional care and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 shadow-elevation text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Book Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                onClick={() => scrollToSection('services')}
              >
                View Services
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="Professional sneaker cleaning workspace" 
              className="relative rounded-2xl shadow-glow w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;