import { FileText, ExternalLink } from "lucide-react";
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
            
            {/* September 2024 Edition */}
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
                      IEEE Newsletter September Edition 2024
                    </h3>
                    <p className="text-gray-600 leading-relaxed"></p>
                  </div>
                  <div className="md:col-span-1 text-center md:text-right space-y-4">
                    <a
                      href="https://drive.google.com/file/d/1SMAkqRZd8852FmAaKxW9QCJM60Owj72q/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View PDF
                      </Button>
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1SMAkqRZd8852FmAaKxW9QCJM60Owj72q"
                      download
                    >
                      <Button className="bg-ieee-orange hover:bg-orange-600 text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* December 2024 Edition */}
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
                      IEEE Newsletter December Edition 2024
                    </h3>
                    <p className="text-gray-600 leading-relaxed"></p>
                  </div>
                  <div className="md:col-span-1 text-center md:text-right space-y-4">
                    <a
                      href="https://drive.google.com/file/d/1b5No9WT05x-9xy7gCLqpPpLfTEzCOMLc/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-ieee-orange hover:bg-orange-600 text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View PDF
                      </Button>
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1b5No9WT05x-9xy7gCLqpPpLfTEzCOMLc"
                      download
                    >
                      <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* March 2025 Edition */}
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
                      IEEE Newsletter March Edition 2025
                    </h3>
                    <p className="text-gray-600 leading-relaxed"></p>
                  </div>
                  <div className="md:col-span-1 text-center md:text-right space-y-4">
                    <a
                      href="https://drive.google.com/file/d/1Bzw5N3_9ahyiBeIxuCHwkjPhJNa7jyuW/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View PDF
                      </Button>
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1Bzw5N3_9ahyiBeIxuCHwkjPhJNa7jyuW"
                      download
                    >
                      <Button className="bg-ieee-orange hover:bg-orange-600 text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* June 2025 Edition */}
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
                      IEEE Newsletter June Edition 2025
                    </h3>
                    <p className="text-gray-600 leading-relaxed"></p>
                  </div>
                  <div className="md:col-span-1 text-center md:text-right space-y-4">
                    <a
                      href="https://drive.google.com/file/d/1-0Dtr2IxMvTGMJHQd3IGDVWDFhHzpVfT/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-ieee-orange hover:bg-orange-600 text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View PDF
                      </Button>
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1-0Dtr2IxMvTGMJHQd3IGDVWDFhHzpVfT"
                      download
                    >
                      <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* September 2025 Edition */}
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-ieee-orange to-ieee-blue rounded-full flex items-center justify-center mx-auto md:mx-0">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      IEEE Newsletter September Edition 2025
                    </h3>
                    <p className="text-gray-600 leading-relaxed"></p>
                  </div>
                  <div className="md:col-span-1 text-center md:text-right space-y-4">
                    <a
                      href="https://drive.google.com/file/d/1ESFUE9cW92cqFnodZFKaaPXF6Ws7g6Po/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-ieee-blue hover:bg-ieee-dark-blue text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View PDF
                      </Button>
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1ESFUE9cW92cqFnodZFKaaPXF6Ws7g6Po"
                      download
                    >
                      <Button className="bg-ieee-orange hover:bg-orange-600 text-white w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
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

export default Newsletters;
