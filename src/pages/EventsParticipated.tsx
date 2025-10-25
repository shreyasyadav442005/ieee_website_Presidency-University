import { Trophy, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const EventsParticipated = () => {
  // Events manually grouped
  const events2024_2025 = [
    {
    id: 35,
    name: "Microsoft R&D Lab",
    date: "June 17, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 34,
    name: "IEEE PROJECT EXPO 2025",
    date: "May 07, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 33,
    name: "Deep Learning and LLMs",
    date: "April 21, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 32,
    name: "IEEE Quiz Cuits",
    date: "April 11, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 31,
    name: "CeNSE, Bangalore",
    date: "April 04, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 30,
    name: "Advancing Land Cover Mapping",
    date: "March 28, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 29,
    name: "IEEE ComSoc Event on IIOT",
    date: "March 07, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 28,
    name: "AI in Neuroscience",
    date: "March 07, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 27,
    name: "IEEE Seminar on FPGA implementation of Triple DES Algorithm",
    date: "February 28, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 26,
    name: "High Electron Mobility Transistors: A Future Perspective",
    date: "February 28, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 25,
    name: "IEEE Seminar on FPGA implementation of Neural network for Fault analysis in Power Switches",
    date: "February 21, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 24,
    name: "IEEE Seminar on FPGA implementation of HMAC algorithm",
    date: "February 14, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 23,
    name: "Passive Radar: Past, Present and Future Challenges",
    date: "February 14, 2025",
    venue: "Presidency University, Bengaluru",
    "type": "",
    participationType: ""
  },
  {
    id: 22,
    name: "Metamaterials and Beyond in Antenna Design",
    date: "January 31, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 21,
    name: "Digital Image Forensics Achievements And Challenges",
    date: "January 24, 2025",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 20,
    name: "Women Safety and Self Defence",
    date: "December 13, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 19,
    name: "Comprehension of KVL and KCL in Hindi",
    date: "December 6, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 18,
    name: "IEEE Student Branch Meet 2024",
    date: "November 15, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 17,
    name: "Foundations Of Quantum Computing And Introduction To Qiskit",
    date: "October 21, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 16,
    name: "Industrial Visit to CENSE, IISC, Bengaluru",
    date: "October 11, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 15,
    name: "AI Virtual Companion",
    date: "October 04, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 14,
    name: "Technical Quiz for Second year ECE students",
    date: "October 1, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 13,
    name: "IEEE Day Celebration",
    date: "October 1, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 12,
    name: "Fundamentals Of Cybersecurity",
    date: "September 27, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 11,
    name: "ARTIFICIAL INTELLIGENCE AND ITS IMPACT",
    date: "September 20, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 10,
    name: "IEEE NTC sponsored Two Days Event on Nano-Technology Design, Computing and Applications",
    date: "September 13–14, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 9,
    name: "Inaugural of IEEE Computational Intelligence Society, IEEE Communication Society, IEEE Sensor Council and IEEE Nano Technology Council",
    date: "September 13–14, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 8,
    name: "IEEE Student Branch Meet 2024",
    date: "August 31, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 7,
    name: "Webinar on “Into Corporate Space and Beyond Engineering”",
    date: "August 30, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 6,
    name: "Webinar on “Applications and Research Opportunities in Artificial Intelligence and Machine Learning”",
    date: "August 23, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 5,
    name: "Webinar on “Time Frequency Analysis of Non-Stationary Signals”",
    date: "August 09, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 4,
    name: "Two Day Workshop on VLSI Design",
    date: "July 29–30, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 3,
    name: "Webinar on “Present Status of Space borne Remote Sensing and Navigation – Global and Indian Scenario”",
    date: "July 26, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 2,
    name: "TECHNOVANZA Idea Presentation Event",
    date: "July 25, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 1,
    name: "One Day Colloquium on IEEE CASS Student Skill Development Program",
    date: "July 05, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  }
  ];

  const events2023_2024 = [
    {
    id: 19,
    name: "Present Status Of Spaceborne Remote Sensing And Navigation",
    date: "July 27, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 18,
    name: "VLSI Design",
    date: "July 23–24, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 17,
    name: "IEEE CASS In Student Skill Development",
    date: "July 5, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 16,
    name: "Women In WiCAS Technology",
    date: "June 28, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 15,
    name: "One Day Colloquium on Women in WiCAS Technology",
    date: "June 28, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 14,
    name: "PCB Design Hands On Session",
    date: "April 19, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 13,
    name: "AI Tools for Research",
    date: "April 11, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 12,
    name: "1st IEEE International Conference on Recent Innovation in Smart and Sustainable Technology",
    date: "March 8–9, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    "participationType": ""
  },
  {
    id: 11,
    name: "BYTEBASH Software Hackathon",
    date: "March 1, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 10,
    name: "PCB Design And Fabrication",
    date: "February 23, 2024",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 9,
    name: "TECHVOLUTION",
    date: "December 7–9, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 8,
    name: "Hardware Security Architecture For Emerging Technologies",
    date: "November 25, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 7,
    name: "PCB Design Using Presence Kicad",
    date: "October 18, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 6,
    name: "IEEE Day Celebration for Senior IEEE Members and Freshers",
    date: "October 1, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 5,
    name: "Engineers Day Celebration for Senior IEEE Members and Freshers",
    date: "October 1, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 4,
    name: "Microfluidics For Environmental Monitoring: Microplastics Detection",
    date: "September 21, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 3,
    name: "Design Methodologies For Embedded IoT And VLSI Systems Using EDA Tools",
    date: "September 21, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 2,
    name: "Recent Trends In Organic Devices",
    date: "August 21–25, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  },
  {
    id: 1,
    name: "Bipolar And CMOS Analog Circuit Design",
    date: "July 17–22, 2023",
    venue: "Presidency University, Bengaluru",
    type: "",
    participationType: ""
  }
  ];

  // Component to render a section
  const renderEventSection = (title: string, events: typeof events2023_2024) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b border-gray-300 pb-2">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event) => (
          <Card key={event.id} className="hover-lift border-0 shadow-lg relative">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 pr-2">
                  {event.name}
                </h3>
                <div className="flex flex-col items-end space-y-1">
                  {event.type && (
                    <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                  )}
                  {event.participationType && (
                    <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
                      {event.participationType}
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-16 h-16 text-ieee-orange mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Chapter's Event</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            All the programs, sessions, and learning opportunities conducted under IEEE are compiled here, showcasing our commitment to growth and tech..
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderEventSection("Year 2024–2025", events2024_2025)}
          {renderEventSection("Year 2023–2024", events2023_2024)}
        </div>
      </section>
    </Layout>
  );
};
export default EventsParticipated;