
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import BenefitsSection from "@/components/join/BenefitsSection";
import StepsSection from "@/components/join/StepsSection";
import FAQSection from "@/components/join/FAQSection";
import RegistrationFormSection from "@/components/join/RegistrationFormSection";

const Join = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <UserPlus className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Join IEEE Presidency University</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Ready to be part of something exciting? Join the world's largest technical 
            professional organization and kickstart your innovation adventure! 🚀
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-2">
              "You're just one form away from your next innovation adventure!"
            </p>
            
          </div>
        </div>
      </section>

      <BenefitsSection />
      <RegistrationFormSection />
      <StepsSection />
      <FAQSection />

      {/* CTA Section - Modified to link to Contact page */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help! Reach out to us for any queries about joining IEEE.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="bg-ieee-orange hover:bg-orange-600 text-white px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
