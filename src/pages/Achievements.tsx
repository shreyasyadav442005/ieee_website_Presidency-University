import { Trophy, Award, Star, Medal, Users, BookOpen, Zap, Target, Lightbulb, Heart, ArrowRight, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Achievements = () => {
  const awards = [
    {
      title: "ExCom Member Appointment",
      organization: "IEEE CAS Bengaluru Section",
      year: "2025",
      description: `Dr. Rajiv Ranjan Singh, Head of Department & Professor, Department of ECE, Presidency University, Bengaluru, has been appointed as an Executive Committee Member, recognizing his significant contributions and leadership within the IEEE community.`,
      category: "Recognition",
      icon: Star
    },
    {
      title: "ExCom Member Appointment (Newsletter Editor)",
      organization: "IEEE PELS and IES",
      year: "2025",
      description: `Dr. Joseph Anthony Prathap, an Associate Professor at Presidency University, Bengaluru, has been appointed as an Executive Committee Member, serving as Editor Newsletter for both IEEE Power Electronics Society (PELS) and IEEE Industrial Electronics Society (IES) for the year 2025. This appointment acknowledges his expertise and contribution to the societies.`,
      category: "Innovation",
      icon: Book
    },
    {
      title: "Student Volunteer",
      organization: "IEEE CAS Bengaluru Section",
      year: "2025",
      description: "M Aishwarya, a student from the Department of Electronics & Communication Engineering (VLSI) at Presidency University, Bengaluru, has been selected as a Student Volunteer as a Creative Team of the IEEE Circuits and Systems (CASS) Bangalore Chapter for the year 2025. Her dedication and potential were identified, leading to this esteemed selection to contribute to the chapter's activities and initiatives.",
      category: "Student Volunteerism",
      icon: Award
    }
  ];

  const achievements = [
    {
      metric: "25+",
      label: "Awards & Recognition",
      description: "-"
    },
    {
      metric: "15+",
      label: "Research Papers",
      description: "-"
    },
    {
      metric: "20+",
      label: "Successful Projects",
      description: "-"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sivaperumal",
      role: "Pro Vice Chancellor",
      quote: "",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1753071467/pro_vc_hhzv1t.jpg"
    },
    {
      name: "Dr. Abdul Sharief",
      role: "Dean, SOE",
      quote: "",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751386232/Dean_SOE_qlp4hw.jpg"
    },
    {
      name: "Dr. Rajiv Ranjan Singh",
      role: "HOD, Dept of ECE",
      quote: "",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/ECE_HoD_wha6os.jpg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Our Achievements</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Celebrating excellence, innovation, and the remarkable accomplishments
            of our IEEE chapter and members.
          </p>
        </div>
      </section>

      {/* Achievement Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-ieee-blue mb-2">{achievement.metric}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{achievement.label}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Major Awards & Recognition</h2>
            <p className="text-xl text-gray-600">
              Prestigious awards that recognize our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.slice(0, 2).map((award, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ieee-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <award.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-ieee-light-blue text-ieee-blue">
                          {award.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{award.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-sm text-ieee-blue font-medium mb-3">{award.organization}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {awards.slice(2, 3).map((award, index) => (
            <div key={index} className="flex justify-center mt-8">
              <Card className="hover-lift border-0 shadow-lg max-w-lg w-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ieee-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <award.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-ieee-light-blue text-ieee-blue">
                          {award.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{award.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-sm text-ieee-blue font-medium mb-3">{award.organization}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Past Achievements Section - Adjusted background color */}
      <section className="py-20 bg-ieee-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Achievements</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our comprehensive history of achievements and milestones
            </p>
            <Link to="/past-achievements">
              <Button className="bg-gradient-to-r from-ieee-blue to-ieee-orange text-white shadow-lg hover:shadow-xl hover:from-ieee-dark-blue hover:to-orange-600 transition-all duration-300 text-lg px-8 py-3 font-semibold">
                View All Past Achievements
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Background color remains bg-gray-50 */}
      {/*<section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600">
              Messages from Academic Leadership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex text-ieee-orange mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}
    </Layout>
  );
};

export default Achievements;