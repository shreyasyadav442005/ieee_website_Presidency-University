
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RegistrationFormSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below to begin your IEEE journey with us!
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardContent className="p-8">
            <div className="p-6 bg-ieee-light-blue/20 rounded-lg">
              <h3 className="text-lg font-semibold text-ieee-blue mb-4">Form includes:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Name
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Roll Number
                </div>
                 <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Contact Number
                </div>
                 <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Mail ID
                </div>
              </div>
              <div className="mt-6">
                <Button 
                  className="w-full bg-ieee-orange hover:bg-orange-600 text-white py-3"
                  onClick={() => window.open('https://forms.office.com/r/e3hLhAQYXf', '_blank')}
                >
                  Open Registration Form
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationFormSection;
