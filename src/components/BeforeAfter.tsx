import beforeAfterImage from "@/assets/before-after.jpg";
import cleanSneakersImage from "@/assets/clean-sneakers.jpg";

const BeforeAfter = () => {
  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See The <span className="text-accent">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real students. We turn beat-up kicks into fresh statement pieces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
              <img 
                src={beforeAfterImage} 
                alt="Before and after sneaker cleaning comparison" 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Amazing transformation!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
              <img 
                src={cleanSneakersImage} 
                alt="Collection of professionally cleaned sneakers" 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Fresh and spotless</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-black text-primary">500+</div>
            <p className="text-muted-foreground">Sneakers Cleaned</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-accent">98%</div>
            <p className="text-muted-foreground">Student Satisfaction</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-success">24hr</div>
            <p className="text-muted-foreground">Average Turnaround</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;