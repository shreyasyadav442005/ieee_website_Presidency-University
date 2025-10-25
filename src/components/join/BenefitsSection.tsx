
import { Network, Lightbulb, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Network,
      title: "Professional Networking",
      description: "Connect with industry professionals, alumni, and fellow IEEE members worldwide."
    },
    {
      icon: Lightbulb,
      title: "Innovation Opportunities",
      description: "Access to cutting-edge research projects and innovation labs for hands-on experience."
    },
    {
      icon: Trophy,
      title: "Competition Participation",
      description: "Participate in national and international IEEE competitions and hackathons."
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Develop leadership skills through chapter activities and volunteer opportunities."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Join <span className="text-gradient">IEEE Presidency University</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Discover the amazing benefits and opportunities waiting for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-ieee-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
