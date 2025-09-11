import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Zap } from "lucide-react";
import serviceActionImage from "@/assets/service-action.jpg";

const features = [
  {
    icon: Heart,
    title: "Student-Focused",
    description: "We understand student budgets and busy schedules. Affordable prices, flexible pickup times.",
  },
  {
    icon: Users,
    title: "Trusted by UCT",
    description: "Hundreds of satisfied students trust us with their favorite sneakers every month.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Professional-grade equipment and eco-friendly products for the best results.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description: "Most orders completed within 24 hours. Same-day service available for urgent needs.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">SipSips Fresh Kicks?</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Started by a UCT student who was tired of dirty sneakers but couldn't afford new ones every semester. 
                We're here to keep your kicks looking fresh without breaking the bank.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src={serviceActionImage} 
              alt="Professional sneaker cleaning in action" 
              className="relative rounded-2xl shadow-elevation w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;