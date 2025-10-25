import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react"; // Import the Users icon

const Design = () => {
  const designers = [
    {
      name: "Shreyas Yadav M",
      role: "Lead Developer & Designer",
      contribution: "Led the website’s end-to-end development, design, and deployment.",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1752674450/123_yvddfl.jpg"
    },
    {
      name: "Mohammed Zaid S",
      role: "Event & Certificate Data Lead",
      contribution: "Handled event information flow and certificate data integration.",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1752673439/Dev_2_gyzl6t.png"
    },
    {
      name: "Monika P",
      role: "Content & Strategic Messaging",
      contribution: "Crafted and structured key written content across the website.",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1752673626/DEV3_qtgauj.jpg"
    }
  ];
  return (
    <Layout>
      {/* Header Section - now with blue background and a plain orange icon */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon with plain orange color, removed whitish background */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full">
              <Users className="w-12 h-12 text-orange-400" /> {/* Icon with orange color */}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Website Design Team
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Meet the talented team behind the IEEE Presidency University website design and development.
          </p>
        </div>
      </section>

      {/* Main Content Area - now with plain white background (dots removed) */}
      <div
        className="min-h-screen bg-white" // Reverted to plain white background
      >
        <div className="container mx-auto px-4 py-16">

          {/* Student Designers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Student Designers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {designers.map((designer, index) => (
                <Card
                  key={index}
                  className="group bg-card border-border hover:shadow-xl transition-all duration-300 ease-in-out
                             hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 transform-gpu" // Added unique hover effects
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <img
                        src={designer.image}
                        alt={designer.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {designer.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {designer.role}
                    </Badge>
                    <p className="text-muted-foreground text-sm">
                      {designer.contribution}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professor Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Under the Guidance of
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="max-w-md mx-auto bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img
                      src="https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/JAP_Sir_pggpnq.jpg"
                      alt="Professor Name"
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/20"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">
                    Dr. Joseph Anthony Prathap
                  </h3>
                  <Badge variant="outline" className="mb-3">
                    Faculty Advisor
                  </Badge>
                  <p className="text-muted-foreground">
                    Department of Electronics and Communication Engineering<br />
                    Presidency University, Bengaluru
                  </p>
                </CardContent>
              </Card>
              {/* New Professor Card */}
              <Card className="max-w-md mx-auto bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img
                      src="https://presidencyuniversity.in/uploads/mentor/ece/11.%20Dr.%20Sandhya%20Dass.webp"
                      alt="Professor Another Name"
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/20"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">
Dr. Sandhya Dass
                  </h3>
                  <Badge variant="outline" className="mb-3">
                    Faculty Advisor
                  </Badge>
                  <p className="text-muted-foreground">
                    Department of Electronics and Communication Engineering<br />
                    Presidency University, Bengaluru
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Design;
