
import { FileText, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Newsletters = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">IEEE Newsletters</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with our latest news, achievements, and upcoming events 
            through our official newsletters.
          </p>
        </div>
      </section>

      {/* Newsletters Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Newsletter 1 */}
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 bg-ieee-blue rounded-full flex items-center justify-center mx-auto md:mx-0">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      IEEE Presidency Newsletter 01 {/* TODO: Update with actual newsletter title */}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>To be updated</span> {/* TODO: Update with actual release date */}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {/* TODO: Replace with actual newsletter description */}
                      To be updated
                    </p>
                  </div>
                  <div className="md:col-span-1 text-center md:text-right">
                    <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white"> 
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View PDF {/* TODO: Add actual PDF link */}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter 2 */}
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 bg-ieee-orange rounded-full flex items-center justify-center mx-auto md:mx-0">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      IEEE Presidency Newsletter 02 {/* TODO: Update with actual newsletter title */}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>To be updated</span> {/* TODO: Update with actual release date */}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {/* TODO: Replace with actual newsletter description */}
                      To be updated 
                    </p>
                  </div>
                  <div className="md:col-span-1 text-center md:text-right">
                    <Button className="bg-ieee-orange hover:bg-orange-600 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View PDF {/* TODO: Add actual PDF link */}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter 3 */}
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-ieee-blue to-ieee-orange rounded-full flex items-center justify-center mx-auto md:mx-0">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      IEEE Presidency Newsletter 03 {/* TODO: Update with actual newsletter title */}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>To be updated soon</span> {/* TODO: Update with actual release date */}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {/* TODO: Replace with actual newsletter description */}
                      To be updated
                    </p>
                  </div>
                  <div className="md:col-span-1 text-center md:text-right">
                    <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View PDF {/* TODO: Add actual PDF link */}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 
              TODO: To add more newsletters, duplicate the Card structure above and update:
              1. Newsletter title
              2. Release date
              3. Description content
              4. PDF link in the Button onClick handler
              5. Consider alternating the color scheme (ieee-blue, ieee-orange, gradient)
            */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletters;
