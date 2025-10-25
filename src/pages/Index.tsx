import { ArrowRight, Users, Trophy, Calendar, Lightbulb, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return <Layout>
      <section className="gradient-hero text-white py-12 sm:py-20 lg:py-32 relative overflow-hidden pt-24 sm:pt-20 lg:pt-32">
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="animate-fade-in text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Innovate. Inspire.
          <span className="block text-ieee-orange">
            IEEE at Presidency University
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
          Join the world's largest technical professional organization and be part of
          a community that's advancing technology for humanity. Connect, learn, and innovate with us!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link to="/join">
            <Button className="bg-ieee-orange hover:bg-orange-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto">
              Join Our Chapter
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full flex flex-col items-center mt-8 lg:mt-0">
        <div className="block w-full max-w-2xl">
          <img
            alt="IEEE Presidency University"
            className="rounded-2xl shadow-2xl w-full h-auto"
            src="/uploads/bc1ae829-5416-4a9d-82fb-a7b5e4fcca2d.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[{
              icon: Users,
              number: "90+",
              label: "Active Members"
            }, {
              icon: Trophy,
              number: "25+",
              label: "Awards Won"
            }, {
              icon: Calendar,
              number: "55+",
              label: "Events Organized"
            }, {
              icon: Lightbulb,
              number: "10+",
              label: "Projects Completed"
            }].map((stat, index) => <div key={index} className="text-center animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-ieee-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-ieee-blue mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-gradient">IEEE Presidency University</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a student chapter - we're a community of innovators,
              researchers, and future leaders in technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[{
              icon: Target,
              title: "Our Mission",
              description: "To advance technology for the benefit of humanity through education, research, and professional development."
            }, {
              icon: Eye,
              title: "Our Vision",
              description: "To be a premier student chapter that nurtures technological innovation and professional excellence."
            }, {
              icon: Heart,
              title: "Our Values",
              description: "Innovation, integrity, professionalism, and commitment to advancing technology for humanity."
            }].map((item, index) => <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-ieee-blue to-ieee-orange rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/about">
              <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white px-6 sm:px-8 py-3 w-full sm:w-auto">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Shape the Future of Technology?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Join IEEE Presidency University and connect with like-minded innovators,
            participate in cutting-edge research, and build your professional network.
          </p>
          <Link to="/join">
            <Button className="bg-ieee-orange hover:bg-orange-600 text-white px-8 sm:px-12 py-4 text-base sm:text-lg font-semibold animate-bounce-gentle w-full sm:w-auto">
              Join Our Community Today!
              <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};

export default Index;