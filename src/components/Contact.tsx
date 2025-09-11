import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll get back to you within 2 hours to confirm your appointment.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready for <span className="text-primary">Fresh Kicks?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your sneaker cleaning service today. Quick, easy, and guaranteed results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-elevation">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Book Your Service</CardTitle>
              <CardDescription>Fill out the form and we'll confirm your appointment</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  type="tel"
                  placeholder="WhatsApp Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  placeholder="Tell us about your sneakers (brand, condition, special requests...)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
                <Button type="submit" className="w-full bg-gradient-primary text-lg py-6">
                  Book My Cleaning Service
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">UCT Campus Area<br />Rondebosch, Cape Town</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">+27 XX XXX XXXX<br />Fast response guaranteed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Clock className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-pink-500/10 rounded-lg">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Follow Us</h3>
                  <p className="text-muted-foreground">@uctfreshkicks<br />See daily transformations</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;