
import { Phone, Mail, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const ContactEventPerson = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Student Event Volunteers</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our Student Event Volunteers for any queries or assistance
            regarding event registration and participation.
          </p>
        </div>
      </section>

      {/* Contact Persons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Person 1 */}
            <Card className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-ieee-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                {/* TODO: Replace with actual contact person 1 details */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monika P</h3>
                <p className="text-gray-600 mb-4">Student Event Volunteer</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-ieee-blue" />
                    <a href="tel:+919148902320" className="hover:text-ieee-blue transition-colors">
                      +91 91489 02320 {/* TODO: Add actual phone number */}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-ieee-blue" />
                    <a href="mailto:monikapgowda11@gmail.com" className="hover:text-ieee-blue transition-colors">
                      monikapgowda11@gmail.com {/* TODO: Add actual email */}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Person 2 */}
            <Card className="hover-lift border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-ieee-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                {/* TODO: Replace with actual contact person 2 details */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Beryl T Binu</h3>
                <p className="text-gray-600 mb-4">Student Event Volunteer</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-ieee-orange" />
                    <a href="tel:+919019995449" className="hover:text-ieee-orange transition-colors">
                      +91 90199 95449 {/* TODO: Add actual phone number */}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-ieee-orange" />
                    <a href="mailto:beryltbinu120@gmail.com" className="hover:text-ieee-orange transition-colors">
                      beryltbinu120@gmail.com {/* TODO: Add actual email */}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactEventPerson;
