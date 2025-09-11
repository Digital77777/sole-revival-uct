import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shield, Clock, Star } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Deep Clean",
    price: "R80",
    description: "Complete restoration of your sneakers with professional-grade cleaning solutions and techniques.",
    features: ["Stain removal", "Sole whitening", "Lace replacement", "Protective coating"],
    popular: true,
  },
  {
    icon: Shield,
    title: "Quick Clean",
    price: "R45",
    description: "Fast and effective cleaning perfect for regular maintenance and light dirt removal.",
    features: ["Surface cleaning", "Quick dry", "Basic touch-ups", "20min service"],
    popular: false,
  },
  {
    icon: Star,
    title: "Premium Care",
    price: "R120",
    description: "The ultimate sneaker treatment with premium products and detailed restoration work.",
    features: ["Everything in Deep Clean", "Premium protection", "Color restoration", "30-day guarantee"],
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional sneaker cleaning services tailored for busy UCT students
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-elevation hover:-translate-y-1 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <div className="text-3xl font-black text-primary">{service.price}</div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;