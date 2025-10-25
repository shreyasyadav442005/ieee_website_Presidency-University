
import { Mail, Phone, User, MapPin, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with IEEE Presidency University Student Chapter. We're here to help 
            and answer any questions you might have about our programs and activities.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Reach out through any of the following ways.
            </p>
          </div>

          {/* First Row - Contact Persons */}
<div className="flex justify-center mb-12">
  {/* Contact Person 1 */}
  <Card className="hover-lift border-0 shadow-lg text-center">
    <CardContent className="p-6 sm:p-12 lg:p-16">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-ieee-blue rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
        <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Mohammed Zaid S</h3>
      <p className="text-base sm:text-lg font-semibold text-gray-600 mb-4 sm:mb-6">Contact Person</p>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-center text-gray-600">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-ieee-blue flex-shrink-0" />
          <a href="tel:+918660739890" className="hover:text-ieee-blue transition-colors text-base sm:text-lg font-bold">
            +91 86607 39890
          </a>
        </div>
        <div className="flex items-center justify-center text-gray-600">
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-ieee-blue flex-shrink-0" />
          <a href="mailto:zaidp232005@gmail.com" className="hover:text-ieee-blue transition-colors font-semibold text-sm sm:text-base break-all">
            zaidp232005@gmail.com
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
             
            {/* Contact Person 2
            <Card className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-6 sm:p-12 lg:p-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-ieee-blue rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Keerthi M</h3>
                <p className="text-base sm:text-lg font-semibold text-gray-600 mb-4 sm:mb-6">Contact Person</p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-ieee-blue flex-shrink-0" />
                    <a href="tel:+919380197576" className="hover:text-ieee-blue transition-colors text-base sm:text-lg font-bold">
                      +91 93801 97576
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-ieee-blue flex-shrink-0" />
                    <a href="mailto:keerthipu375@gmail.com" className="hover:text-ieee-blue transition-colors font-semibold text-sm sm:text-base break-all">
                      keerthipu375@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Second Row - General Inquiries and Location */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* General Email */}
            <Card className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-6 sm:p-12 lg:p-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-ieee-orange rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">General Inquiries</h3>
                <p className="text-base sm:text-lg font-semibold text-gray-600 mb-4 sm:mb-6">For general questions and information</p>
                <div className="flex items-center justify-center text-gray-600">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-ieee-orange flex-shrink-0" />
                  <a href="mailto:ieeepresidencyuniversity@outlook.com" className="hover:text-ieee-orange transition-colors font-semibold text-sm sm:text-base break-all">
                    ieeepresidencyuniversity@outlook.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-6 sm:p-12 lg:p-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-ieee-blue to-ieee-orange rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-base sm:text-lg font-semibold text-gray-600 mb-4 sm:mb-6">Visit our campus location</p>
                <div className="flex items-center justify-center text-gray-600">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-ieee-blue flex-shrink-0" />
                  <a 
                    href="https://maps.app.goo.gl/KjB18x6o5hkKjpVS9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-ieee-blue transition-colors font-bold text-base sm:text-lg"
                  >
                    Presidency University, Bengaluru
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-xl text-gray-600">
              Follow us on social media for updates and announcements
            </p>
          </div>

          <Card className="border-0 shadow-lg max-w-md mx-auto">
            <CardContent className="p-12 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.instagram.com/ieee_presence_?igsh=MW90dGVnZ2U3Y3Bzbg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-ieee-blue rounded-full flex items-center justify-center text-white hover:bg-ieee-dark-blue transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ieee-presidency-university-384538387/" 
                  className="w-12 h-12 bg-ieee-orange rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-600 mt-4">
                Stay updated with our latest events and activities
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't hesitate to reach out if you have any questions about joining IEEE or our programs.
          </p>
          <div className="flex justify-center">
            <Link to="/join">
              <Button className="bg-ieee-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                Join IEEE Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
