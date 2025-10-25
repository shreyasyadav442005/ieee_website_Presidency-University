import { Users, Target, Eye, Award, Calendar, BookOpen, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "Inception of the Chapter",
      description: "IEEE Student Chapter established at Presidency University with 10 members."
    },
    {
      year: "2023",
      title: "First Technical Workshop",
      description: "Conducted a hands-on workshop on 'Bipolar and CMOS Analog Circuit Design' from 17th to 22nd July."
    },
    {
      year: "2023",
      title: "1st International IEEE Conference",
      description: "Hosted the International Conference on Recent Innovation in Smart and Sustainable Technology."
    },
    {
      year: "2024",
      title: "Advancing Women in WiCAS",
      description: "A focused IEEE event celebrating and empowering women in Wireless and Circuits & Systems (WiCAS) through innovation and collaboration."
    },
    {
      year: "2025",
      title: "IoT Unplugged: Connecting the Future with IEEE ComSoc",
      description: "Dive into the world of IoT with hands-on insights and expert talks."
    },
    {
      year: "2025",
      title: "Deep Learning & LLMs",
      description: "Unlock the world of neural networks and large language models."
    }
  ];

  const team = [
    {
      name: "Dr. Abdul Sharief",
      role: "Prof. & Dean SOE",
      department: "School of Engineering",
      year: "Presidency Univeristy",
      society: "",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751386232/Dean_SOE_qlp4hw.jpg"
    },
    {
      name: "Dr. Rajiv Ranjan Singh",
      role: "Professor & HOD",
      department: "Department of ECE",
      year: "School of Engineering",
      society: "IEEE Circuits & Systems Society",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/ECE_HoD_wha6os.jpg"
    },
    {
      name: "Dr. Joseph Anthony Prathap",
      role: "Associate Professor",
      department: "Department of ECE",
      year: "School of Engineering",
      society: "IEEE Computational Intelligence Society, Sensor Council, Nano Technology Council",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/JAP_Sir_pggpnq.jpg"
    },
    {
      name: "Dr. K. Rafeeq Ahemed",
      role: "Professor",
      department: "Department of ECE",
      year: "School of Engineering",
      society: "IEEE Communications Society",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/KRA_sir_h55rv7.jpg"
    },
    {
      name: "Dr. Dharmesh Kumar Srivastava",
      role: "Associate Professor",
      department: "Department Of ECE",
      year: "School of Engineering",
      society: "IEEE Power Electronics Society",
      image: "https://presidencyuniversity.in/uploads/mentor/67de94fec163b1742640382.jpg"
    },
    {
      name: "Dr. Veena C.S",
      role: "Professor",
      department: "Department of ECE",
      year: "School of Engineering",
      society: "IEEE Signal Processing Society",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392324/Veena_mam_n74pu8.jpg"
    },
    {
      name: "Dr. Vinutha C.B",
      role: "Associate Professor",
      department: "Department of ECE",
      year: "School of Engineering",
      society: "IEEE Communications Society",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/Vinutha_Mam_pn024s.jpg"
    },
    {
      name: "Dr. Azra Jeelani",
      role: "Associate Professor",
      department: "Department of ECE",
      year: "School of Engineering",
      society: "IEEE Industrial Electronics Society",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751392323/HAzra_mam_hbakjy.jpg"
    },
    
    {
      name: "Dr. Sandhya Dass",
      role: "Associate Professor",
      department: "Department Of ECE",
      year: "School of Engineering",
      society: "IEEE Consumer Technology Society",
      image: "https://presidencyuniversity.in/uploads/mentor/ece/11.%20Dr.%20Sandhya%20Dass.webp"
    },
    {
      name: "Dr. Aniloy Augustine Frank",
      role: "Professor",
      department: "Department Of ECE",
      year: "School of Engineering",
      society: "IEEE Council on Electronic Design Automation",
      image: "https://presidencyuniversity.in/uploads/mentor/66d1a47d2b1f41725015165.jpg"
    },
    {
      name: "Dr. Vanithalakshmi Mariappan",
      role: "Associate Professor",
      department: "Department Of ECE",
      year: "School of Engineering",
      society: "",
      image: "https://res.cloudinary.com/dk34keh8x/image/upload/v1751440972/VANITHA_MAM_kos8bt.jpg"
    },

  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-ieee-orange">IEEE Presidency University</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering students to advance technology for humanity through innovation,
            education, and professional development since 2023.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-ieee-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to fostering technical growth, leadership development, and innovation-driven
                  initiatives among students to align with global engineering advancements and IEEE's core objectives.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-ieee-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Institutional Contribution</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our student branch plays an active role in enhancing the academic and research ecosystem
                  of Presidency University by bridging the gap between industry, academia, and technology-driven communities.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-ieee-blue to-ieee-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ethical Foundations</h3>
                <p className="text-gray-600 leading-relaxed">
                  We uphold the highest standards of integrity, accountability,
                  and professional ethics in all our activities—ensuring that technology is advanced responsibly for the benefit of society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">
              Discover the various activities and initiatives that make our chapter unique
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Technical Workshops",
                description: "Hands-on workshops covering cutting-edge technologies and industry best practices."
              },
              {
                icon: Users,
                title: "Research Projects",
                description: "Collaborative research initiatives addressing real-world technological challenges."
              },
              {
                icon: Zap,
                title: "Innovation Labs",
                description: "State-of-the-art facilities for prototyping and developing innovative solutions."
              },
              {
                icon: Calendar,
                title: "Industry Connect",
                description: "Regular sessions with industry experts and networking opportunities."
              },
              {
                icon: Award,
                title: "Competitions",
                description: "Technical competitions and hackathons to foster competitive spirit."
              },
              {
                icon: Target,
                title: "Professional Development",
                description: "Skills development programs and certification courses for career growth."
              }
            ].map((activity, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-ieee-blue rounded-lg flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Milestones and achievements that define our chapter's growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 h-full w-0.5 bg-ieee-blue"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative mb-8 flex items-center">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-ieee-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-full ml-10">
                  <Card className="hover-lift border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-ieee-orange mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Team IEEE Presidency University</h2>
            <p className="text-xl text-gray-600">
              The dedicated Members driving our chapter's success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-ieee-blue font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-1">{member.department}</p>
                  <p className="text-sm text-gray-500 mb-1">{member.year}</p>
                  <p className="text-sm text-gray-700 font-medium">{member.society}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
